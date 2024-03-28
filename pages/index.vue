<template>
    <AppHeader></AppHeader>
    <AppBanner></AppBanner>
    <AppCollection :title="'Moda Verão'"></AppCollection>
    <AppCollection :title="'Moda Feia'"></AppCollection>
    <AppCollection :title="'Moda Inverno'"></AppCollection>
</template>

<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue";
import AppBanner from "~/components/AppBanner.vue";
import AppCollection from "~/components/AppCollection.vue";
</script>

<style scoped>
</style>