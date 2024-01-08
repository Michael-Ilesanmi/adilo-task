<template>
  <main>
    <NewRecording 
        v-if="showNewRecordingModal === true"
        @close-modal="showNewRecordingModal = false" 
    />
    <Breadcrumbs />
    <div>
        <h1>My Recordings <span>{{ recordings.length }}</span></h1>
        <div>
            <secondary-btn icon="mynaui:arrow-up-down" text="By Date" />
            <danger-btn @click="showNewRecordingModal = true" icon="mdi:record-rec" text="Start Recording" />
            <primary-btn icon="tabler:video" text="New Request" />
        </div>
    </div>
    <div>
        <empty-recordings @record="showNewRecordingModal = true" v-if="!recordings || recordings.length < 1" />
        <list-recordings v-else :data="recordings" />
    </div>
  </main>
</template>

<script setup>
import PrimaryBtn from "@/components/btns/Primary.vue"
import DangerBtn from "@/components/btns/Danger.vue"
import SecondaryBtn from "@/components/btns/Secondary.vue"
import Breadcrumbs from "@/components/nav/Breadcrumbs.vue"

import EmptyRecordings from "./components/EmptyRecordings.vue"
import ListRecordings from "./components/ListRecordings.vue"
import NewRecording from "./components/NewRecording.vue"

import { useStore } from "vuex";
import { computed, ref } from "vue";

const showNewRecordingModal = ref(false);

const store = useStore();
const recordings = computed(() => store.state.recordings.recordings);
</script>

<style lang="less" scoped>
@green : "#637C8E";
main{
    &>div {
        @apply mt-4 w-full flex flex-col gap-y-4 lg:flex-row lg:items-end justify-between;
        h1 {
            @apply text-black text-lg lg:text-2xl;
            span {
                @apply text-[@green] font-semibold;
            }
        }
        &>div{
            @apply flex gap-x-4;
        }
    }
}
</style>