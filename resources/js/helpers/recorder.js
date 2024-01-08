import store from "@/store/index.js";
import router from "@/router/index.js";


const VIDEO_CAPTURE_CONSTRAINTS = {
    video: {
      width: {
        min: 1280,
        ideal: 1920,
        max: 2560,
      },
      height: {
        min: 720,
        ideal: 1080,
        max: 1440
      },
    },
    audio: true,
};
const SCREEN_CAPTURE_CONSTRAINTS = {
    video: {
        cursor: "always",
        height: 1000,
        width: 1200,
    },
    audio: false,
};


let stream;
let deviceRecorder = null;
let blob = null;
let chunks = [];
let start_time;
let end_time;


const init = async ({screen, camera, mic}) => {
    if(screen == 'true') {
      stream = await navigator.mediaDevices.getDisplayMedia(SCREEN_CAPTURE_CONSTRAINTS);
    }
    if(camera == 'false') VIDEO_CAPTURE_CONSTRAINTS.video = false;
    if(mic == 'false') VIDEO_CAPTURE_CONSTRAINTS.audio = false;
    stream = await navigator.mediaDevices.getUserMedia(VIDEO_CAPTURE_CONSTRAINTS)
    return stream;
}

const start = async () => {
  start_time = new Date();
  deviceRecorder = new MediaRecorder(stream, {mimetype: "video/mp4"});
  deviceRecorder.ondataavailable = (e) => {
    if(e.data.size > 0){
      chunks.push(e.data);
    }
  }
  deviceRecorder.onstop = () => {
    chunks = [];
  }
  deviceRecorder.start(250)
}

const stop = async () => {
  end_time = new Date();
  let filename = prompt("file name", "video");
  deviceRecorder.stop()
  blob = new Blob(chunks, {type: "video/mp4"});
  chunks = [];
  let dataDownloadURL = URL.createObjectURL(blob);
  let a = document.createElement('a');
  a.href = dataDownloadURL;
  a.download = `${filename}.mp4`;
  // a.click();
  URL.revokeObjectURL(dataDownloadURL);

  addToStore(filename, blob.size, calculateDuration());
}

const calculateDuration = () => {
  let diff =(end_time.getTime() - start_time.getTime()) / 1000;
  return Math.abs(Math.round(diff));
}

const addToStore = (filename = "Video", size = 0, duration, description = null ) => {
  const video = {
      title: filename,
      description: description,
      views: randomInteger(),
      size: size, // kB,
      thumbnail: "https://picsum.photos/200",
      duration: duration,
      updated_at: new Date().toISOString(),
  }
  store.dispatch('recordings/saveRecording', video) 
  return router.push({name: "Recordings"})
}

const randomInteger = () => {
  return Math.floor(Math.random() * (1000 - 10 + 1)) + 10;
}

export { init, start, stop };