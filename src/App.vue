<script setup>
import { ref } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import {
  PulseLoader,
  BeatLoader,
  DotLoader,
  FadeLoader,
  RotateLoader,
  BounceLoader,
  SyncLoader,
  SquareLoader,
  GridLoader,
  JellyfishLoader,
  MoonLoader,
  RiseLoader,
  SkewLoader,
  RingLoader,
  ScaleLoader,
  PacmanLoader,
  ClipLoader,
} from "./components.js";

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
      <li class="spinner-list" title="beat loader">
        <BeatLoader
          :color="color"
          :size="size"
          :margin="margin"
          :radius="radius"
        />
      </li>
      <li class="spinner-list" title="bounce loader">
        <BounceLoader />
      </li>
      <li class="spinner-list" title="clip loader">
        <ClipLoader />
      </li>
      <li class="spinner-list" title="dot loader">
        <DotLoader />
      </li>
      <li class="spinner-list" title="fade loader">
        <FadeLoader />
      </li>
      <li class="spinner-list" title="grid loader">
        <GridLoader />
      </li>
      <li class="spinner-list" title="jellyfish loader">
        <JellyfishLoader />
      </li>
      <li class="spinner-list" title="moon loader">
        <MoonLoader />
      </li>
      <li class="spinner-list" title="paceman loader">
        <PacmanLoader />
      </li>
      <li class="spinner-list" title="pulse loader">
        <PulseLoader />
      </li>
      <li class="spinner-list" title="ring loader">
        <RingLoader />
      </li>
      <li class="spinner-list" title="rise loader">
        <RiseLoader />
      </li>
      <li class="spinner-list" title="rotate loader">
        <RotateLoader />
      </li>
      <li class="spinner-list" title="scale loader">
        <ScaleLoader />
      </li>
      <li class="spinner-list" title="skew loader">
        <SkewLoader />
      </li>
      <li class="spinner-list" title="square loader">
        <SquareLoader />
      </li>
      <li class="spinner-list" title="sync loader">
        <SyncLoader />
      </li>
    </ul>
  </main>
</template>

<style scoped></style>
