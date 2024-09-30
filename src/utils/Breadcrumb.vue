<template>
  <nav class="text-gray-500 py-4 px-5 bg-gray-100">
    <ol class="list-none p-0 inline-flex">
      <li v-for="(crumb, index) in breadcrumbs" :key="index" class="flex items-center">
        <router-link v-if="crumb.link && crumb.link !== '#'" :to="{name: crumb.link }" class="hover:text-gray-700">
          {{ crumb.text }}
        </router-link>
        <span v-else>{{ crumb.text }}</span>
        <svg
          v-if="index < breadcrumbs.length - 1"
          class="fill-current w-3 h-3 mx-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
        </svg>
      </li>
    </ol>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Breadcrumbs',
  props: {
    breadcrumbs: {
      type: Array,
      default: () => [
        { text: 'Home', link: '#' },
        { text: 'Users', link: '#' },
        { text: 'User Details' }
      ]
    }
  }
})
</script>