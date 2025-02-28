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

  <section class="section" :class="{'h-mobile-background': isTouchDevice || !isSmallScreen}">

    <DashboardCard>
      <template v-slot:title>
        <span class="h-is-primary-title">Contract </span>
        <span class="h-is-secondary-text is-numeric mr-3">{{ contract ? normalizedContractId : "" }}</span>
        <span v-if="contract" class="is-inline-block">
          <router-link :to="{name: 'AccountDetails', params: {accountId: normalizedContractId}}">
            <span class="h-is-property-text">Show associated account</span>
          </router-link>
        </span>
      </template>
      <template v-slot:content>
        <NotificationBanner v-if="notification" :message="notification"/>
      </template>

      <template v-slot:leftContent>
            <Property id="balance">
              <template v-slot:name>{{ tokens?.length ? 'Balances' : 'Balance' }}</template>
              <template v-slot:value>
                <div class="has-flex-direction-column">
                  <HbarAmount v-if="contract" :amount="balance" :show-extra="true"/>
                  <div v-if="displayAllTokenLinks">
                    <router-link :to="{name: 'AccountBalances', params: {accountId: contractId}}">
                      See all token balances
                    </router-link>
                  </div>
                  <div v-else>
                    <div v-for="t in tokens" :key="t.token_id">
                      <TokenAmount :amount="t.balance" :token-id="t.token_id" :show-extra="true"/>
                    </div>
                  </div>
                </div>
              </template>
            </Property>
            <Property id="key">
              <template v-slot:name>Admin Key</template>
              <template v-slot:value>
                <KeyValue :key-bytes="contract?.admin_key?.key" :key-type="contract?.admin_key?._type" :show-none="true"/>
              </template>
            </Property>
            <Property id="memo">
              <template v-slot:name>Memo</template>
              <template v-slot:value>
                <BlobValue :blob-value="contract?.memo" :show-none="true" :base64="true" class="should-wrap"/>
              </template>
            </Property>
            <Property id="alias">
              <template v-slot:name>Alias</template>
              <template v-slot:value>
                <HexaValue v-bind:byte-string="aliasByteString" v-bind:show-none="true"/>
              </template>
            </Property>
            <Property id="expiresAt">
              <template v-slot:name>Expires at</template>
              <template v-slot:value>
                <TimestampValue v-bind:timestamp="contract?.expiration_timestamp" v-bind:show-none="true"/>
              </template>
            </Property>
            <Property id="autoRenewPeriod">
              <template v-slot:name>Auto Renew Period</template>
              <template v-slot:value>
                <DurationValue v-bind:number-value="contract?.auto_renew_period"/>
              </template>
            </Property>
            <Property id="code">
              <template v-slot:name>Initcode</template>
              <template v-slot:value>
                <ByteCodeValue :byte-code="contract?.bytecode"/>
              </template>
            </Property>
      </template>

      <template v-slot:rightContent>
            <Property id="obtainer">
              <template v-slot:name>Obtainer</template>
              <template v-slot:value>
                <AccountLink :account-id="obtainerId" :show-none="true" null-label="None"/>
              </template>
            </Property>
            <Property id="proxyAccount">
              <template v-slot:name>Proxy Account</template>
              <template v-slot:value>
                <AccountLink :account-id="proxyAccountId" :show-none="true" null-label="None"/>
              </template>
            </Property>
            <Property id="validFrom">
              <template v-slot:name>Valid from</template>
              <template v-slot:value>
                <TimestampValue :timestamp="contract?.timestamp?.from" :show-none="true"/>
              </template>
            </Property>
            <Property id="validUntil">
              <template v-slot:name>Valid until</template>
              <template v-slot:value>
                <TimestampValue :timestamp="contract?.timestamp?.to" :show-none="true"/>
              </template>
            </Property>
            <Property id="file">
              <template v-slot:name>File</template>
              <template v-slot:value>
                <StringValue :string-value="contract?.file_id"/>
              </template>
            </Property>
            <Property id="evmAddress">
              <template v-slot:name>EVM Address</template>
              <template v-slot:value>
                <HexaValue :byte-string="contract?.evm_address" :show-none="true"/>
              </template>
            </Property>
      </template>
    </DashboardCard>

    <DashboardCard>
      <template v-slot:title>
        <p class="h-is-secondary-title">Recent Transactions</p>
      </template>

      <template v-slot:control>
        <div class="is-flex is-align-items-flex-end">
          <PlayPauseButtonV2 v-model:state="cacheState"/>
          <TransactionFilterSelect v-model:filter="selectedTransactionFilter"/>
        </div>
      </template>

      <template v-slot:content>
        <ContractTransactionTable
            v-if="contract"
            v-bind:transactions="transactions"
            v-bind:nb-items="10"
        />
      </template>
    </DashboardCard>

  </section>

  <Footer/>

</template>

<!-- --------------------------------------------------------------------------------------------------------------- -->
<!--                                                      SCRIPT                                                     -->
<!-- --------------------------------------------------------------------------------------------------------------- -->

<script lang="ts">

import {computed, defineComponent, inject, onBeforeUnmount, onMounted, ref, watch} from 'vue';
import KeyValue from "@/components/values/KeyValue.vue";
import HexaValue from "@/components/values/HexaValue.vue";
import ContractTransactionTable from "@/components/contract/ContractTransactionTable.vue";
import PlayPauseButtonV2 from "@/components/PlayPauseButtonV2.vue";
import AccountLink from "@/components/values/AccountLink.vue";
import TimestampValue from "@/components/values/TimestampValue.vue";
import DurationValue from "@/components/values/DurationValue.vue";
import DashboardCard from "@/components/DashboardCard.vue";
import HbarAmount from "@/components/values/HbarAmount.vue";
import TokenAmount from "@/components/values/TokenAmount.vue";
import BlobValue from "@/components/values/BlobValue.vue";
import StringValue from "@/components/values/StringValue.vue";
import ByteCodeValue from "@/components/values/ByteCodeValue.vue";
import Footer from "@/components/Footer.vue";
import NotificationBanner from "@/components/NotificationBanner.vue";
import {EntityID} from "@/utils/EntityID";
import Property from "@/components/Property.vue";
import {ContractLoader} from "@/components/contract/ContractLoader";
import {AccountLoader} from "@/components/account/AccountLoader";
import {TransactionCacheV2} from "@/components/transaction/TransactionCacheV2";
import {EntityCacheStateV2} from "@/utils/EntityCacheV2";
import {useRoute, useRouter} from "vue-router";
import TransactionFilterSelect from "@/components/transaction/TransactionFilterSelect.vue";

const MAX_TOKEN_BALANCES = 3

export default defineComponent({

  name: 'ContractDetails',

  components: {
    TransactionFilterSelect,
    ByteCodeValue,
    Property,
    NotificationBanner,
    Footer,
    BlobValue,
    HbarAmount,
    TokenAmount,
    DashboardCard,
    AccountLink,
    TimestampValue,
    DurationValue,
    PlayPauseButtonV2,
    ContractTransactionTable,
    KeyValue,
    HexaValue,
    StringValue
  },

  props: {
    contractId: String,
    network: String
  },

  setup(props) {
    const isSmallScreen = inject('isSmallScreen', true)
    const isTouchDevice = inject('isTouchDevice', false)

    const router = useRouter()
    const route = useRoute()


    //
    // basic computed's
    //

    const validEntityId = computed(() => {
      return props.contractId ? EntityID.parse(props.contractId, true) != null : false
    })
    const normalizedContractId = computed(() => {
      return props.contractId ? EntityID.normalize(props.contractId) : null
    })

    //
    // transaction filter selection
    //

    const selectedTransactionFilter = ref("")
    const updateQuery = () => {
      router.replace({
        query: {type: selectedTransactionFilter.value.toLowerCase()}
      })
    }
    watch(selectedTransactionFilter, () => {
      updateQuery()
    })

    //
    // contract
    //

    const contractLoader = new ContractLoader(normalizedContractId)
    onMounted(() => contractLoader.requestLoad())

    const accountLoader = new AccountLoader(contractLoader.contractId)
    onMounted(() => accountLoader.requestLoad())

    const displayAllTokenLinks = computed(() => accountLoader.tokens.value ? accountLoader.tokens.value.length > MAX_TOKEN_BALANCES : false)

    const notification = computed(() => {
      let result: string|null

      const expiration = contractLoader.entity.value?.expiration_timestamp
      if (!validEntityId.value) {
        result = "Invalid contract ID: " + props.contractId
      } else if (contractLoader.got404.value) {
        result = "Contract with ID " + props.contractId + " was not found"
      } else if (contractLoader.entity.value?.deleted === true) {
        result = "Contract is deleted"
      } else if (expiration && Number.parseFloat(expiration) <= new Date().getTime() / 1000) {
        result = "Contract has expired and is in grace period"
      } else {
        result = null
      }
      return result
    })

    //
    // transactionCache
    //

    const transactionCache = new TransactionCacheV2();

    const setupTransactionCache = () => {
      transactionCache.state.value = EntityCacheStateV2.Stopped
      transactionCache.accountId.value = normalizedContractId.value ?? ""
      transactionCache.transactionType.value = transactionFilterFromRoute.value
      transactionCache.state.value = EntityCacheStateV2.Started
      selectedTransactionFilter.value = transactionFilterFromRoute.value
    }

    const transactionFilterFromRoute = computed(() => {
      return (route.query?.type as string ?? "").toUpperCase()
    })
    watch([transactionFilterFromRoute, normalizedContractId], () => {
      setupTransactionCache()
    })
    onMounted(() => {
      setupTransactionCache()
    })
    onBeforeUnmount(() => {
      transactionCache.state.value = EntityCacheStateV2.Stopped
    })

    return {
      isSmallScreen,
      isTouchDevice,
      contract: contractLoader.entity,
      account: accountLoader.entity,
      balance: accountLoader.balance,
      tokens: accountLoader.tokens,
      displayAllTokenLinks,
      transactions: transactionCache.transactions,
      cacheState: transactionCache.state,
      selectedTransactionFilter,
      notification,
      obtainerId: contractLoader.obtainerId,
      proxyAccountId: contractLoader.proxyAccountId,
      normalizedContractId,
      aliasByteString: accountLoader.aliasByteString
    }
  },
});

</script>

<style/>
