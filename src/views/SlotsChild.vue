<template>
    <div class="card">
        <slot>Default Content</slot>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.card { 
    box-shadow: 0 4px 8px 0 black;
    transition: .3s;
    padding: 16px;
    margin-bottom: 20px;
    width: 200px;
}
.card:hover {
    box-shadow: 0 8px 16px 0 red;
}
</style>