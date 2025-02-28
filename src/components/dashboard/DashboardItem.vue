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

  <div class="is-flex is-align-items-center">
    <div class="is-flex has-text-white"
         :class="{'is-align-items-center': variation, 'is-align-items-baseline': !variation}">
      <p class="dashboard-value has-text-white mr-2" :class="{'is-numeric':isNumeric}" >
        <span v-if="value !== null">{{ value }}</span>
        <span v-else class="has-text-grey">None</span>
      </p>
      <div class="is-flex-is-vertical"
           :class="{'h-is-text-size-3':isMediumScreen, 'h-is-text-size-1':!isMediumScreen, 'pt-1':isMediumScreen}"
           style="line-height: 1">
        <Variation v-if="variation" :variation="variation"/>
        <p class="h-is-text-size-1">{{ name }}</p>
      </div>
    </div>
  </div>

</template>

<!-- --------------------------------------------------------------------------------------------------------------- -->
<!--                                                      SCRIPT                                                     -->
<!-- --------------------------------------------------------------------------------------------------------------- -->

<script lang="ts">

import {defineComponent, inject} from 'vue';
import Variation from "@/components/dashboard/Variation.vue";

export default defineComponent({
  name: 'DashboardItem',
  components: {Variation},
  props: {
    name: String,
    value: String,
    variation: String,
    isNumeric: {
      type: Boolean,
      default: false
    }
  },

  setup() {
    const isMediumScreen = inject('isMediumScreen', true)

    return {isMediumScreen}
  },

});

</script>

<!-- --------------------------------------------------------------------------------------------------------------- -->
<!--                                                       STYLE                                                     -->
<!-- --------------------------------------------------------------------------------------------------------------- -->

<style scoped>

.dashboard-value {
  font-style: normal;
  font-weight: 300;
  font-size: 22px;
  line-height: 28px;
  letter-spacing: -0.05em;
}

@media (min-width: 1140px) {
  .dashboard-value {
    font-style: normal;
    font-weight: 300;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: -0.05em;
  }
}

@media (min-width: 1450px) {
  .dashboard-value {
    font-style: normal;
    font-weight: 300;
    font-size: 34px;
    line-height: 41px;
    letter-spacing: -0.05em;
  }
}

</style>
