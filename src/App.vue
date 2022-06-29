<template>
  <div
    class="main-wrapper"
    :style="{ transform: 'scale(' + ratio + ') translate(-50%, -50%)' }"
  >
    <the-header />
    <router-view />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';

export default {
  components: {
    TheHeader
  },
  data() {
    return {
      ratio: 1,
    };
  },
  methods: {
    resize: function () {
      var sw = 1920;
      var sh = 1080;
      var factor = sw / sh;
      var bw = window.innerWidth;
      var bh = window.innerHeight;

      if (bw / bh < factor) {
        this.ratio = bw / sw;
      } else {
        this.ratio = bh / sh;
      }
    },
    unmounted() {
      window.removeEventListener("resize", this.resize);
    },
  },
  created() {
    window.addEventListener("resize", this.resize);
    this.resize();
  },
};
</script>

<style>
:root{
  --var-main-color: #1C1C1C;
  --var-secondary-color: #F38120;
  --var-third-color: rgba(0, 59, 147, 1);
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.main-wrapper {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 1920px;
  height: 1080px;
  transform-origin: 0 0;
  overflow: hidden;
}
.flex-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}
::-webkit-scrollbar
{
	width: 8px;
	background-color: #F5F5F5;
}
::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #170562;
}
</style>
