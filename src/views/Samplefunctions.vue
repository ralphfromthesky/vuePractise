
<template>
    <div class="card">
        <Button label="Show" @click="addMessages()" />
        <Button label="Clear" severity="secondary" class="ml-2" @click="clearMessages()" />
        <transition-group name="p-message" tag="div">
            <Message v-for="msg of messages" :key="msg.id" :severity="msg.severity">{{ msg.content }}</Message>
        </transition-group>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const messages = ref([]);
let count = ref(0);

const addMessages = () => {
    messages.value = [
        { severity: 'info', content: 'Dynamic Info Message', id: count.value++ },
        { severity: 'success', content: 'Dynamic Success Message', id: count.value++ },
        { severity: 'warn', content: 'Dynamic Warning Message', id: count.value++ }
    ];
};

const clearMessages = () => {
    messages.value = [];
};
</script>