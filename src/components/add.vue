<template>
  <div>
    11122223333322222
    <p>{{mynum.name}}</p>

    <form :v-model="mynum">

    </form>
    <input :value="mynum.name">

    <!-- 从父组件传来的值 -->
     <p>当前conut值为：{{this.$store.state.count}}</p>
     <!-- this可以省略 -->
    <button @click="add">+1</button>
    <button @click="yiadd">+1</button>
     <input type="button" value="点击触发" @click="childClick">
  </div>
</template>

<script>
export default {
  props:{
mynum:Object
  },
  data () {
    return {
childValue: '我是子组件的数据'
    }
  },
  created () {

  },
  methods: {
add(){
  this.$store.commit('add',3)
},
yiadd(){
  this.$store.dispatch('yiadd',5)
},
  childClick () {
        // childByValue是在父组件on监听的方法
        // 第二个参数this.childValue是需要传的值
        this.$emit('childByValue', this.childValue)
      }
  },

}
</script>

<style scoped >

</style>
