<template>
  <div class="v-spinner" v-show="loading">
    <div class="v-skew" v-bind:style="spinnerStyle"></div>
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
    default: "20px",
  },
});

const spinnerStyle = computed(() => {
  return {
    height: 0,
    width: 0,
    borderLeft: props.size + " solid transparent",
    borderRight: props.size + " solid transparent",
    borderBottom: props.size + " solid " + props.color,
  };
});
</script>
<script>
export default {
  name: "SkewLoader",
};
</script>

<style>
.v-spinner {
  text-align: center;
}

.v-spinner .v-skew {
  -webkit-animation: v-skewDelay 3s 0s infinite
    cubic-bezier(0.09, 0.57, 0.49, 0.9);
  animation: v-skewDelay 3s 0s infinite cubic-bezier(0.09, 0.57, 0.49, 0.9);
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  display: inline-block;
}

@-webkit-keyframes v-skewDelay {
  25% {
    -webkit-transform: perspective(100px) rotateX(180deg) rotateY(0);
    transform: perspective(100px) rotateX(180deg) rotateY(0);
  }
  50% {
    -webkit-transform: perspective(100px) rotateX(180deg) rotateY(180deg);
    transform: perspective(100px) rotateX(180deg) rotateY(180deg);
  }
  75% {
    -webkit-transform: perspective(100px) rotateX(0) rotateY(180deg);
    transform: perspective(100px) rotateX(0) rotateY(180deg);
  }
  100% {
    -webkit-transform: perspective(100px) rotateX(0) rotateY(0);
    transform: perspective(100px) rotateX(0) rotateY(0);
  }
}

@keyframes v-skewDelay {
  25% {
    -webkit-transform: perspective(100px) rotateX(180deg) rotateY(0);
    transform: perspective(100px) rotateX(180deg) rotateY(0);
  }
  50% {
    -webkit-transform: perspective(100px) rotateX(180deg) rotateY(180deg);
    transform: perspective(100px) rotateX(180deg) rotateY(180deg);
  }
  75% {
    -webkit-transform: perspective(100px) rotateX(0) rotateY(180deg);
    transform: perspective(100px) rotateX(0) rotateY(180deg);
  }
  100% {
    -webkit-transform: perspective(100px) rotateX(0) rotateY(0);
    transform: perspective(100px) rotateX(0) rotateY(0);
  }
}
</style>
