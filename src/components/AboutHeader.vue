<template>
  <div class="about gradient">
    <div class="about-header">
      <div class="icon">
        <img
          style="display: none"
          src="/img/links/ipad_white@2x.png"
          alt="for 知乎链接图标抓取"
        />
        <img src="/img/links/ipad_white@2x.png" alt="logo ipad" />
      </div>
      <div class="content">
        <h1 class="title">iPad 参数大全</h1>
        <div class="thumbs-up" @click="ipadStore.thumbsUp">
          <img
            v-if="ipadStore.heartActive"
            src="/img/links/heart_active@1x.png?v=2022-09-04"
            alt="heart"
          />
          <img
            v-else
            src="/img/links/heart_inactive@1x.png?v=2022-09-04"
            alt="heart"
          />
          <p v-show="ipadStore.thumbsUpCount" class="multiply">×</p>
          <h3 v-show="ipadStore.thumbsUpCount">{{ ipadStore.thumbsUpCount }}</h3>
        </div>
      </div>
    </div>

    <div class="copyright-group">
      <div class="share-links">
        <a class="link-item">
          <img src="/img/links/ipad_white@2x.png?v=2022-09-04" alt="ipad" />
        </a>
        <a class="link-item" target="_blank" href="http://kylebing.cn/tools/iphone">
          <img src="/img/links/iphone_white@2x.png?v=2022-09-04" alt="phone" />
        </a>
        <a class="link-item" target="_blank" href="http://kylebing.cn/tools/airpods">
          <img src="/img/links/airpods_white@2x.png?v=2022-09-04" alt="airpods" />
        </a>
        <a class="link-item" target="_blank" href="http://kylebing.cn/tools/apple-chip">
          <img src="/img/links/chip_white@2x.png?v=2022-09-04" alt="chip" />
        </a>
      </div>
      <div class="author-info">
        <p>
          主页：<a class="link" target="_blank" href="http://kylebing.cn/">kylebing.cn</a>
        </p>
        <p>
          更新：<a
            class="link"
            target="_blank"
            href="https://en.wikipedia.org/wiki/List_of_iPad_models"
            >{{ ipadStore.dateEnd }}</a
          >
        </p>
        <p>
          分享：<span class="link" @click="ipadStore.toggleShare">点击扫一扫</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useIpadStore } from '@/stores/ipad'

const ipadStore = useIpadStore()
</script>
