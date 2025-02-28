import * as BABYLON from '@babylonjs/core';
import {record_player} from "./record_player.js";
import {sound_position} from "./furniture.js";
import {closeBook, openBook} from "./book_content.js";

export function createOutline(scene) {
    const outlineLayer = new BABYLON.HighlightLayer("outlineLayer", scene);
    outlineLayer.blurHorizontalSize = 1;
    outlineLayer.blurVerticalSize = 1;


    function getAllMeshes(mesh) {
        while (mesh.parent) {
            mesh = mesh.parent
        }

        mesh.getChildMeshes().forEach(mesh => {
            outlineLayer.addMesh(mesh, BABYLON.Color3.White());
        });

    }

    scene.onPointerMove = function () {
        const hit = scene.pick(scene.pointerX, scene.pointerY);
        let hitMesh = hit.pickedMesh;

        outlineLayer.removeAllMeshes();

        if (hitMesh.name.startsWith("int_")) {
            getAllMeshes(hitMesh);
        }
    }

}


export function objectInteraction(scene) {
    scene.onPointerDown = function castRay() {
        const hit = scene.pick(scene.pointerX, scene.pointerY);
        let hitMesh = hit.pickedMesh;

        if(hitMesh.name.startsWith("int_cube_rp")) {
            record_player(scene, sound_position);

        }
        else if(hitMesh.name.endsWith("book_stack")) {
            openBook(scene, "Avalore", 7);
        }

    }

    scene.onKeyboardObservable.add((kbInfo) => {
       if (kbInfo.type === BABYLON.KeyboardEventTypes.KEYDOWN) {
           if (kbInfo.event.key === "Escape") {
               closeBook();
           }
       }
    });


}

export function interactableExit(scene) {
    scene.onKey
}