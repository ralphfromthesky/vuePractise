<template>
    <div>
        <!-- call the 'name' or interpolate the 'name' here -->
        hello my name is {{ name }} at {{ message }} {{ number }} {{ sample }} {{ thisIsSample }}
        <h1>this is binding composition API {{ myname }} {{ mymessage }} {{ mynumber }}</h1>
        
    </div>
</template>

<script>
    export default {
        name: 'propsChild',
        // define the 'name' here
        props: ['name', 'message', 'number', 'sample','thisIsSample', 'myname','mynumber', 'mymessage']
    }
</script>

<style scoped>

h1 {
    color: red;
}
</style>