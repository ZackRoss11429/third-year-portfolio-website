import * as BABYLON from '@babylonjs/core';
import {record_player} from "./record_player.js";
import {sound_position} from "./furniture.js";
import {closeBook, openBook} from "./book_content.js";


// This function is called when the user hovers over an object that can be interacted with. Creates a white outline
// around the object model
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


// This function checks for when the user either clicks something or hovers over it.
export function objectInteraction(scene) {
    //Instead of this function interating through every mesh of the 3D model, the 3D model has every mesh have a certain
    // naming convention to be able to determine what it is to this function the instant it is clicked.
    scene.onPointerDown = function castRay() {
        const hit = scene.pick(scene.pointerX, scene.pointerY);
        let hitMesh = hit.pickedMesh;

        // When the record player 3D model is clicked, the record player function is called
        if(hitMesh.name.startsWith("int_cube_rp")) {
            record_player(scene, sound_position);

        }
        // When a book in the bookshelf is clicked, the process for instantiated, loading and displaying the book begins
        else if(hitMesh.name.endsWith("book_stack")) {
            openBook(scene, "Avalore", 7);
        }

    }

    // This checks if the book gui is instantiated nad opened. If so and the user clicks ESCAPE, the book is deleted and
    // exited out of
    scene.onKeyboardObservable.add((kbInfo) => {
       if (kbInfo.type === BABYLON.KeyboardEventTypes.KEYDOWN) {
           if (kbInfo.event.key === "Escape") {
               closeBook();
           }
       }
    });


}