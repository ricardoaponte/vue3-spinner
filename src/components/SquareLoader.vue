<template>
  <div class="v-spinner" v-show="loading">
    <div class="v-square" v-bind:style="spinnerStyle"></div>
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
    default: "50px",
  },
});

const spinnerStyle = computed(() => {
  return {
    backgroundColor: props.color,
    height: props.size,
    width: props.size,
  };
});
</script>
<script>
export default {
  name: "SquareLoader",
};
</script>

<style>
.v-spinner {
  text-align: center;
}

.v-spinner .v-square {
  -webkit-animation: v-squareDelay 3s 0s infinite
    cubic-bezier(0.09, 0.57, 0.49, 0.9);
  animation: v-squareDelay 3s 0s infinite cubic-bezier(0.09, 0.57, 0.49, 0.9);
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  perspective: 100px;
  display: inline-block;
}

@-webkit-keyframes v-squareDelay {
  25% {
    -webkit-transform: rotateX(180deg) rotateY(0);
    transform: rotateX(180deg) rotateY(0);
  }
  50% {
    -webkit-transform: rotateX(180deg) rotateY(180deg);
    transform: rotateX(180deg) rotateY(180deg);
  }
  75% {
    -webkit-transform: rotateX(0) rotateY(180deg);
    transform: rotateX(0) rotateY(180deg);
  }
  100% {
    -webkit-transform: rotateX(0) rotateY(0);
    transform: rotateX(0) rotateY(0);
  }
}

@keyframes v-squareDelay {
  25% {
    -webkit-transform: rotateX(180deg) rotateY(0);
    transform: rotateX(180deg) rotateY(0);
  }
  50% {
    -webkit-transform: rotateX(180deg) rotateY(180deg);
    transform: rotateX(180deg) rotateY(180deg);
  }
  75% {
    -webkit-transform: rotateX(0) rotateY(180deg);
    transform: rotateX(0) rotateY(180deg);
  }
  100% {
    -webkit-transform: rotateX(0) rotateY(0);
    transform: rotateX(0) rotateY(0);
  }
}
</style>
