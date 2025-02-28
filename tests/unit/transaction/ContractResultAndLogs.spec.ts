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

import {flushPromises, mount} from "@vue/test-utils"
import router from "@/router";
import axios from "axios";
import {SAMPLE_COINGECKO, SAMPLE_CONTRACT_RESULT_DETAILS} from "../Mocks";
import MockAdapter from "axios-mock-adapter";
import {HMSF} from "@/utils/HMSF";
import ContractResultAndLogs from "@/components/transaction/ContractResultAndLogs.vue";

/*
    Bookmarks
        https://jestjs.io/docs/api
        https://test-utils.vuejs.org/api/

 */

HMSF.forceUTC = true

describe("ContractResultAndLogs.vue", () => {

    it("Should display the contract result and logs, given contract ID and timestamp", async () => {

        await router.push("/") // To avoid "missing required param 'network'" error

        const contractId = SAMPLE_CONTRACT_RESULT_DETAILS.contract_id
        const timestamp = SAMPLE_CONTRACT_RESULT_DETAILS.timestamp

        const mock = new MockAdapter(axios);
        const matcher1 = "/api/v1/contracts/" + contractId + "/results/" + timestamp
        mock.onGet(matcher1).reply(200, SAMPLE_CONTRACT_RESULT_DETAILS)
        const matcher2 = "https://api.coingecko.com/api/v3/coins/hedera-hashgraph"
        mock.onGet(matcher2).reply(200, SAMPLE_COINGECKO);

        const wrapper = mount(ContractResultAndLogs, {
            global: {
                plugins: [router]
            },
            props: {
                contractId: contractId,
                timestamp: timestamp,
                topLevel: true
            },
        });
        await flushPromises()
        // console.log(wrapper.html())
        // console.log(wrapper.text())

        expect(wrapper.text()).toMatch(RegExp("^Contract Result for " + contractId + " at " + timestamp))
        expect(wrapper.get("#resultValue").text()).toBe("SUCCESS")
        expect(wrapper.get("#fromValue").text()).toBe("0000 0000 0000 0000 0000 0000 0000 0000 000c e9b4Copy to Clipboard")
        expect(wrapper.get("#toValue").text()).toBe("0000 0000 0000 0000 0000 0000 0000 0000 0010 3783Copy to Clipboard")
        expect(wrapper.get("#typeValue").text()).toBe("None")
        expect(wrapper.get("#errorMessageValue").text()).toBe("None")
        expect(wrapper.get("#gasLimitValue").text()).toBe("480,000")
        expect(wrapper.get("#gasUsedValue").text()).toBe("384,000")
        expect(wrapper.get("#maxFeePerGasValue").text()).toBe("None")
        expect(wrapper.get("#maxPriorityFeePerGasValue").text()).toBe("None")
        expect(wrapper.get("#gasPriceValue").text()).toBe("0.00000000$0.0000")

        expect(wrapper.findAll("#logIndexValue").length).toBe(4)
    });

    it("Should display the contract result and logs, given transaction ID", async () => {

        await router.push("/") // To avoid "missing required param 'network'" error

        const transactionId = "0.0.846260-1662655524-114667756"
        const contractId = SAMPLE_CONTRACT_RESULT_DETAILS.contract_id
        const timestamp = SAMPLE_CONTRACT_RESULT_DETAILS.timestamp

        const mock = new MockAdapter(axios);
        const matcher1 = "/api/v1/contracts/results/" + transactionId
        mock.onGet(matcher1).reply(200, SAMPLE_CONTRACT_RESULT_DETAILS)
        const matcher2 = "https://api.coingecko.com/api/v3/coins/hedera-hashgraph"
        mock.onGet(matcher2).reply(200, SAMPLE_COINGECKO);

        const wrapper = mount(ContractResultAndLogs, {
            global: {
                plugins: [router]
            },
            props: {
                transactionIdOrHash: transactionId,
                topLevel: true
            },
        });
        await flushPromises()
        // console.log(wrapper.html())
        // console.log(wrapper.text())

        expect(wrapper.text()).toMatch(RegExp("^Contract Result for " + contractId + " at " + timestamp))
        expect(wrapper.get("#resultValue").text()).toBe("SUCCESS")
        expect(wrapper.get("#fromValue").text()).toBe("0000 0000 0000 0000 0000 0000 0000 0000 000c e9b4Copy to Clipboard")
        expect(wrapper.get("#toValue").text()).toBe("0000 0000 0000 0000 0000 0000 0000 0000 0010 3783Copy to Clipboard")
        expect(wrapper.get("#typeValue").text()).toBe("None")
        expect(wrapper.get("#errorMessageValue").text()).toBe("None")
        expect(wrapper.get("#gasLimitValue").text()).toBe("480,000")
        expect(wrapper.get("#gasUsedValue").text()).toBe("384,000")
        expect(wrapper.get("#maxFeePerGasValue").text()).toBe("None")
        expect(wrapper.get("#maxPriorityFeePerGasValue").text()).toBe("None")
        expect(wrapper.get("#gasPriceValue").text()).toBe("0.00000000$0.0000")

        expect(wrapper.findAll("#logIndexValue").length).toBe(4)
    });
});
