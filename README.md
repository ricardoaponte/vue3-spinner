# vue3-spinner

A collection of loading spinners for Vue 3. Inspired by [greyby](https://github.com/greyby/vue-spinner) who converted yuanyan's React.js project Halogen to Vue.js components.

## [Live demo](http://ricardoaponte.github.io/vue3-spinner/)

## Installation

### NPM
```bash
$ npm install vue3-spinner
```

### ES6
```js
import { createApp } from 'vue'
import App from './App.vue'

import vue3Spinner from 'vue3-spinner'

createApp(App)
    .use(vue3Spinner)
    .mount('#app')
```

### As a Component
```js
<script setup>
  import { DotLoader } from "vue3-spinner";
</script>

<template>
  <DotLoader />
</template>

```

## Usage

```html

<BeatLoader
  :loading="true | false"
  :color="#color"
  :size="size px" />

<BounceLoader
  :loading="true | false"
  :color="#color"
  :size="size px" />

<ClipLoader
  :loading="true | false"
  :color="#color"
  :size="size px" />

<DotLoader
  :loading="true | false"
  :color="#color"
  :size="size px" />

<FadeLoader
  :loading="true | false"
  :color="#color"
  :height="height"
  :width="width" />

<GridLoader
  :loading="true | false"
  :color="#color"
  :size="size px" />

<JellyfishLoader
  :loading="true | false"
  :color="#color"
  :size="size px"
  :scale="1" />

<MoonLoader
  :loading="true | false"
  :color="#color"
  :size="size px" />

<PacmanLoader
  :loading="true | false"
  :color="#color"
  :size="size px" />

<PulseLoader
  :loading="true | false"
  :color="#5dc596"
  :size="15px"
  :margin="2px"
  :radius="100%" />

<RingLoader
  :loading="true | false"
  :color="#color"
  :size="size px" />

<RiseLoader
  :loading="true | false"
  :color="#color"
  :size="size px" />

<RotateLoader
  :loading="true | false"
  :color="#color"
  :size="size px" />

<ScaleLoader
  :loading="true | false"
  :color="#color"
  :height="height"
  :width="width" />

<SkewLoader
  :loading="true | false"
  :color="#color"
  :size="size px" />

<SquareLoader
  :loading="true | false"
  :color="#color"
  :size="size px" />

<SyncLoader
  :loading="true | false"
  :color="#color"
  :size="size px" />
<script>
  import JellyfishLoader from "./JellyfishLoader";
  export default {
    components: { JellyfishLoader }
  };
</script>
```

You can customize the color and size by setting the props. 
All props have a default value. 
You can control the spinner show/hidden by setting the loading prop.

## TODO
🤷🏻


## License

vue3-spinner is licensed under [The MIT License](LICENSE).
