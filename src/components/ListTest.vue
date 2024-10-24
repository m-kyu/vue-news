<template lang="">
    <div>
        <slot />
        회원({{total}})
        {{msg}}
        <ul>
            <li v-for="(item,idx) in data"  :key="idx">
                {{item.name}}
            </li>
        </ul>
    </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex';
export default {
    inject:['msg'],
    data(){return {aa:this.msg} },
    name:'ListTest',
    computed:{
        ...mapState(['data']),
        ...mapGetters(['total'])
    },
    mounted() {
        console.log(  this.data  )
    },
}
</script>

<style lang="">
    
</style>