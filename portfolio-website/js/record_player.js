import * as BABYLON from "@babylonjs/core";

let currentSongIndex = 0;
let nowPlaying = null;
let isPlaying = false;
export function record_player(scene, position) {

    console.log("record is playing");

    const songList = ["its_the_same_old_dream-charlie_spivak.mp3", "stardust-charlie_spivak.mp3"];

    if (isPlaying && nowPlaying) {
        nowPlaying.stop();
        console.log("Ended song");
        isPlaying = false;
        return;
    }

    currentSongIndex = (currentSongIndex + 1) % songList.length;
    const currentSong = `../music/${songList[currentSongIndex]}`;

    nowPlaying = new BABYLON.Sound(
        "music",
        currentSong,
        scene,
        function() {
            nowPlaying.setPosition(position);
            nowPlaying.volume = 0.5;
            nowPlaying.play();
            isPlaying = true;

        },
        {
            autoplay: false,
            spatialSound: true,
            distanceModel: "exponential",
            rolloffFactor: 0.2
        }
    );
}