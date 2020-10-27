<template>
    <div>
        <p>当前conut值为：{{this.count}}</p>
        <p>{{this.$store.getters.showNum}}</p>
        <button>-1</button>

        sub的<p>{{mynum}}</p>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
   props:{
mynum:String
  },
    data() {
        return {};
    },
    created () {},
    methods: {},
    components: {},
    computed:{
      ...mapState(['count'])
    }
};
</script>

<style scoped >
</style>
