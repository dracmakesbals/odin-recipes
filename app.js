const playBtn = document.getElementById("play");
const audioTrack = document.getElementById("audioTrack");
const videoTrack = document.getElementById("videoTrack");
const recipeContainer = document.getElementById("recipesContainer");

const audios = document.querySelectorAll("audio");
const videos = document.querySelectorAll("video");
console.log(audios);
console.log(videos);
videoTrack.style.display = "none";

playBtn.addEventListener("mouseover", function () {
  [].forEach.call(audios, function (audio) {
    recipeContainer.style.opacity = "90%";
    audio.play();
  });

  [].forEach.call(videos, function (video) {
    video.play();
    videoTrack.style.display = "block";
  });
});

playBtn.addEventListener("mouseleave", function () {
  audioTrack.pause();
  audioTrack.currentTime = 0;

  videoTrack.pause();
  videoTrack.currentTime = 0;
  videoTrack.style.display = "none";
});
