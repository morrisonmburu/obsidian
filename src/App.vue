<template>
  <div id="app">
    <div class="container m-10">
      <div class="flex flex-row space-x-4 space-y-4 flex-wrap">
        <div class="w-16 h-16 rounded-md bg-yellow-500 flex items-center justify-center text-2xl font-extrabold" v-for="i in days" :key="i">{{ i }}</div>
      </div>
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
import MainMethods from './MainMethods'
export default {
  name: 'App',
  data: () => ({
    date: new Date(),
    days: []
  }),
  mounted () {
    const arr = []
    for (let i = 1; i < this.getNoDays(this.date); i++) {
      arr.push(i)
    }
    this.days = arr
    console.log(this.days)
  },
  methods: {
    ...MainMethods
  }
}
</script>
