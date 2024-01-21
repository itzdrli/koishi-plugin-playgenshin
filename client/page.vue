<template>
  <k-layout>
  <div>
    <button @click="openCloudGenshin">打开云原神</button>
  </div>

  </k-layout>
</template>

<script>
export default {
  methods: {
    async openCloudGenshin() {
      // 打开云原神页面
      const url = 'https://ys.mihoyo.com/cloud/?utm_source=default#/';
      window.open(url);
    }
  },
  mounted() {
    // 在页面加载完成后执行打开云原神的逻辑
    this.openCloudGenshin();
  }
}
</script>
