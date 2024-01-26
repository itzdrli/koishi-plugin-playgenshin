<template>
  <k-layout>
    <div class="videoContainer">
      <video class="fullscreenVideo" id="bgVid" playsinline="" autoplay="" muted="" loop="">
        <source src="start.mp4" type="video/mp4">
      </video>
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
