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
  <div>
  <p class="h-is-tertiary-text mb-2">{{ title }}</p>

  <div  v-if="hbarTransferLayout.rowCount >= 1">

    <div class="graph-container" v-bind:class="{'graph-container-8': dollarVisible }">

      <template v-if="dollarVisible">
        <div style="grid-column-end: span 1" class="h-is-text-size-3 has-text-grey-light has-text-weight-light mb-2">Account</div>
        <div style="grid-column-end: span 2" class="h-is-text-size-3 has-text-grey-light has-text-weight-light mb-2">Hbar Amount</div>
        <div/>
        <div style="grid-column-end: span 1" class="h-is-text-size-3 has-text-grey-light has-text-weight-light mb-2">Account</div>
        <div style="grid-column-end: span 2" class="h-is-text-size-3 has-text-grey-light has-text-weight-light mb-2">Hbar Amount</div>
        <div/>
      </template>
      <template v-else>
        <div style="grid-column-end: span 1" class="h-is-text-size-3 has-text-grey-light has-text-weight-light mb-2">Account</div>
        <div style="grid-column-end: span 1" class="h-is-text-size-3 has-text-grey-light has-text-weight-light mb-2">Hbar Amount</div>
        <div/>
        <div style="grid-column-end: span 1" class="h-is-text-size-3 has-text-grey-light has-text-weight-light mb-2">Account</div>
        <div style="grid-column-end: span 1" class="h-is-text-size-3 has-text-grey-light has-text-weight-light mb-2">Hbar Amount</div>
      </template>

      <template v-for="i in hbarTransferLayout.rowCount" v-bind:key="i">

        <!-- #0 : account id -->
        <div>
          <AccountLink v-if="i <= hbarTransferLayout.sources.length"
                       v-bind:account-id="hbarTransferLayout.sources[i-1].transfer.account"
                       null-label="MINT"
                       data-cy="sourceAccount"/>
        </div>

        <!-- #1 : hbar amount -->
        <div class="justify-end">
          <HbarAmount v-if="i <= hbarTransferLayout.sources.length"
                      v-bind:amount="hbarTransferLayout.sources[i-1].transfer.amount"
                      v-bind:colored="true"/>
        </div>

        <template v-if="dollarVisible">

          <!-- #2 : dollar amount -->
          <div class="justify-end">
            <HbarExtra v-if="i <= hbarTransferLayout.sources.length"
                       v-bind:tbarAmount="hbarTransferLayout.sources[i-1].transfer.amount"/>
          </div>

        </template>

        <!-- #3 : arrow -->
        <div  style="position: relative">
          <ArrowSegment
              v-bind:source-count="hbarTransferLayout.sources.length"
              v-bind:dest-count="hbarTransferLayout.destinations.length"
              v-bind:row-index="i-1"/>
        </div>

        <!-- #4 : account id -->
        <div v-bind:class="{'h-has-low-contrast': hasLowContrast(i-1)}">
          <AccountLink v-if="i <= hbarTransferLayout.destinations.length"
                       v-bind:account-id="hbarTransferLayout.destinations[i-1].transfer.account"
                       null-label="BURN"
                       data-cy="destinationAccount"/>
        </div>

        <!-- #5 : hbar amount -->
        <div class="justify-end" v-bind:class="{'h-has-low-contrast': hasLowContrast(i-1)}">
          <HbarAmount v-if="i <= hbarTransferLayout.destinations.length"
                      v-bind:amount="hbarTransferLayout.destinations[i-1].transfer.amount"
                      v-bind:colored="true"/>
        </div>

        <template v-if="dollarVisible">

          <!-- #6 : dollar amount -->
          <div class="justify-end" v-bind:class="{'h-has-low-contrast': hasLowContrast(i-1)}">
            <HbarExtra v-if="i <= hbarTransferLayout.destinations.length"
                       v-bind:tbarAmount="hbarTransferLayout.destinations[i-1].transfer.amount"/>
          </div>

          <!-- #7 : description -->
          <div v-bind:class="{'h-has-low-contrast': hasLowContrast(i-1)}">
            <span v-if="i <= hbarTransferLayout.destinations.length" class="h-is-smaller">
              {{ hbarTransferLayout.destinations[i-1].description }}
            </span>
          </div>

        </template>

      </template>

    </div>

  </div>

  <p v-else-if="showNone" class="has-text-grey">None</p>

  </div>
</template>

<!-- --------------------------------------------------------------------------------------------------------------- -->
<!--                                                      SCRIPT                                                     -->
<!-- --------------------------------------------------------------------------------------------------------------- -->

<script lang="ts">

import {defineComponent, inject, PropType, ref, watch} from "vue";
import AccountLink from "@/components/values/AccountLink.vue";
import ArrowSegment from "@/components/transfer_graphs/ArrowSegment.vue";
import HbarAmount from "@/components/values/HbarAmount.vue";
import HbarExtra from "@/components/values/HbarExtra.vue";
import {HbarTransferLayout} from "@/components/transfer_graphs/layout/HbarTransferLayout";
import {Transaction} from "@/schemas/HederaSchemas";
import {operatorRegistry} from "@/schemas/OperatorRegistry";

export default defineComponent({
  name: "HbarTransferGraphF",
  components: {HbarAmount, HbarExtra, ArrowSegment, AccountLink},
  props: {
    transaction: Object as PropType<Transaction>,
    title: String,
    showNone: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {

    const hbarTransferLayout = ref(new HbarTransferLayout(props.transaction))

    function hasLowContrast(i: number): boolean {
      const destinations = hbarTransferLayout.value.destinations
      const accountId = i < destinations.length ? destinations[i].transfer.account : null
      return accountId != null && operatorRegistry.lookup(accountId) != null;
    }

    watch(() => props.transaction, () => {
      hbarTransferLayout.value = new HbarTransferLayout(props.transaction)
    })

    const dollarVisible = inject("isSmallScreen", true)

    return {
      hbarTransferLayout,
      hasLowContrast,
      dollarVisible
    }
  }
})

</script>

<!-- --------------------------------------------------------------------------------------------------------------- -->
<!--                                                      STYLE                                                      -->
<!-- --------------------------------------------------------------------------------------------------------------- -->

<style scoped>

.graph-container {
  display: inline-grid;
  grid-template-columns: repeat(5, auto);
  column-gap: 1em;
}

.graph-container-8 {
  grid-template-columns: repeat(8, auto);
}

div.graph-container > div.justify-end {
  justify-self: end;
}

</style>
