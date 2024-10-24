<template>
  <div class="home">    
    <InsertTest/>
    <ListTest>slot되나요?</ListTest>
  </div>
</template>

<script>
// @ is an alias to /src
import InsertTest from '@/components/InsertTest';
import ListTest from '@/components/ListTest';

export default {
  name: 'HomeView',  
  components: {
    InsertTest, ListTest
  },
  data(){ return {msg:'hello'} },
  provide(){
    return { msg:this.msg}
  }
}
</script>
