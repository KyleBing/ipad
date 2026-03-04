<template>
  <div class="filter-list">
    <div class="ipad-tag-wrapper">
      <div class="ipad-title">Pro</div>
      <div class="ipad-tag-list">
        <div
          v-for="item in ipadStore.iPadPro"
          :key="item.name"
          :class="[
            'ipad-tag',
            { active: ipadStore.selectedNames.includes(item.name) },
            { 'is-new': item.isNew },
          ]"
          @click="ipadStore.filterTagToggle(item.name)"
        >
          <span class="name">{{ item.name_short }}</span>
          <span class="screen-size">{{ item.screen.size }}</span>
          <div class="release-date">{{ item.release.substring(0, 4) }}</div>
        </div>
      </div>
    </div>

    <div class="ipad-tag-wrapper">
      <div class="ipad-title">Air</div>
      <div class="ipad-tag-list">
        <div
          v-for="item in ipadStore.iPadAir"
          :key="item.name"
          :class="[
            'ipad-tag',
            { active: ipadStore.selectedNames.includes(item.name) },
            { 'is-new': item.isNew },
          ]"
          @click="ipadStore.filterTagToggle(item.name)"
        >
          <span class="name">{{ item.name_short }}</span>
          <span class="screen-size">{{ item.screen.size }}</span>
          <div class="release-date">{{ item.release.substring(0, 4) }}</div>
        </div>
      </div>
    </div>

    <div class="ipad-tag-wrapper">
      <div class="ipad-title">Mini</div>
      <div class="ipad-tag-list">
        <div
          v-for="item in ipadStore.iPadMini"
          :key="item.name"
          :class="[
            'ipad-tag',
            { active: ipadStore.selectedNames.includes(item.name) },
            { 'is-new': item.isNew },
          ]"
          @click="ipadStore.filterTagToggle(item.name)"
        >
          <span class="name">{{ item.name_short }}</span>
          <span class="screen-size">{{ item.screen.size }}</span>
          <div class="release-date">{{ item.release.substring(0, 4) }}</div>
        </div>
      </div>
    </div>

    <div class="ipad-tag-wrapper">
      <div class="ipad-title">iPad</div>
      <div class="ipad-tag-list">
        <div
          v-for="item in ipadStore.iPad"
          :key="item.name"
          :class="[
            'ipad-tag',
            { active: ipadStore.selectedNames.includes(item.name) },
            { 'is-new': item.isNew },
          ]"
          @click="ipadStore.filterTagToggle(item.name)"
        >
          <span class="name">{{ item.name_short }}</span>
          <span class="screen-size">{{ item.screen.size }}</span>
          <div class="release-date">{{ item.release.substring(0, 4) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useIpadStore } from '@/stores/ipad'

const ipadStore = useIpadStore()
</script>
