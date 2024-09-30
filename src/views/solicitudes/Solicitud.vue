<template>
  <BreadCrumb :breadcrumbs="breadcrumbs" />
  <div class="overflow-x-auto bg-white shadow-md rounded-lg mt-5">
    <div class="mb-3 flex justify-end" v-if="!create">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="() => create = true">
            Crear Registro
        </button>
    </div>
    <table class="min-w-full table-auto" v-if="!create">
      <thead class="bg-gray-200">
        <tr>
          <th v-for="header in headers" :key="header" class="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider" >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="(row, index) in data" :key="index" class="hover:bg-gray-50">
          <td v-for="(value, key) in row" :key="key" class="px-6 py-4 whitespace-nowrap text-sm text-gray-700" >
            {{ value }}
          </td>
          <td>
            Accion
          </td>
        </tr>
      </tbody>
    </table>
    <FormSolicitud @onCerrar="() => create = true" v-else/>

  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import BreadCrumb from "@/utils/Breadcrumb.vue";
import FormSolicitud from '@/views/solicitudes/CrearSolicitud.vue'

const headers = ref([]);
const data = ref([]);

const create = ref(<Boolean> false)

onMounted(() => onInitData());

const breadcrumbs = [{ text: "Solicitudes", link: "#" }];

const onInitData = () => {
  headers.value = [
    "ID",
    "SOLICITUD",
    "ASUNTO",
    "DESICION",
    "FECHA DE SOLICITUD",
    "SOLICITANTE",
    "SESION",
    "DESCRIPCIÓN",
    "ACCIONES"
  ];
  data.value = [
    {
      ID: 1,
      SOLICITUD: "Solicitud de permiso",
      ASUNTO: "Permiso para asistir a un evento",
      DESICION: "Aprobado",
      "FECHA DE SOLICITUD": "2022-01-01",
      SOLICITANTE: "Juan Pérez",
      SESION: "Sesión 1",
      DESCRIPCIÓN: "Solicitud de permiso para asistir a un evento importante",
    },
    {
      ID: 2,
      SOLICITUD: "Solicitud de información",
      ASUNTO: "Información sobre un proyecto",
      DESICION: "Pendiente",
      "FECHA DE SOLICITUD": "2022-01-15",
      SOLICITANTE: "María García",
      SESION: "Sesión 2",
      DESCRIPCIÓN: "Solicitud de información sobre un proyecto en curso",
    },
    {
      ID: 3,
      SOLICITUD: "Solicitud de apoyo",
      ASUNTO: "Apoyo para un proyecto",
      DESICION: "Rechazado",
      "FECHA DE SOLICITUD": "2022-02-01",
      SOLICITANTE: "Carlos López",
      SESION: "Sesión 3",
      DESCRIPCIÓN: "Solicitud de apoyo para un proyecto que no fue aprobado",
    },
    {
      ID: 4,
      SOLICITUD: "Solicitud de permiso",
      ASUNTO: "Permiso para viajar",
      DESICION: "Aprobado",
      "FECHA DE SOLICITUD": "2022-03-01",
      SOLICITANTE: "Ana Rodríguez",
      SESION: "Sesión 4",
      DESCRIPCIÓN: "Solicitud de permiso para viajar a un evento importante",
    },
    {
      ID: 5,
      SOLICITUD: "Solicitud de información",
      ASUNTO: "Información sobre un proceso",
      DESICION: "Pendiente",
      "FECHA DE SOLICITUD": "2022-04-01",
      SOLICITANTE: "Pedro Martínez",
      SESION: "Sesión 5",
      DESCRIPCIÓN: "Solicitud de información sobre un proceso en curso",
    },
    {
      ID: 6,
      SOLICITUD: "Solicitud de apoyo",
      ASUNTO: "Apoyo para un proyecto",
      DESICION: "Aprobado",
      "FECHA DE SOLICITUD": "2022-05-01",
      SOLICITANTE: "Sofía Gómez",
      SESION: "Sesión 6",
      DESCRIPCIÓN: "Solicitud de apoyo para un proyecto que fue aprobado",
    },
    {
      ID: 7,
      SOLICITUD: "Solicitud de permiso",
      ASUNTO: "Permiso para asistir a un evento",
      DESICION: "Rechazado",
      "FECHA DE SOLICITUD": "2022-06-01",
      SOLICITANTE: "Luis Hernández",
      SESION: "Sesión 7",
      DESCRIPCIÓN:
        "Solicitud de permiso para asistir a un evento que no fue aprobado",
    },
    {
      ID: 8,
      SOLICITUD: "Solicitud de información",
      ASUNTO: "Información sobre un proyecto",
      DESICION: "Aprobado",
      "FECHA DE SOLICITUD": "2022-07-01",
      SOLICITANTE: "María Rodríguez",
      SESION: "Sesión 8",
      DESCRIPCIÓN:
        "Solicitud de información sobre un proyecto que fue aprobado",
    },
    {
      ID: 9,
      SOLICITUD: "Solicitud de apoyo",
      ASUNTO: "Apoyo para un proyecto",
      DESICION: "Pendiente",
      "FECHA DE SOLICITUD": "2022-08-01",
      SOLICITANTE: "Juan Carlos",
      SESION: "Sesión 9",
      DESCRIPCIÓN: "Solicitud de apoyo para un proyecto en curso",
    },
    {
      ID: 10,
      SOLICITUD: "Solicitud de permiso",
      ASUNTO: "Permiso para viajar",
      DESICION: "Aprobado",
      "FECHA DE SOLICITUD": "2022-09-01",
      SOLICITANTE: "Ana García",
      SESION: "Sesión 10",
      DESCRIPCIÓN: "Solicitud de permiso para viajar a un evento importante",
    },
    {
      ID: 11,
      SOLICITUD: "Solicitud de información",
      ASUNTO: "Información sobre un proceso",
      DESICION: "Rechazado",
      "FECHA DE SOLICITUD": "2022-10-01",
      SOLICITANTE: "Pedro López",
      SESION: "Sesión 11",
      DESCRIPCIÓN:
        "Solicitud de información sobre un proceso que no fue aprobado",
    },
    {
      ID: 12,
      SOLICITUD: "Solicitud de apoyo",
      ASUNTO: "Apoyo para un proyecto",
      DESICION: "Aprobado",
      "FECHA DE SOLICITUD": "2022-11-01",
      SOLICITANTE: "Sofía Martínez",
      SESION: "Sesión 12",
      DESCRIPCIÓN: "Solicitud de apoyo para un proyecto que fue aprobado",
    },
    {
      ID: 13,
      SOLICITUD: "Solicitud de permiso",
      ASUNTO: "Permiso para asistir a un evento",
      DESICION: "Pendiente",
      "FECHA DE SOLICITUD": "2022-12-01",
      SOLICITANTE: "Luis Gómez",
      SESION: "Sesión 13",
      DESCRIPCIÓN: "Solicitud de permiso para asistir a un evento en curso",
    },
    {
      ID: 14,
      SOLICITUD: "Solicitud de información",
      ASUNTO: "Información sobre un proyecto",
      DESICION: "Aprobado",
      "FECHA DE SOLICITUD": "2023-01-01",
      SOLICITANTE: "María Hernández",
      SESION: "Sesión 14",
      DESCRIPCIÓN:
        "Solicitud de información sobre un proyecto que fue aprobado",
    },
    {
      ID: 15,
      SOLICITUD: "Solicitud de apoyo",
      ASUNTO: "Apoyo para un proyecto",
      DESICION: "Rechazado",
      "FECHA DE SOLICITUD": "2023-02-01",
      SOLICITANTE: "Juan Carlos",
      SESION: "Sesión 15",
      DESCRIPCIÓN: "Solicitud de apoyo para un proyecto que no fue aprobado",
    },
  ];
};
</script>