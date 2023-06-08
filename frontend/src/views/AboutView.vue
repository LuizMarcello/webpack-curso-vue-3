<template>
  <div class="about">
    <h2>Abouttt</h2>
  </div>
</template>

<script>

export default {
  data() {
    return {
      interval: ""
    };
  },

  mounted() {
    this.interval = setInterval(() => {
      console.log("mounted");
    }, 1000);
  },

  unmounted() {
    clearInterval(this.interval);
  }
};
</script>

<style>
@media (min-width: 1024px;) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
