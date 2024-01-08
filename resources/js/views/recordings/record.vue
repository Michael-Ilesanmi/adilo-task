<template>
  <div class="w-full flex flex-col">
    <main class="flex grow overflow-y-auto pb-12 pt-8">
      <section class="h-full w-8/12 mx-auto pb-12">
        <p class="text-sm text-[#637C8E]">
            <span class="iconify inline text-xl" data-icon="svg-spinners:pulse-3" style="color: #ee5951;"></span>
            Live Preview
        </p>
        <div class="bg-[#21455E] rounded-lg w-full h-5/6 mt-4 mb-12">
            <video autoplay ref="videoRecordingPreview"></video>
        </div>
        <primary-btn 
          class="!mx-auto !px-12 !py-4" 
          :text="recordingInProgress == false ? 'Start recording' : 'Stop Recording'" 
          @click="record"
        />        
      </section>
    </main>
  </div>
</template>

<script setup>
import TopNav from "@/components/nav/TopNav.vue";
import PrimaryBtn from "@/components/btns/Primary.vue";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { init, start, stop } from "@/helpers/recorder.js";

const route = useRoute();


const videoRecordingPreview = ref(null);
const recordingInProgress = ref(false);
const stream = ref(null);

const record = async () => {
  recordingInProgress.value = !recordingInProgress.value;
  if (recordingInProgress.value === true) {
    start()
  } else {
    stop()
  }
  return;
}

const initRecorder = async () => {
    let screen, camera, mic;
    mic = route.query.mic
    camera = route.query.camera
    screen = route.query.screen
    const payload = { screen, camera, mic };
    stream.value = await init(payload);    
    handleVideoPreview(stream.value);
}

const handleVideoPreview = (stream) => {
    videoRecordingPreview.value.srcObject = stream;
};

onMounted(()=>{
    initRecorder();
})
</script>

<style lang="less" scoped>
main {
    background: transparent linear-gradient(117deg, #0DABD8 0%, #EAFAFF 0%, #D3F5FE 100%) 0% 0% no-repeat padding-box;
}
video {
    width: 100%;
    height: 100%;
}
</style>