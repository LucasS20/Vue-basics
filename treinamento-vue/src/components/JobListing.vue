<script setup>
import {computed, ref} from "vue";

const props = defineProps({
    job: {type: Object, default: () => ({})}
})
const showFullDescription = ref(false);

const mostrarDescricaoCompleta = () => {
    showFullDescription.value = !showFullDescription.value;
}
const truncatedDescription = computed(() => {
    let description = props.job.description;
    if (!showFullDescription.value) {
        description = description.substring(0, 120).concat('...');
    }
    return description;
})

</script>

<template>
    <div class="bg-white rounded-xl shadow-md relative">
        <div class="p-4">
            <div class="mb-6">
                <div class="text-gray-600 my-2">{{ props.job.type }}</div>
                <h3 class="text-xl font-bold">{{ props.job.title }}</h3>
            </div>

            <div class="mb-5">
                {{ truncatedDescription }}
                <div>
                    <button @click="mostrarDescricaoCompleta" class="text-green-500 hover:text-green-600 mb-5">
                        {{ showFullDescription ? 'Mostrar menos' : 'Mostrar mais' }}
                    </button>
                </div>
            </div>

            <h3 class="text-green-500 mb-2">{{ props.job.salary }}</h3>

            <div class="border border-gray-100 mb-5"></div>

            <div class="flex flex-col lg:flex-row justify-between mb-4">
                <div class="text-orange-700 mb-3">
                    <i class="fa-solid fa-location-dot text-lg"></i>
                    {{ props.job.location }}
                </div>
                <RouterLink
                    class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                    :to="`/jobs/${job.id} `">
                    Read More
                </RouterLink>
            </div>
        </div>
    </div>
</template>