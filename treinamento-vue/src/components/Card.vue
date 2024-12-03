<script setup>
import {onMounted} from "vue";

defineProps({
    backgroundColor: {type: String, default: 'bg-gray-100'}
})
</script>

<template>
    <div :class="`${backgroundColor} p-6 rounded-lg shadow-md `">
        <slot></slot>
    </div>
</template>