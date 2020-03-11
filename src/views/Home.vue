<template>
  <div class="home">
    <h1>This is an home page</h1>
    {{ namesList[0].name }}
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
  },
  computed : {
    namesList(){
      return this.$store.getters.names
    }
  }
}
</script>
