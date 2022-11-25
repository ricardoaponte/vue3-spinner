<script setup>
import BeatLoader from "@/components/BeatLoader.vue";
import BounceLoader from "@/components/BounceLoader.vue";
import ClipLoader from "@/components/ClipLoader.vue";
import DotLoader from "@/components/DotLoader.vue";
import FadeLoader from "@/components/FadeLoader.vue";
import GridLoader from "@/components/GridLoader.vue";
import MoonLoader from "@/components/MoonLoader.vue";
import PacmanLoader from "@/components/PacmanLoader.vue";
import PulseLoader from "@/components/PulseLoader.vue";
import RingLoader from "@/components/RingLoader.vue";
import RiseLoader from "@/components/RiseLoader.vue";
import RotateLoader from "@/components/RotateLoader.vue";
import ScaleLoader from "@/components/ScaleLoader.vue";
import SkewLoader from "@/components/SkewLoader.vue";
import SquareLoader from "@/components/SquareLoader.vue";
import SyncLoader from "@/components/SyncLoader.vue";
import HelloWorld from "@/components/HelloWorld.vue";

import { ref } from "vue";

const color = ref("#5dc596");
const size = ref("15px");
const margin = ref("2px");
const radius = ref("100%");
</script>

<template>
  <main>
    <div class="wrapper">
      <HelloWorld msg="vue3-spinner" />
    </div>
    <ul class="list-container">
      <li class="spinner-list" title="pulse loader">
        <PulseLoader
          :color="color"
          :size="size"
          :margin="margin"
          :radius="radius"
        ></PulseLoader>
      </li>
      <li class="spinner-list" title="grid loader">
        <GridLoader />
      </li>
      <li class="spinner-list" title="clip loader">
        <ClipLoader />
      </li>
      <li class="spinner-list" title="rise loader">
        <RiseLoader />
      </li>
      <li class="spinner-list" title="beat loader">
        <BeatLoader />
      </li>
      <li class="spinner-list" title="sync loader">
        <SyncLoader />
      </li>
      <li class="spinner-list" title="rotate loader">
        <RotateLoader />
      </li>
      <li class="spinner-list" title="fade loader">
        <FadeLoader />
      </li>
      <li class="spinner-list" title="paceman loader">
        <PacmanLoader />
      </li>
      <li class="spinner-list" title="square loader">
        <SquareLoader />
      </li>
      <li class="spinner-list" title="scale loader">
        <ScaleLoader />
      </li>
      <li class="spinner-list" title="skew loader">
        <SkewLoader />
      </li>
      <li class="spinner-list" title="moon loader">
        <MoonLoader />
      </li>
      <li class="spinner-list" title="ring loader">
        <RingLoader />
      </li>
      <li class="spinner-list" title="bounce loader">
        <BounceLoader />
      </li>
      <li class="spinner-list" title="dot loader">
        <DotLoader />
      </li>
    </ul>
  </main>
</template>

<style scoped>
</style>