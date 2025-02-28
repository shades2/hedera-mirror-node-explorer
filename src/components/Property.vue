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

  <div v-if="!isSmallScreen" class="columns" :id="id">
    <div class="column is-flex is-justify-content-space-between">
      <div class="has-text-weight-light" :id="nameId">
        <slot name="name"/>
      </div>
      <div :id="valueId" class="ml-4 has-text-right">
        <slot name="value"/>
      </div>
    </div>
  </div>

  <div v-else class="columns" :id="id" style="margin-bottom: -0.75rem;">
    <div :class="nbColClass" class="column has-text-weight-light" :id="nameId">
      <slot name="name"/>
    </div>
    <div class="column" :id="valueId">
      <slot name="value"/>
    </div>
  </div>

</template>

<!-- --------------------------------------------------------------------------------------------------------------- -->
<!--                                                      SCRIPT                                                     -->
<!-- --------------------------------------------------------------------------------------------------------------- -->

<script lang="ts">

import {computed, defineComponent, inject} from "vue";

export default defineComponent({
  name: "Property",
  props: {
    id: String,
    fullWidth: {
      type: Boolean,
      default: false
    }
  },
  setup(props){
    const nameId = props.id + 'Name'
    const valueId = props.id + 'Value'

    const isSmallScreen = inject('isSmallScreen', true)
    const isTouchDevice = inject('isTouchDevice', false)
    const nbColClass = computed(() => props.fullWidth ? 'is-2' : 'is-4')

    return {
      nameId,
      valueId,
      isSmallScreen,
      isTouchDevice,
      nbColClass
    }
  }
})

</script>

<!-- --------------------------------------------------------------------------------------------------------------- -->
<!--                                                      STYLE                                                      -->
<!-- --------------------------------------------------------------------------------------------------------------- -->

<style>
</style>