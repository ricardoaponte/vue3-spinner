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
  --delay: 0;
  --scale: v-bind("props.scale");
  --color: v-bind("props.color");
  --speed: v-bind("props.speed");
  --timing: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  width: 100px;
  height: 100px;
  position: relative;
  transform: scale(var(--scale));
}
.ring:before {
  content: "";
  border-radius: 50%;
  border: 0.5px solid var(--color);
  position: absolute;
  animation: spinner var(--speed) var(--timing) var(--delay) infinite backwards;
  animation-composition: accumulate;
}

.ring0:before {
  left: 45px;
  width: 10px;
  top: 13px;
  height: 3px;
  --delay: 0s;
}

.ring1:before {
  left: 40px;
  width: 20px;
  top: 12px;
  height: 6px;
  --delay: 0.1s;
}

.ring2:before {
  left: 35px;
  width: 30px;
  top: 11px;
  height: 9px;
  --delay: 0.2s;
}

.ring3:before {
  left: 30px;
  width: 40px;
  top: 9px;
  height: 12px;
  --delay: 0.3s;
}

.ring4:before {
  left: 25px;
  width: 50px;
  top: 8px;
  height: 15px;
  --delay: 0.4s;
}

.ring5:before {
  left: 20px;
  width: 60px;
  top: 6px;
  height: 18px;
  --delay: 0.5s;
}

.ring6:before {
  left: 15px;
  width: 70px;
  top: 5px;
  height: 21px;
  --delay: 0.6s;
}

.ring7:before {
  left: 10px;
  width: 80px;
  top: 3px;
  height: 24px;
  --delay: 0.7s;
}

.ring8:before {
  left: 5px;
  width: 90px;
  top: 2px;
  height: 27px;
  --delay: 0.8s;
}

.ring9:before {
  left: 0;
  width: 100px;
  height: 30px;
  --delay: 0.9s;
}

@keyframes spinner {
  0% {
    transform: translateY(10px);
  }
  50% {
    transform: translateY(60px);
  }
  100% {
    transform: translateY(10px);
  }
}
</style>
