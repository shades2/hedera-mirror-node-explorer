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
import {SAMPLE_TOKENS} from "../Mocks";
import Tokens from "@/pages/Tokens.vue";
import DashboardCard from "@/components/DashboardCard.vue";
import TokenTable from "@/components/token/TokenTable.vue";
import MockAdapter from "axios-mock-adapter";
import Oruga from "@oruga-ui/oruga-next";
import {HMSF} from "@/utils/HMSF";
import {EntityCacheStateV2} from "@/utils/EntityCacheV2";

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

describe("Tokens.vue", () => {

    test("no props", async () => {

        await router.push("/") // To avoid "missing required param 'network'" error

        const mock = new MockAdapter(axios);

        const matcher = "/api/v1/tokens"
        mock.onGet(matcher).reply(200, SAMPLE_TOKENS);

        const wrapper = mount(Tokens, {
            global: {
                plugins: [router, Oruga]
            },
            props: {},
        });

        await flushPromises()
        // console.log(wrapper.text())

        expect(wrapper.vm.nfTokenCache.state.value).toBe(EntityCacheStateV2.Started)
        expect(wrapper.vm.funTokenCache.state.value).toBe(EntityCacheStateV2.Started)

        const cards = wrapper.findAllComponents(DashboardCard)
        expect(cards.length).toBe(2)

        expect(cards[0].text()).toMatch(RegExp("^Recent Non Fungible Tokens"))
        const table1 = cards[0].findComponent(TokenTable)
        expect(table1.exists()).toBe(true)
        expect(table1.get('thead').text()).toBe("Token Symbol")
        expect(table1.get('tbody').text()).toBe(
            "0.0.29662956" +
            "QmVGABnvpbPwLcfG4iuW2JSzY8MLkALhd54bdPAbJxoEkB"
            +
            "0.0.748383" +
            "ĦFRENSKINGDOM"
        )

        expect(cards[1].text()).toMatch(RegExp("^Recent Fungible Tokens"))
        const table2 = cards[1].findComponent(TokenTable)
        expect(table2.exists()).toBe(true)
        expect(table2.get('thead').text()).toBe("Token Symbol")
        expect(table2.get('tbody').text()).toBe(
            "0.0.29662956" +
            "QmVGABnvpbPwLcfG4iuW2JSzY8MLkALhd54bdPAbJxoEkB"
            +
            "0.0.748383" +
            "ĦFRENSKINGDOM"
        )

        wrapper.unmount()
        await flushPromises()

        expect(wrapper.vm.nfTokenCache.state.value).toBe(EntityCacheStateV2.Stopped)
        expect(wrapper.vm.funTokenCache.state.value).toBe(EntityCacheStateV2.Stopped)
    });

});
