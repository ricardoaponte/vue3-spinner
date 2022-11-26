<template>
  <div class="whirlpool">
    <div class="ring ring0"></div>
    <div class="ring ring1"></div>
    <div class="ring ring2"></div>
    <div class="ring ring3"></div>
    <div class="ring ring4"></div>
    <div class="ring ring5"></div>
    <div class="ring ring6"></div>
    <div class="ring ring7"></div>
    <div class="ring ring8"></div>
    <div class="ring ring9"></div>
  </div>
</template>
<script>
export default {
  name: "JellyfishLoader",
};
</script>
<script setup>
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
    default: "25px",
  },
  margin: {
    type: String,
    default: "2px",
  },
  radius: {
    type: String,
    default: "100%",
  },
  width: {
    type: Number,
    default: 100,
  },
  height: {
    type: Number,
    default: 100,
  },
  speed: {
    type: String,
    default: "2.5s",
  },
  scale: {
    type: Number,
    default: 1,
  },
});
</script>

<style scoped>
.whirlpool {
  width: 100px;
  height: 100px;
  position: relative;
  transform: scale(v-bind("props.scale"));
}

.ring:before {
  content: "";
  border-radius: 50%;
  border: 1px solid v-bind("props.color");
  position: absolute;
}

.ring0:before {
  left: 45px;
  width: 10px;
  top: 13px;
  height: 3px;
  animation: v-bind("props.speed") ease 0s infinite spinner;
}

.ring1:before {
  left: 40px;
  width: 20px;
  top: 12px;
  height: 6px;
  animation: v-bind("props.speed") ease 0.1s infinite spinner;
}

.ring2:before {
  left: 35px;
  width: 30px;
  top: 11px;
  height: 9px;
  animation: v-bind("props.speed") ease 0.2s infinite spinner;
}

.ring3:before {
  left: 30px;
  width: 40px;
  top: 9px;
  height: 12px;
  animation: v-bind("props.speed") ease 0.3s infinite spinner;
}

.ring4:before {
  left: 25px;
  width: 50px;
  top: 8px;
  height: 15px;
  animation: v-bind("props.speed") ease 0.4s infinite spinner;
}

.ring5:before {
  left: 20px;
  width: 60px;
  top: 6px;
  height: 18px;
  animation: v-bind("props.speed") ease 0.5s infinite spinner;
}

.ring6:before {
  left: 15px;
  width: 70px;
  top: 5px;
  height: 21px;
  animation: v-bind("props.speed") ease 0.6s infinite spinner;
}

.ring7:before {
  left: 10px;
  width: 80px;
  top: 3px;
  height: 24px;
  animation: v-bind("props.speed") ease 0.7s infinite spinner;
}

.ring8:before {
  left: 5px;
  width: 90px;
  top: 2px;
  height: 27px;
  animation: v-bind("props.speed") ease 0.8s infinite spinner;
}

.ring9:before {
  width: 100px;
  height: 30px;
  animation: v-bind("props.speed") ease 0.9s infinite spinner;
}

@keyframes spinner {
  0% {
    transform: translateY(10px);
    animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
  50% {
    transform: translateY(60px);
    animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
  100% {
    transform: translateY(10px);
    animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
}
</style>
