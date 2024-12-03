<script setup>
import jsonJobs from '@/jobs.json';
import {ref} from "vue";
import JobListing from "@/components/JobListing.vue";

const jobs = ref(jsonJobs);
</script>

<template>
    <section class='bg-blue-50 px-4 py-10'>
        <div class="container xl m-auto">
            <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
                Empregos
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <JobListing v-for="job in jobs" :key="job.id" :job="job"/>
            </div>
        </div>
    </section>
</template>