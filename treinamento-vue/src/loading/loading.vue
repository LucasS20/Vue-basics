<script setup>
import {reactive} from "vue";

 const state = reactive({
    isLoading: false,
})

 const show = () => {
    state.isLoading = true;
}

 const hide = () => {
    state.isLoading = false;
}
</script>

<template>
    <div v-if="state.isLoading">
        <PulseLoader/>
    </div>
</template>