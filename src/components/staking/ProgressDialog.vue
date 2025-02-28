<!--
  -
  - Hedera Mirror Node Explorer
  -
  - Copyright (C) 2021 - 2022 Hedera Hashgraph, LLC
  -
  - Licensed under the Apache License, Version 2.0 (the "License");
  - you may not use this file except in compliance with the License.
  - You may obtain a copy of the License at
  -
  -      http://www.apache.org/licenses/LICENSE-2.0
  -
  - Unless required by applicable law or agreed to in writing, software
  - distributed under the License is distributed on an "AS IS" BASIS,
  - WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  - See the License for the specific language governing permissions and
  - limitations under the License.
  -
  -->

<!-- --------------------------------------------------------------------------------------------------------------- -->
<!--                                                     TEMPLATE                                                    -->
<!-- --------------------------------------------------------------------------------------------------------------- -->

<template>
  <div :class="{'is-active': showDialog}" class="modal has-text-white">
    <div class="modal-background"/>
    <div class="modal-content" style="width: 768px; border-radius: 16px">
      <div class="box">

        <div class="is-flex h-is-primary-title is-justify-content-space-between is-align-items-baseline">
          <slot name="dialogTitle"/>
          <span v-if="showSpinner" class="loader is-inline-block"/>
        </div>

        <hr class="h-card-separator"/>

        <div class="is-flex is-align-items-baseline" style="line-height: 21px">

          <div v-if="mode === Mode.Success" class="icon is-medium has-text-success ml-0">
            <i class="fas fa-check"/>
          </div>
          <div v-else-if="mode === Mode.Error" class="icon is-medium has-text-danger">
            <span style="font-size: 18px; font-weight: 900">X</span>
          </div>
          <div v-else />

          <div v-if="mainMessage" class="block h-is-tertiary-text mt-2"> {{ mainMessage }}</div>
          <div v-else class="block h-is-tertiary-text" style="visibility: hidden">Filler</div>
        </div>

        <div class="is-flex is-align-items-baseline mt-4" style="line-height: 21px">
          <span v-if="extraMessage" class="h-is-property-text"> {{ extraMessage }} </span>
          <span v-else class="h-is-property-text" style="visibility: hidden">Filler</span>
          <TransactionLink v-if="extraTransaction" :transaction-id="extraTransaction" class="ml-2"/>
        </div>

        <div class="is-flex is-justify-content-flex-end">
          <button class="button is-white is-small" :disabled="closeDisabled" @click="handleClose">CLOSE</button>
        </div>

      </div>
    </div>
  </div>
</template>

<!-- --------------------------------------------------------------------------------------------------------------- -->
<!--                                                      SCRIPT                                                     -->
<!-- --------------------------------------------------------------------------------------------------------------- -->

<script lang="ts">

import {computed, defineComponent, PropType} from "vue";
import TransactionLink from "@/components/values/TransactionLink.vue";

export enum Mode { Busy = 1, Success = 2, Error = 3 }

export default defineComponent({
  name: "ProgressDialog",
  components: {TransactionLink},
  props: {
    showDialog: {
      type: Boolean,
      default: false
    },
    mode: {
      type: Number as PropType<Mode>,
      default: Mode.Busy
    },
    mainMessage: String,
    extraMessage: String,
    extraTransaction: String,
    showSpinner: Boolean
  },

  setup(props, context) {

    const handleClose = () => {
      context.emit('update:showDialog', false)
    }

    const closeDisabled = computed(() => props.mode == Mode.Busy)

    return {
      handleClose,
      closeDisabled,
      Mode,
    }
  }
});

</script>

<!-- --------------------------------------------------------------------------------------------------------------- -->
<!--                                                       STYLE                                                     -->
<!-- --------------------------------------------------------------------------------------------------------------- -->

<style/>

