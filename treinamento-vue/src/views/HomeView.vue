<script setup>
import Hero from "@/components/Hero.vue";
import HomeCards from "@/components/HomeCards.vue";
import JobListings from "@/components/JobListings.vue";
</script>

<template>
    <Hero title="Atenção Dev" subtitle="Aqui você vai aprender Vue de uma forma rápida"/>
    <HomeCards/>
    <JobListings :limit="3" :show-button="true"/>
</template>