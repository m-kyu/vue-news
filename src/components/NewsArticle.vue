<template lang="">
    <div>
        <slot />
        <h3>{{title}}</h3>
        {{data}}
    </div>
</template>
<script>
export default {
    props:['data', 'title']
}
</script>
<style lang="">
    
</style>