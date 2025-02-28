/*-
 *
 * Hedera Mirror Node Explorer
 *
 * Copyright (C) 2021 - 2022 Hedera Hashgraph, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import axios, {AxiosResponse} from "axios";
import {computed, ComputedRef, Ref, ref, watch, WatchSource, WatchStopHandle} from "vue";


export abstract class EntityLoader<E> {

    private readonly responseRef: Ref<AxiosResponse<E> | null> = ref(null)
    private readonly errorRef: Ref<unknown> = ref(null)
    private requestCounter = 0
    private watchStopHandle: WatchStopHandle|null = null

    //
    // Public
    //

    public response: ComputedRef<AxiosResponse<E>|null> = computed(() => this.responseRef.value)
    public entity: ComputedRef<E|null> = computed(() => this.responseRef.value?.data ?? null)
    public error: ComputedRef<unknown> = computed(() => this.errorRef.value)
    public got404: ComputedRef<boolean> = computed(() => this.errorRef.value !== null
                                            && axios.isAxiosError(this.errorRef.value)
                                            && this.errorRef.value?.response?.status === 404)

    public requestLoad(): void {
        this.requestCounter += 1
        const resolve = (newResponse: AxiosResponse<E>|null) => this.loadDidComplete(newResponse, this.requestCounter)
        const reject = (reason: unknown) => this.loadDidFail(reason, this.requestCounter)
        this.load().then(resolve, reject)
    }

    //
    // Protected
    //

    protected watchAndReload(sources: WatchSource<unknown>[]): void {
        if (this.watchStopHandle != null) {
            this.watchStopHandle()
            this.watchStopHandle = null
        }
        if (sources.length >= 1) {
            this.watchStopHandle = watch(sources, () => this.requestLoad())
        }
    }

    protected async load(): Promise<AxiosResponse<E>|null> {
        throw Error("must be subclassed")
    }

    //
    // Private
    //

    private loadDidComplete(newResponse: AxiosResponse<E>|null, requestCounter: number) {
        if (this.requestCounter == requestCounter) {
            this.responseRef.value = newResponse
            this.errorRef.value = null
        }
    }

    private loadDidFail(reason: unknown, requestCounter: number) {
        if (this.requestCounter == requestCounter) {
            this.responseRef.value = null
            this.errorRef.value = reason
        }
    }

}
