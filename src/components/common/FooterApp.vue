<template>
  <footer class="bg-gray-800 text-white p-4 mt-auto">
    <div class="container mx-auto text-center">
      <p>&copy; {{ currentYear }} {{ companyName }}. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  companyName: {
    type: String,
    default: "Your Company",
  },
});

const currentYear = computed(() => new Date().getFullYear());
</script>