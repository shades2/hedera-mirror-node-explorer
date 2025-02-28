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
import TopicDetails from "@/pages/TopicDetails.vue";
import TopicMessageTable from "@/components/topic/TopicMessageTable.vue";
import {SAMPLE_TOPIC_DUDE_MESSAGES, SAMPLE_TOPIC_MESSAGES} from "../Mocks";
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

describe("TopicDetails.vue", () => {

    it("Should display topic messages", async () => {

        await router.push("/") // To avoid "missing required param 'network'" error

        const mock = new MockAdapter(axios);

        const testTopic = SAMPLE_TOPIC_MESSAGES.messages[0].topic_id
        const matcher = "/api/v1/topics/" + testTopic + "/messages"
        mock.onGet(matcher).reply(200, SAMPLE_TOPIC_MESSAGES)

        const wrapper = mount(TopicDetails, {
            global: {
                plugins: [router, Oruga]
            },
            props: {
                topicId: testTopic
            },
        });
        await flushPromises()

        expect(wrapper.text()).toMatch(RegExp("^Messages for Topic " + testTopic))
        expect(wrapper.findComponent(TopicMessageTable).exists()).toBe(true)
    });

    it("Should update when topic id changes", async () => {

        await router.push("/") // To avoid "missing required param 'network'" error

        const mock = new MockAdapter(axios);

        let testTopic = SAMPLE_TOPIC_MESSAGES.messages[0].topic_id
        let matcher = "/api/v1/topics/" + testTopic + "/messages"
        mock.onGet(matcher).reply(200, SAMPLE_TOPIC_MESSAGES)

        const wrapper = mount(TopicDetails, {
            global: {
                plugins: [router, Oruga]
            },
            props: {
                topicId: testTopic
            },
        });
        await flushPromises()

        expect(wrapper.text()).toMatch(RegExp("^Messages for Topic " + testTopic))
        expect(wrapper.findComponent(TopicMessageTable).find('tbody').findAll('tr')[0].text())
            .toBe("66:06:30.0653 PMJan 13, 2022, UTCbackgroundMessage")

        testTopic = SAMPLE_TOPIC_DUDE_MESSAGES.messages[0].topic_id
        matcher = "/api/v1/topics/" + testTopic + "/messages"
        mock.onGet(matcher).reply(200, SAMPLE_TOPIC_DUDE_MESSAGES)

        await wrapper.setProps({
            topicId: testTopic
        })
        await flushPromises()
        // console.log(wrapper.text())

        expect(wrapper.text()).toMatch(RegExp("^Messages for Topic " + testTopic))
        expect(wrapper.findComponent(TopicMessageTable).find('tbody').findAll('tr')[0].text())
            .toBe("16:05:45.8654 PMJan 13, 2022, UTC  ~Tõ_New message_1")

    });

    it("Should detect invalid topic ID", async () => {

        await router.push("/") // To avoid "missing required param 'network'" error

        const invalidTopicId = "0.0.0.1000"
        const wrapper = mount(TopicDetails, {
            global: {
                plugins: [router, Oruga]
            },
            props: {
                topicId: invalidTopicId
            },
        });
        await flushPromises()
        // console.log(wrapper.html())
        // console.log(wrapper.text())

        expect(wrapper.get("#notificationBanner").text()).toBe("Invalid topic ID: " + invalidTopicId)
    });
});
