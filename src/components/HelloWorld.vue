<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      View source code
      <a
        href="https://github.com/ricardoaponte/vue3-spinner/"
        target="_blank"
        rel="noopener"
        >Github</a
      >.
      <div class="gitstars">
        <iframe
          src="https://ghbtns.com/github-btn.html?user=ricardoaponte&repo=vue3-spinner&type=watch&count=true"
          allowtransparency="true"
          frameborder="0"
          scrolling="0"
          width="100"
          height="20"
        ></iframe>
      </div>
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
  text-align: center !important;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

.gitstars {
  display: inline-block;
  margin-left: 10px;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
