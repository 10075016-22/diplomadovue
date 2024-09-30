<template>
  <div>
    <div class="overflow-x-auto bg-white shadow-md rounded-lg mt-5 pa-6">
      <form class="px-4 py-2">
        <div class="mb-3">
          <label for="id" class="block text-sm font-bold mb-2">ID</label>
          <input
            type="number"
            id="id"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value="1"
          />
        </div>

        <div class="mb-3">
          <label for="solicitud" class="block text-sm font-bold mb-2"
            >Solicitud</label
          >
          <input
            type="text"
            id="solicitud"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value="Solicitud de permiso"
          />
        </div>

        <div class="mb-3">
          <label for="asunto" class="block text-sm font-bold mb-2"
            >Asunto</label
          >
          <input
            type="text"
            id="asunto"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value="Permiso para asistir a un evento"
          />
        </div>

        <div class="mb-3">
          <label for="decision" class="block text-sm font-bold mb-2"
            >Decisión</label
          >
          <input
            type="text"
            id="decision"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value="Aprobado"
          />
        </div>

        <div class="mb-3">
          <label for="fecha_solicitud" class="block text-sm font-bold mb-2"
            >Fecha de Solicitud</label
          >
          <input
            type="date"
            id="fecha_solicitud"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value="2022-01-01"
          />
        </div>

        <div class="mb-3">
          <label for="solicitante" class="block text-sm font-bold mb-2"
            >Solicitante</label
          >
          <input
            type="text"
            id="solicitante"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value="Juan Pérez"
          />
        </div>

        <div class="mb-3">
          <label for="sesion" class="block text-sm font-bold mb-2"
            >Sesión</label
          >
          <input
            type="text"
            id="sesion"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value="Sesión 1"
          />
        </div>

        <div class="mb-3">
          <label for="descripcion" class="block text-sm font-bold mb-2"
            >Descripción</label
          >
          <textarea
            id="descripcion"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value="Solicitud de permiso para asistir a un evento importante"
          ></textarea>
        </div>

        <div class="text-right">
          <button class="border bg-transparent mr-3 px-4" @click="emit('onCerrar')">Cancelar</button>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded outlined"
          >
            Crear Registro
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import BreadCrumb from "@/utils/Breadcrumb.vue";

const emit = defineEmits(["onGuardar", "onCerrar"]);
const breadcrumbs = [
  { text: "Solicitudes", link: "solicitudes" },
  { text: "Crear", link: "#" },
];
</script>