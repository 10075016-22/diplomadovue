<template>
  <div class="flex flex-col min-h-screen">
    <Header :title="title" />
    <div class="flex flex-1">
      <Sidebar/>
      <main class="flex-1 p-5">
        <router-view />
      </main>
    </div>
    <Footer :companyName="companyName" />
  </div>
</template>
<script setup>
import { ref } from "vue";

import Header from "@/components/common/HeaderApp.vue";
import Footer from '@/components/common/FooterApp.vue'
import Sidebar from '@/components/common/SidebarApp.vue'

const title = ref('Diplomado')
const companyName = ref('Diplomado Unicordoba')
</script>

