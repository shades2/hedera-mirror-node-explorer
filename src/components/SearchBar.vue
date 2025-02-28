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

  <div v-if="!isMediumScreen">
    <form data-cy="searchBar" class="control" action="" v-on:submit.prevent="performSearch">
      <input
          class="input has-background-white has-text-black"
          style="border-radius: 10px; height: 50px"
          type="text"
          v-model="searchedId"
          v-bind:disabled="searchInputDisabled"
          ref="search-input"
      />
    </form>
  </div>

  <div v-else>
    <form data-cy="searchBar" class="control has-icons-right" action="" v-on:submit.prevent="performSearch">
      <input
             class="input has-text-white h-is-navbar-item"
             type="text"
             placeholder="Search accounts, transactions, tokens, contracts and topics"
             v-model="searchedId"
             v-bind:disabled="searchInputDisabled"
             ref="search-input"
      />
      <span class="icon is-small is-right">
          <i v-bind:class="searchButtonIconStyle"/>
        </span>
    </form>
  </div>

</template>

<!-- --------------------------------------------------------------------------------------------------------------- -->
<!--                                                      SCRIPT                                                     -->
<!-- --------------------------------------------------------------------------------------------------------------- -->

<script lang="ts">

import {defineComponent, inject, onMounted, ref, watch} from "vue";
import {SearchRequest} from "@/utils/SearchRequest";
import router from "@/router";


const STYLE_SEARCH_ICON = "fa fa-search"
const STYLE_BUSY_ICON = "fa fa-spinner fa-spin"


export default defineComponent({
  name: "SearchBar",
  setup() {
    const isMediumScreen = inject('isMediumScreen', true)
    const isTouchDevice = inject('isTouchDevice', false)

    // 1)
    const searchedId = ref("")

    // 2)
    const searchInputDisabled = ref(false)

    // 3)
    const searchButtonDisabled = ref(false)

    // 4)
    const searchButtonIconStyle = ref(STYLE_SEARCH_ICON)

    // 5)
    const updateSearchBarEnabled = () => {
      searchButtonDisabled.value = searchedId.value.length == 0
    }
    const searchDidEnd = (success: boolean) => {
      if (success) {
        searchedId.value = ""
      } else {
        // Keep search input untouched and put focus on it
        // Too bad : it does not work :(
        // const searchInput = this.$refs["search-input"] as HTMLInputElement
        // this.$nextTick(function () {
        //   searchInput.focus()
        // })
      }
      searchInputDisabled.value = false
      searchButtonIconStyle.value = STYLE_SEARCH_ICON
      updateSearchBarEnabled()
    }

    const performSearch = (): void  => {
      searchInputDisabled.value = true
      searchButtonIconStyle.value = STYLE_BUSY_ICON

      const searchedValue = searchedId.value.trim()
      if (searchedValue != "") {
        const r = new SearchRequest(searchedValue)
        r.run().then(() => {
          try {
            if (r.contract != null) {
              router.push({name: 'ContractDetails', params: { contractId: r.contract.contract_id}})
              searchDidEnd(true)
            } else if (r.account != null) {
              router.push({name: 'AccountDetails', params: { accountId: r.account.account}})
              searchDidEnd(true)
            } else if (r.transactions.length >= 1) {
              const transaction = r.transactions[0]
              if (r.transactions.length == 1) {
                router.push({name: 'TransactionDetails',
                  params: { transactionId: transaction.transaction_id},
                  query: { t: transaction.consensus_timestamp }})
              } else {
                router.push({name: 'TransactionsById', params: { transactionId: transaction.transaction_id}})
              }
              searchDidEnd(true)
            } else if (r.tokenInfo != null) {
              router.push({name: 'TokenDetails', params: { tokenId: r.tokenInfo.token_id}})
              searchDidEnd(true)
            } else if (r.topicMessages.length >= 1) {
              router.push({name: 'TopicDetails', params: { topicId: r.topicMessages[0].topic_id}})
              searchDidEnd(true)
            } else {
              router.push({name: 'NoSearchResult', params: { searchedId: searchedId.value}, query: { errorCount: r.getErrorCount()}})
              searchDidEnd(false)
            }
          } catch {
            console.trace("Failed to route")
            searchDidEnd(false)
          }
        })
      } else {
        searchDidEnd(false)
      }
    }

    watch(searchedId, () => {
      updateSearchBarEnabled()
    })

    onMounted(() => {
      document.title = 'Hedera Dashboard'
    })

    return {
      isMediumScreen,
      isTouchDevice,
      searchedId,
      searchInputDisabled,
      searchButtonDisabled,
      searchButtonIconStyle,
      performSearch
    }
  }
})
</script>

<!-- --------------------------------------------------------------------------------------------------------------- -->
<!--                                                      STYLE                                                      -->
<!-- --------------------------------------------------------------------------------------------------------------- -->

<style scoped>

input::placeholder {
  color: grey;
}

</style>