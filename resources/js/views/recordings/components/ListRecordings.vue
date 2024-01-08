<template>
  <div class="w-full">
    <table>
        <thead>
            <tr>
                <td>Recordings</td>
                <td>Title</td>
                <td>Views</td>
                <td>Size</td>
                <td>Last Modified</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="recording in recordings" :key="recording.id">
                <td>
                    <div class="thumbnail">
                        <img :src="recording.thumbnail" alt="Thumbnail" />
                        <span>{{ moment.duration(recording.duration,'seconds').humanize() }}</span>
                    </div>
                </td>
                <td class="">
                    <p class="text-sm">{{ recording.title }}</p>
                    <p class="video__description">{{ recording.description }}</p>
                </td>
                <td>{{ recording.views }}</td>
                <td>{{ convertBytes(recording.size) }}</td>
                <td class="text-sm"> {{ moment(`${recording.updated_at}`, "YYYYMMDD").fromNow() }}</td>
                <td>
                    <button>
                        <span class="iconify font-bold text-4xl text-[#637C8E]" data-icon="fe:elipsis-h"></span>
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script setup>
import moment from "moment";
import { convertBytes } from "@/helpers/sizeConverter.js"
const props = defineProps({
    data: {
        type: Array,
        default(){
            return [];
        }
    }
})

const recordings = props.data;
</script>

<style lang="less" scoped>
table {
    @apply w-full text-[#21455E];
    thead > tr > td {
        @apply font-medium text-lg py-4 pr-12 whitespace-nowrap;
        &:first-of-type {
            @apply pr-0;
        }
    }
    tbody > tr > td {
        @apply text-sm w-fit pr-12 py-4;
        .thumbnail {
            @apply w-fit relative cursor-pointer overflow-clip rounded-md;
            img {
                @apply h-16 w-28 transition ease-linear duration-150;
                &:hover {
                    @apply scale-105;
                }
            }
            span {
                @apply absolute bg-black text-white text-xs bottom-2 right-2 px-2 py-1 rounded-md;
            }
        }
        >p.video__description {
            @apply text-xs text-[#A3BAC6] w-3/4;
        }
        &:first-of-type {
            @apply pr-4 ;
        }
    }
}
</style>