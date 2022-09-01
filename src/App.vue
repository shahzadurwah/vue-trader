<template>
 <Header></Header>
 <div class="container">
  <router-view></router-view>
 </div>

</template>

<script>
import Header from './components/Header.vue'
export default {
    components:{
        Header
    },
    created(){
      this.$store.dispatch('initStocks')
    }

}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
body{
  background: #e2e2e2;
}
</style>