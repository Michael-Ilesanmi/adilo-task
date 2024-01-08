import { createWebHistory, createRouter } from "vue-router";
import DashboardLayout from "@/layouts/DashboardLayout.vue";
import Recordings from "@/views/recordings/index.vue";
import Record from "@/views/recordings/record.vue";

const routes = [
  {
    path: "/",
    name: "DashboardLayout",
    component: DashboardLayout,
    meta:{
      sidebar: true,
    },
    children:[
      {
        path:'',
        name: "Recordings",
        component: Recordings,
      },
      {
        path:'/record',
        name: "Record",
        component: Record,
        meta: {
          sidebar: false,
        }
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
