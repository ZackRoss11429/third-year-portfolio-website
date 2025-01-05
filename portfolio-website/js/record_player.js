import * as BABYLON from "@babylonjs/core";





let currentSongIndex = 0;
let nowPlaying = null;
let isPlaying = false;
export function record_player(scene, position) {

    console.log("record is playing");

    const songList = [
        "/music/all_or_nothing_at_all-harry_james.mp3",
        "/music/autumn_leaves-frank_sinatra.mp3",
        "/music/blue_moon-billie_holiday.mp3",
        "/music/but_not_for_me-benny_goodman.mp3",
        "/music/do_I_worry-tommy_dorsey.mp3",
        "/music/everybody_loves_somebody-dean_martin.mp3",
        "/music/i_fall_in_love_too_easily-chet_baker.mp3",
        "/music/ill_be_seeing_you-billie_holiday.mp3",
        "/music/in_a_sentimental_mood-benny_goodman.mp3",
        "/music/its_been_a_long_long_time-harry_james.mp3",
        "/music/its_the_same_old_dream-charlie_spivak.mp3",
        "/music/love_me-quincy_jones.mp3",
        "/music/midnight_the_stars_and_you-al_bowly.mp3",
        "/music/moonlight_in_vermont-ernestine_anderson.mp3",
        "/music/my_old_flame-peggy_lee.mp3",
        "/music/solitude-billie_holiday.mp3",
        "/music/something_stupid-frank_sinatra.mp3",
        "/music/stardust-charlie_spivak.mp3",
        "/music/stardust-lester_young.mp3",
        "/music/strangers_in_the_night-frank_sinatra.mp3",
        "/music/summertime-ella_fitzgerald.mp3",
        "/music/the_nearness_of_you-glenn_miller.mp3",
        "/music/the_world_we_knew-frank_sinatra.mp3",
        "/music/there_will_never_be_another_you-lester_young.mp3",
        "/music/tuxedo_junction-glenn_miller.mp3",
    ];

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