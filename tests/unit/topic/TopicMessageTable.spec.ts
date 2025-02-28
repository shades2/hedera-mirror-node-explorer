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
import Oruga from "@oruga-ui/oruga-next";
import {SAMPLE_TOPIC_DUDE_MESSAGES, SAMPLE_TOPIC_MESSAGES} from "../Mocks";
import TopicMessageTable from "@/components/topic/TopicMessageTable.vue";
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

describe("TopicMessageTable.vue", () => {

    it("Should display the table with 2 rows and without pagination", async () => {

        await router.push("/") // To avoid "missing required param 'network'" error

        const wrapper = mount(TopicMessageTable, {
            global: {
                plugins: [router, Oruga]
            },
            props: {
                nbItems: 42,
                messages: SAMPLE_TOPIC_MESSAGES.messages
            },
        });

        await flushPromises()
        // console.log(wrapper.find('thead').text())
        // console.log(wrapper.find('tbody').text())

        expect(wrapper.find('tbody').findAll('tr').length).toBe(2)
        expect(wrapper.find('.o-table__pagination').exists()).toBe(false)

        expect(wrapper.find('thead').text()).toBe("Sequence # Time Message")
        expect(wrapper.find('tbody').text()).toBe(
            "6" +
            "6:06:30.0653 PMJan 13, 2022, UTC" +
            "backgroundMessage"
            +
            "5" +
            "6:06:24.0564 PMJan 13, 2022, UTC" +
            "  ~T8_New message_5"
        )
    });

    it("Should display the table with 2 rows and pagination", async () => {

        await router.push("/") // To avoid "missing required param 'network'" error

        const wrapper = mount(TopicMessageTable, {
            global: {
                plugins: [router, Oruga]
            },
            props: {
                nbItems: 2,
                messages: SAMPLE_TOPIC_DUDE_MESSAGES.messages
            },
        });

        await flushPromises()
        // console.log(wrapper.html())

        expect(wrapper.find('tbody').findAll('tr').length).toBe(2)
        expect(wrapper.find('.o-table__pagination').exists()).toBe(true)
        expect(wrapper.find('.o-table__pagination').findAll('[role="button"]').length).toBe(4)
    });

    it("Should display the page 2 of the table", async () => {

        await router.push("/") // To avoid "missing required param 'network'" error

        const wrapper = mount(TopicMessageTable, {
            global: {
                plugins: [router, Oruga]
            },
            props: {
                nbItems: 2,
                messages: SAMPLE_TOPIC_DUDE_MESSAGES.messages,
            },
        });

        await flushPromises()
        // console.log(wrapper.html())

        expect(wrapper.find('tbody').findAll('tr').length).toBe(2)

        await wrapper.find('.o-table__pagination')
            .find('[aria-label="Page 2."]')
            .trigger('click')
        await flushPromises()

        expect(wrapper.find('tbody').findAll('tr').length).toBe(1)

        expect(wrapper.find('tbody').text()).toBe(
            "36:05:56.8711 PMJan 13, 2022, UTCbackgroundMessage"
        )
    });

});
