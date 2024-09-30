<template>
  <aside class="bg-gray-100 w-64 min-h-screen p-4">
    <nav>
      <ul class="space-y-2">
        <li v-for="item in menuItems" :key="item.text">
          <router-link :to="{name: item.link}" class="block p-2 rounded hover:bg-gray-200 transition-colors flex"
          >
            <component :is="item.icon" class="w-5 h-5 mr-2" />
            {{ item.text }}
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { HomeIcon, TagIcon, ListBulletIcon, FolderIcon, UserGroupIcon } from "@heroicons/vue/24/solid";

const menuItems = ref([]);

onMounted(() => {
  menuItems.value = [
    {
      text: "Inicio",
      link: "home",
      icon: HomeIcon,
    },
    { text: "Solicitudes", link: "solicitudes", icon: ListBulletIcon },
    { text: "Actas", link: "actas", icon: FolderIcon },
    { text: "Sesiones", link: "sesiones", icon: TagIcon },
    { text: "Invitados", link: "invitados", icon: UserGroupIcon },
  ];
});
</script>