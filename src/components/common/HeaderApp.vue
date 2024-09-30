<template>
  <header class="bg-gray-800 text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-xl font-bold">{{ title }}</h1>
      <nav>
        <ul class="flex space-x-4">
          <li v-for="item in menuItems" :key="item.text">
            <a :href="item.link" class="hover:text-gray-300">{{ item.text }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "Admin Dashboard",
  },
  menuItems: {
    type: Array,
    default: () => [],
  },
});
</script>