<template lang="">
    <div>
        <nav>
            <span @click="$emit('parent','국내토픽')">국내</span> | 
            <span @click="$emit('parent','해외토픽')">해외</span>
        </nav>
        <h3>{{title}}</h3>
        {{data}}
    </div>
</template>
<script>
export default {
    props:['data','title']
}
</script>
<style lang="">
    
</style>