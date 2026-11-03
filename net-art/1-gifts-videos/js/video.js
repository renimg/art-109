const hoverVideos = document.querySelectorAll(".meow2");
const clickVideos = document.querySelectorAll(".meow3");
const webcamVideo = document.querySelector("#webcam");

hoverVideos.forEach(video => {
    video.addEventListener("mouseenter", () => {
        video.play();
    })
    video.addEventListener("mouseleave", () => {
        video.pause();
    })
})

clickVideos.forEach(video => {
    video.addEventListener("click", () => {
        video.play();
    })
})

async function startWebcam() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false
        })
        webcamVideo.srcObject = stream;

    } catch (error) {
        console.log("error accessing webcam");
    }
}

startWebcam();