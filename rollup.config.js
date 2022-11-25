import vue from "rollup-plugin-vue";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default [
  {
    input: "src/components/index.js",
    output: [
      {
        format: "esm",
        file: "dist/library.mjs",
      },
      {
        format: "cjs",
        file: "dist/library.js",
      },
    ],
    plugins: [vue(), peerDepsExternal()],
  },
];
