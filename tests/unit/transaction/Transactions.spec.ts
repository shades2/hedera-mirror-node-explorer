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
import {SAMPLE_TOKEN, SAMPLE_TRANSACTIONS} from "../Mocks";
import Transactions from "@/pages/Transactions.vue";
import DashboardCard from "@/components/DashboardCard.vue";
import PlayPauseButtonV2 from "@/components/PlayPauseButtonV2.vue";
import TransactionFilterSelect from "@/components/transaction/TransactionFilterSelect.vue";
import TransactionTableV2 from "@/components/transaction/TransactionTableV2.vue";
import MockAdapter from "axios-mock-adapter";
import Oruga from "@oruga-ui/oruga-next";
import {HMSF} from "@/utils/HMSF";

/*
    Bookmarks
        https://jestjs.io/docs/api
        https://test-utils.vuejs.org/api/

 */

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});

HMSF.forceUTC = true

describe("Transactions.vue", () => {

    test("no props", async () => {

        await router.push("/") // To avoid "missing required param 'network'" error

        const mock = new MockAdapter(axios)

        const matcher1 = "/api/v1/transactions"
        mock.onGet(matcher1).reply(200, SAMPLE_TRANSACTIONS)

        const matcher2 = "/api/v1/tokens/" + SAMPLE_TOKEN.token_id
        mock.onGet(matcher2).reply(200, SAMPLE_TOKEN)

        const wrapper = mount(Transactions, {
            global: {
                plugins: [router, Oruga]
            },
            props: {},
        });

        await flushPromises()
        // console.log(wrapper.text())

        const card = wrapper.findComponent(DashboardCard)
        expect(card.exists()).toBe(true)
        expect(card.text()).toMatch(RegExp("^Recent Transactions"))

        const playPause = card.findComponent(PlayPauseButtonV2)
        expect(playPause.exists()).toBe(true)

        const select = card.findComponent(TransactionFilterSelect)
        expect(select.exists()).toBe(true)
        expect(select.text()).toBe(
            "TYPES: ALLCONTRACT CALLCONTRACT CREATECONTRACT DELETECONTRACT UPDATECRYPTO ADD LIVE " +
            "HASHCRYPTO APPROVE ALLOWANCECRYPTO CREATE ACCOUNTCRYPTO DELETE ACCOUNTCRYPTO DELETE ALLOWANCECRYPTO " +
            "DELETE LIVE HASHCRYPTO TRANSFERCRYPTO UPDATE ACCOUNTETHEREUM TRANSACTIONFILE " +
            "APPENDFILE CREATEFILE DELETEFILE UPDATEFREEZEHCS CREATE TOPICHCS DELETE TOPICHCS SUBMIT MESSAGEHCS " +
            "UPDATE TOPICSCHEDULE CREATESCHEDULE DELETESCHEDULE SIGNSYSTEM DELETESYSTEM UNDELETETOKEN " +
            "ASSOCIATETOKEN BURNTOKEN CREATETOKEN DELETETOKEN DISSOCIATETOKEN FEE SCHEDULE UPDATETOKEN FREEZETOKEN " +
            "KYC GRANTTOKEN KYC REVOKETOKEN MINTTOKEN PAUSETOKEN UNFREEZETOKEN UNPAUSETOKEN " +
            "UPDATETOKEN WIPEUNCHECKED SUBMIT")

        const table = card.findComponent(TransactionTableV2)
        expect(table.exists()).toBe(true)
        expect(table.get('thead').text()).toBe("ID Type Content Time")
        expect(table.get('tbody').text()).toBe(
            "0.0.29624024@1646025139.152901498CRYPTO TRANSFER0.0.29624024\n\n" +
            "1\n\n" +
            "0.0.296939115:12:31.6676 AMFeb 28, 2022, UTC"
        )
    });

});
