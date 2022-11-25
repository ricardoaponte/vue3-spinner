<template>
  <div class="v-spinner" v-show="loading">
    <div class="v-rotate v-rotate1" v-bind:style="spinnerStyle">
      <div class="v-rotate v-rotate2" v-bind:style="spinnerStyle"></div>
      <div class="v-rotate v-rotate3" v-bind:style="spinnerStyle"></div>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";

const props = defineProps({
  loading: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: "#5dc596",
  },
  size: {
    type: String,
    default: "15px",
  },
  margin: {
    type: String,
    default: "2px",
  },
  radius: {
    type: String,
    default: "100%",
  },
});

const spinnerStyle = computed(() => {
  return {
    backgroundColor: props.color,
    height: props.size,
    width: props.size,
    margin: props.margin,
    borderRadius: props.radius,
  };
});
</script>
<script>
export default {
  name: "RotateLoader",
};
</script>

<style>
.v-spinner .v-rotate1 {
  -webkit-animation: v-rotateStretchDelay 1s 0s infinite
    cubic-bezier(0.7, -0.13, 0.22, 0.86);
  animation: v-rotateStretchDelay 1s 0s infinite
    cubic-bezier(0.7, -0.13, 0.22, 0.86);
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  display: inline-block;
  position: relative;
}

.v-spinner .v-rotate2 {
  opacity: 0.8;
  position: absolute;
  top: 0;
  left: -28px;
}

.v-spinner .v-rotate3 {
  opacity: 0.8;
  position: absolute;
  top: 0;
  left: 25px;
}

@-webkit-keyframes v-rotateStretchDelay {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes v-rotateStretchDelay {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
