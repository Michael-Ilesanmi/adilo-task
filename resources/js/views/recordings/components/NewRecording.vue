<template>
  <div @click="closeModal(e)" class="fixed top-0 bottom-0 left-0 right-0 bg-[#00000040] !m-0 z-20">
    <div class="w-full h-full flex items-center justify-center">
        <div ref="newRecordingModal" class="bg-white relative rounded-md w-full md:w-3/5 lg:w-1/4">
            <nav class="flex justify-between px-6 py-3 border-b font-bold">
                <h1>New Recording</h1>
                <button @click="$emit('close-modal')">
                    <span class="iconify" data-icon="uiw:close"></span>
                </button>
            </nav>
            <form @submit.prevent="record">
                <p class="font-light">Save the recording in</p>
                <select name="folder" id="folder">
                    <option value="NULL" disabled>Select a project</option>
                    <option value="1">My Project</option>
                </select>
                <label for="screen">
                    Record screen
                    <Toggle v-model="permissions.screen" name="screen" />
                </label>
                <label for="camera">
                    Record camera
                    <Toggle v-model="permissions.camera" name="camera" />
                </label>
                <label for="mic">
                    Record mic
                    <Toggle v-model="permissions.mic" name="mic" />
                </label>
                <primary-btn class="mx-auto px-12" text="New Request" />
            </form>
        </div>
    </div>
  </div>
</template>

<script setup>
import PrimaryBtn from "@/components/btns/Primary.vue"
import Toggle from "@/components/btns/ToggleBtn.vue"
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const permissions = reactive({
    screen: false,
    camera: false,
    mic: false,
})

const emit = defineEmits(['close-modal'])

const newRecordingModal = ref(null);

const closeModal = () => {
    const modal = newRecordingModal.value;
    if (modal && !modal.contains(event.target)) {
        return emit('close-modal');
    } else {
        return;
    }
}

const record = () => {
    const truety = Object.values(permissions).some(value => value === true);
    if (truety === false) {
        return alert('Please select at least one recording source');        
    }
    router.push({ name: 'Record', query: permissions})
}
</script>

<style lang="less" scoped>
form{
    @apply flex flex-col gap-y-6 p-6; 
    select {
        @apply bg-[#F8FAFB] border border-[#E2E5ED] rounded-lg px-4 py-2 focus:ring-0;
    }
    label {
        @apply flex justify-between items-center text-[#21455E] font-medium text-lg relative;
    }
}
</style>