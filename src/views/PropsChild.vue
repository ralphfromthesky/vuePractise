<template>
    <div>
        <!-- call the 'name' or interpolate the 'name' here -->
        hello my name is {{ name }} at {{ message }}
    </div>
</template>

<script>
    export default {
        name: 'propsChild',
        // define the 'name' here
        props: ['name', 'message', ]
    }
</script>

<style lang="scss" scoped>

</style>