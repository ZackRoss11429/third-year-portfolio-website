import * as BABYLON from "@babylonjs/core";





let currentSongIndex = 0;
let nowPlaying = null;
let isPlaying = false;
export function record_player(scene, position) {

    console.log("record is playing");

    const songList = [
        "blue_moon-billie_holiday",
        "but_not_for_me-benny_goodman",
        "do_I_worry-tommy_dorsey",
        "everybody_loves_somebody-dean_martin",
        "autumn_leaves-frank_sinatra",
        "i_fall_in_love_too_easily-chet_baker",
        "ill_be_seeing_you-billie_holiday",
        "in_a_sentimental_mood-benny_goodman",
        "its_been_a_long_long_time-harry_james",
        "its_the_same_old_dream-charlie_spivak",
        "love_me-quincy_jones",
        "midnight_the_stars_and_you-al_bowly",
        "moonlight_in_vermont-ernestine_anderson",
        "my_old_flame-peggy_lee",
        "solitude-billie_holiday",
        "something_stupid-frank_sinatra",
        "stardust-charlie_spivak",
        "stardust-lester_young",
        "strangers_in_the_night-frank_sinatra",
        "summertime-ella_fitzgerald",
        "all_or_nothing_at_all-harry_james",
        "the_nearness_of_you-glenn_miller",
        "the_world_we_knew-frank_sinatra",
        "there_will_never_be_another_you-lester_young",
        "tuxedo_junction-glenn_miller",
    ];

    if (isPlaying && nowPlaying) {
        nowPlaying.stop();
        console.log("Ended song");
        isPlaying = false;
        return;
    }

    currentSongIndex = (currentSongIndex + 1) % songList.length;
    const currentSong = `../music/${songList[currentSongIndex]}.mp3`;
    console.log(`song: ${currentSong}`);

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