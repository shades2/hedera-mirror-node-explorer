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

  <section class="section has-text-centered" style="min-height: 450px">

    <div class="is-flex is-justify-content-center">

      <div class="is-flex is-flex-direction-column is-align-items-start">
        <div id="mobile-drop-down-menu" class="ml-1 mb-5 ">
          <o-field>
            <o-select v-model="selectedNetwork" class="h-is-navbar-item">
              <option v-for="network in networkRegistry.getEntries()" :key="network.name" :value="network.name">
                {{ network.displayName }}
              </option>
            </o-select>
          </o-field>
        </div>
        <a id="dashboard-menu-item"
           :class="{'is-rimmed': isDashboardRoute}"
           class="button is-ghost h-is-mobile-navbar-item h-is-dense"
           @click="$router.replace({name: 'MainDashboard'})">Dashboard</a>
        <a :class="{ 'is-rimmed': isTransactionRoute}"
           class="button is-ghost h-is-mobile-navbar-item h-is-dense"
           @click="$router.replace({name: 'Transactions'})">Transactions</a>
        <a :class="{ 'is-rimmed': isTokenRoute}"
           class="button is-ghost h-is-mobile-navbar-item h-is-dense"
           @click="$router.replace({name: 'Tokens'})">Tokens</a>
        <a :class="{ 'is-rimmed': isTopicRoute}"
           class="button is-ghost h-is-mobile-navbar-item h-is-dense"
           @click="$router.replace({name: 'Topics'})">Topics</a>
        <a :class="{ 'is-rimmed': isContractRoute}"
           class="button is-ghost h-is-mobile-navbar-item h-is-dense"
           @click="$router.replace({name: 'Contracts'})">Contracts</a>
        <a :class="{ 'is-rimmed': isAccountRoute}"
           class="button is-ghost h-is-mobile-navbar-item h-is-dense"
           @click="$router.replace({name: 'Accounts'})">Accounts</a>
        <a :class="{ 'is-rimmed': isNodeRoute}"
           class="button is-ghost h-is-mobile-navbar-item h-is-dense"
           @click="$router.replace({name: 'Nodes'})">Nodes</a>
        <a v-if="isStakingEnabled"
           :class="{ 'is-rimmed': isStakingRoute}"
           class="button is-ghost h-is-mobile-navbar-item h-is-dense"
           @click="$router.replace({name: 'Staking'})">Staking</a>
        <a v-if="isBlocksEnabled"
           :class="{ 'is-rimmed': isBlocksRoute}"
           class="button is-ghost h-is-mobile-navbar-item h-is-dense"
           @click="$router.replace({name: 'Blocks'})">Blocks</a>
      </div>

    </div>

  </section>

  <Footer :keep-background="true"/>

</template>

<!-- --------------------------------------------------------------------------------------------------------------- -->
<!--                                                      SCRIPT                                                     -->
<!-- --------------------------------------------------------------------------------------------------------------- -->

<script lang="ts">

import {computed, defineComponent, inject, onBeforeUnmount, onMounted, ref, watch} from 'vue';
import {useRoute} from "vue-router";
import router from "@/router";
import {MEDIUM_BREAKPOINT} from "@/App.vue";
import Footer from "@/components/Footer.vue";
import {networkRegistry} from "@/schemas/NetworkRegistry";

export default defineComponent({
  name: 'MobileMenu',
  components: {Footer},
  props: {
    "searchedId": String,
    "network": String
  },
  setup() {
    const isSmallScreen = inject('isSmallScreen', true)
    const isTouchDevice = inject('isTouchDevice', false)
    const isStakingEnabled = process.env.VUE_APP_ENABLE_STAKING === 'true'
    const isBlocksEnabled = process.env.VUE_APP_ENABLE_BLOCKS === 'true'

    const route = useRoute()
    const network = computed(() => { return route.params.network })
    const name = computed(() => { return route.query.from })
    const selectedNetwork = ref(network.value)
    watch(selectedNetwork, (selection) => {
      router.replace({
        params: {network: selection}
      })
    })

    const isDashboardRoute = computed(() => {
      return name.value === 'MainDashboard'
    })
    const isTransactionRoute = computed(() => {
      return name.value === 'Transactions' || name.value === 'TransactionsById' || name.value === 'TransactionDetails'
    })
    const isTokenRoute = computed(() => {
      return name.value === 'Tokens' || name.value === 'TokenDetails'
    })
    const isTopicRoute = computed(() => {
      return name.value === 'Topics' || name.value === 'TopicDetails'
    })
    const isContractRoute = computed(() => {
      return name.value === 'Contracts' || name.value === 'ContractDetails'
    })
    const isAccountRoute = computed(() => {
      return name.value === 'Accounts' || name.value === 'AccountDetails' || name.value === 'AccountBalances'
    })
    const isNodeRoute = computed(() => {
      return name.value === 'Nodes' || name.value === 'NodeDetails'
    })
    const isStakingRoute = computed(() => {
      return name.value === 'Staking'
    })
    const isBlocksRoute = computed(() => {
      return name.value === 'Blocks'
    })

    const  onResizeHandler = () => {
      if (window.innerWidth >= MEDIUM_BREAKPOINT) {
        router.back()
      }
    }
    onMounted(() => {
      window.addEventListener('resize', onResizeHandler);
    })
    onBeforeUnmount(() => {
      window.removeEventListener('resize', onResizeHandler);
    })

    return {
      isSmallScreen,
      isTouchDevice,
      isStakingEnabled,
      isBlocksEnabled,
      selectedNetwork,
      isDashboardRoute,
      isTransactionRoute,
      isTokenRoute,
      isTopicRoute,
      isContractRoute,
      isAccountRoute,
      isNodeRoute,
      isStakingRoute,
      isBlocksRoute,
      networkRegistry
    }
  }
})

</script>


<!-- --------------------------------------------------------------------------------------------------------------- -->
<!--                                                       STYLE                                                     -->
<!-- --------------------------------------------------------------------------------------------------------------- -->

<style scoped>

</style>
