<template>
  <div id="app">
    <div class="container mx-auto px-10">
      <div>Hello There</div>
    </div>
  </div>
</template>

<style>
  .test1 {
    margin-top: 20%;
    margin-left: 40%;
    width: 50ch;
  }
</style>

<script>
export default {
  name: 'App',
  data: () => ({}),
  mounted () {
    console.log(this.$refs)
  }
}
</script>
