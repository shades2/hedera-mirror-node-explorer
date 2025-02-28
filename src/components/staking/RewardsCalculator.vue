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

  <DashboardCard>
    <template v-slot:title>
      <p class="h-is-primary-title">Rewards Estimator</p>
    </template>
    <template v-slot:content>

      <div class="columns">
        <div class="column is-three-fifths">
          <div class="is-flex is-flex-direction-column is-align-items-flex-start">
            <p v-if="isMediumScreen" class="h-is-property-text mb-3">Choose node staked to</p>
            <p v-else class="h-is-text-size-3 mb-1">Choose node staked to</p>
            <o-field style="width: 100%">
              <o-select v-model="selectedNodeId" class="h-is-text-size-1" style="border-radius: 4px">
                <option v-for="n in nodes" :key="n.node_id" :value="n.node_id"
                        style="background-color: var(--h-theme-box-background-color)">
                  {{ makeNodeDescription(n) }} - {{ makeNodeStake(n) }}
                </option>
              </o-select>
            </o-field>
          </div>
        </div>
        <div class="column">
          <div class="is-flex is-flex-direction-column is-align-items-flex-start">
            <p v-if="isMediumScreen" class="h-is-property-text mb-3">Enter HBAR amount staked</p>
            <p v-else class="h-is-text-size-3 mb-1">Enter HBAR amount staked</p>
              <input class="input is-small has-text-right" type="text" placeholder="0"
                     :value="amountStaked"
                     @input="event => handleInput(event.target.value)"
                     style="width: 100%; height: 26px; margin-top: 1.5px; border-radius: 4px; border-width: 1px;
                     color: white; background-color: var(--h-theme-box-background-color)">
          </div>
        </div>
      </div>

      <div class="is-flex is-justify-content-space-between">
        <NetworkDashboardItem :name="'HBAR'" :title="'Current 24h Period Reward'" :value="currentReward.toString()"/>
        <NetworkDashboardItem :name="'HBAR'" :title="'Approx Monthly Reward'" :value="monthlyReward.toString()"/>
        <NetworkDashboardItem :name="'HBAR'" :title="'Approx Yearly Reward'" :value="yearlyReward.toString()"/>
        <NetworkDashboardItem :title="'Approx Yearly Reward Rate'" :value="yearlyRate*100 + '%'"/>
      </div>

      <div v-html="htmlNotice"/>

    </template>
  </DashboardCard>

</template>

<!-- --------------------------------------------------------------------------------------------------------------- -->
<!--                                                      SCRIPT                                                     -->
<!-- --------------------------------------------------------------------------------------------------------------- -->

<script lang="ts">

import {computed, defineComponent, inject, onBeforeMount, onMounted, PropType, ref, watch} from 'vue';
import NetworkDashboardItem from "@/components/node/NetworkDashboardItem.vue";
import DashboardCard from "@/components/DashboardCard.vue";
import {NetworkNode} from "@/schemas/HederaSchemas";
import {operatorRegistry} from "@/schemas/OperatorRegistry";
import {NodesLoader} from "@/components/node/NodesLoader";
import nodes from "@/pages/Nodes.vue";

export default defineComponent({
  name: 'RewardsCalculator',

  props: {
    network: String,
    amountInHbar: Number,
    nodeId: Number as PropType<number|null>
  },

  components: {
    DashboardCard,
    NetworkDashboardItem,
  },

  setup(props) {
    const htmlNotice = process.env.VUE_APP_ESTIMATOR_NOTICE ?? ""

    const isSmallScreen = inject('isSmallScreen', true)
    const isMediumScreen = inject('isMediumScreen', true)
    const isTouchDevice = inject('isTouchDevice', false)

    // const selectedNodeId = ref<number | null>(props.nodeId ?? null)
    // watch(() => props.nodeId, () => selectedNodeId.value = props.nodeId ?? null)
    //
    const selectedNodeId = computed(() => props.nodeId ?? null)
    const selectedNode = computed(() => {
      const nodeNb = selectedNodeId.value
      const nodes = nodesLoader.nodes.value
      return nodeNb != null && nodeNb < nodes.length ? nodes[nodeNb] : null
    })

    const amountStaked = ref<number>( 100)
    const updateAmountStaked = () => {
      amountStaked.value = props.amountInHbar ?? 100
    }
    watch(() => props.amountInHbar, updateAmountStaked)
    onBeforeMount(updateAmountStaked)

    const rewardRate = computed(() => {
      let result: number
      if (selectedNode.value) {
        const node = selectedNode.value
        result = node.reward_rate_start && node.stake_rewarded ? node.reward_rate_start / node.stake_rewarded : 0
      } else {
        result = 0
      }
      return result
    })
    const currentReward = computed(() => rewardRate.value && amountStaked.value ? Math.round(amountStaked.value * rewardRate.value * 10000) / 10000 : 0)
    const monthlyReward = computed(() => currentReward.value ? Math.round(currentReward.value * 30 * 100) / 100 : 0)
    const yearlyReward = computed(() => currentReward.value ? Math.round(currentReward.value * 365 * 10) / 10 : 0)
    const yearlyRate = computed(() => rewardRate.value ? Math.round(rewardRate.value * 365 * 10000) / 10000  : 0)

    //
    // Nodes
    //
    const nodesLoader = new NodesLoader()
    onMounted(() => nodesLoader.requestLoad())

    const makeNodeDescription = (node: NetworkNode) => {
      let result
      if (node.description) {
        result = node.description
      } else {
        result = node.node_account_id ? operatorRegistry.makeDescription(node.node_account_id) : null
      }
      return result
    }

    const makeNodeStake = (node: NetworkNode) => {
      const amountFormatter = new Intl.NumberFormat("en-US", {
        maximumFractionDigits: 0
      })
      const percentFormatter = new Intl.NumberFormat("en-US", {
        style: 'percent',
        maximumFractionDigits: 1
      })
      const unclampedStakeAmount = ((node.stake_rewarded ?? 0) + (node.stake_not_rewarded ?? 0))/100000000
      const percentMin = node.min_stake ? unclampedStakeAmount / (node.min_stake / 100000000) : 0
      const percentMax = node.max_stake ? unclampedStakeAmount / (node.max_stake / 100000000) : 0

      let result = amountFormatter.format(unclampedStakeAmount) + "ℏ staked"
      if (percentMin != 0 && percentMin < 1) {
        result += " (" + percentFormatter.format(percentMin) + " of Min)"
      } else if (percentMax !== 0) {
        result += " (" + percentFormatter.format(percentMax) + " of Max)"
      }
      return result
    }

    const handleInput = (value: string) => {
      const previousAmount = amountStaked.value
      const newAmount = Number(value)
      if (!Number.isNaN(newAmount) && newAmount >= 0 && newAmount <= 50000000000) {
        amountStaked.value = newAmount
      } else {
        amountStaked.value = -1
        amountStaked.value = previousAmount
      }
    }

    return {
      htmlNotice,
      isSmallScreen,
      isMediumScreen,
      isTouchDevice,
      selectedNodeId,
      amountStaked,
      rewardRate,
      currentReward,
      monthlyReward,
      yearlyReward,
      yearlyRate,
      nodes,
      makeNodeDescription,
      makeNodeStake,
      handleInput
    }
  }
});

</script>

<!-- --------------------------------------------------------------------------------------------------------------- -->
<!--                                                       STYLE                                                     -->
<!-- --------------------------------------------------------------------------------------------------------------- -->

<style>
.o-ctrl-sel {
  width: 100%;
}
</style>