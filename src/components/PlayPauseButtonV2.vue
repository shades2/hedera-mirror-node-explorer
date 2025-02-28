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

<!--

  USAGE NOTES

  <template>
    ...
    <PlayPauseButtonV2 v-model:state="transactionCacheState"/>
    ...
  </template>

  <script>
    ...
    const transactionCache = new TransactionCache()
    ...

    return {
      transactionCacheState: transactionCache.state
    }
  </script>

  -->

<!-- --------------------------------------------------------------------------------------------------------------- -->
<!--                                                     TEMPLATE   v-on:click="clicked"                                                  -->
<!-- --------------------------------------------------------------------------------------------------------------- -->

<template>
  <div class="is-flex is-align-items-center">
    <span v-if="isAutoPaused" class="h-is-text-size-1 h-is-dense">REFRESH PAUSED</span>
    <button
        class="button is-small has-text-white ml-2"
        data-cy="playPauseButton"
        style="background-color: #202532; width: 26px; height: 26px; border:1px solid white; border-radius: 0"
        v-on:click="handleClick()">
      <i :class="{ 'fa-play': !isPlaying, 'fa-pause': isPlaying}" class="fas" style="background-color: #202532"/>
    </button>
  </div>
</template>

<!-- --------------------------------------------------------------------------------------------------------------- -->
<!--                                                      SCRIPT                                                     -->
<!-- --------------------------------------------------------------------------------------------------------------- -->

<script lang="ts">

import {computed, defineComponent, PropType} from "vue";
import {EntityCacheStateV2} from "@/utils/EntityCacheV2";

export default defineComponent({
  name: "PlayPauseButtonV2",

  props: {
    state: {
      type: String as PropType<EntityCacheStateV2>,
      default: EntityCacheStateV2.Stopped
    }
  },

  setup(props, context) {

    const isPlaying = computed(() => {
      return props.state === EntityCacheStateV2.Started
    })
    const isAutoPaused = computed(() => {
      return props.state === EntityCacheStateV2.AutoStopped
    })

    const handleClick = () => {
      let newValue: EntityCacheStateV2
      switch(props.state) {
        default:
        case EntityCacheStateV2.Started:
          newValue = EntityCacheStateV2.Stopped
          break
        case EntityCacheStateV2.Stopped:
        case EntityCacheStateV2.AutoStopped:
          newValue = EntityCacheStateV2.Started
          break
      }
      context.emit('update:state', newValue) // => loopback will update props.state
    }


    return {
      isPlaying,
      isAutoPaused,
      handleClick
    }
  }
});

</script>

<!-- --------------------------------------------------------------------------------------------------------------- -->
<!--                                                       STYLE                                                     -->
<!-- --------------------------------------------------------------------------------------------------------------- -->

<style/>