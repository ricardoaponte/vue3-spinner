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

import plugin from 'vue3-spinner'

createApp(App)
    .use(plugin)
    .mount('#app')
```

## Usage

```html
<PulseLoader :loading="loading" :color="color" :size="size"></PulseLoader>
<GridLoader :loading="loading" :color="color" :size="size"></GridLoader>
<ClipLoader :loading="loading" :color="color" :size="size"></ClipLoader>
<RiseLoader :loading="loading" :color="color" :size="size"></RiseLoader>
<BeatLoader :loading="loading" :color="color" :size="size"></beat-loader>
<SyncLoader :loading="loading" :color="color" :size="size"></SyncLoader>
<RotateLoader :loading="loading" :color="color" :size="size"></RotateLoader>
<FadeLoader :loading="loading" :color="color" :height="height" :width="width">
<PacmanLoader :loading="loading" :color="color" :size="size"></PacmanLoader>
<SquareLoader :loading="loading" :color="color" :size="size"></SquareLoader>
<ScaleLoader: loading="loading" :color="color" :height="height" :width="width">
<SkewLoader :loading="loading" :color="color" :size="size"></SkewLoader>
<MoonLoader :loading="loading" :color="color" :size="size"></MoonLoader>
<RingLoader :loading="loading" :color="color" :size="size"></RingLoader>
<BounceLoader :loading="loading" :color="color" :size="size"></BounceLoader>          
<DotLoader :loading="loading" :color="color" :size="size"></DotLoader>
```

You can customize the color and size by setting the props. All props have default value. You can control the spinner show/hidden by setting the loading prop.

## TODO



## License

vue-spinner is licensed under [The MIT License](LICENSE).
