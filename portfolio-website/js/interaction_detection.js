import {displayTooltip} from "./tooltips.js";
import * as BABYLON from "@babylonjs/core";
import {sound_position} from "./furniture.js";

scene.onPointerOverTrigger = function castRay(scene) {
    const hit = scene.pick(scene.pointerX, scene.pointerY);
    let hitMesh = hit.pickedMesh;

    if(hitMesh.name.startsWith('rp_')) {
        displayTooltip(scene, new BABYLON.Vector3(sound_position.x, sound_position.y + 0.2, sound_position.z), "Record Player");
        console.log(sound_position);
        console.log(sound_position[1]);
        console.log("Hovering over record_player");
    }

}