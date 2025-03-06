import * as BABYLON from '@babylonjs/core';
import '@babylonjs/loaders/GLTF';
import {Inspector} from '@babylonjs/inspector';
import {ActionManager, Color3, ExecuteCodeAction, Vector3} from "@babylonjs/core";
import {AudioEngine} from "@babylonjs/core";
import * as GUI from '@babylonjs/gui';
import '@babylonjs/gui-editor';

import {import_furniture} from "./furniture.js";
import {import_books} from "./books.js";
import {import_desk_items} from "./desk_items.js";
import {import_room} from "./room.js";
import {import_props} from "./furniture_props.js";
import {import_default_properties, import_materialProperties} from "./materials.js";
import {record_player} from "./record_player.js";
import{sound_position} from "./furniture.js";
import {createOutline, objectInteraction} from "./interaction.js";
import {Player} from "./Player.js";
import {isBookOpen} from "./book_content.js";

const canvas = document.getElementById('renderCanvas');
const engine = new BABYLON.Engine(canvas);
// Creating the canvas for the 3D environment to be built on

const createScene = function() {
    const scene = new BABYLON.Scene(engine);

    const ambientLight = new BABYLON.HemisphericLight("ambientLight", new Vector3(0,0,0), scene);
    ambientLight.intensity = 0.03;
    ambientLight.diffuse = new Color3(0.784, 0.588, 0.063);
    // add ambient light source to compensate material light reflection property

    scene.createDefaultCamera(true, false, true);

    import_room(scene); // imports main scene environment model from room.js

    import_desk_items(scene); // imports desk item models from desk_items.js

    import_furniture(scene); // imports furniture models from furniture.js

    import_books(scene); // imports bookshelf models from books.js

    import_props(scene); // imports extra prop models from furniture_props.js


    createOutline(scene);
    objectInteraction(scene);
    // checkers that detect when the user hovers over a specific 'interactable' model

    return scene;
}

const scene = createScene();

engine.runRenderLoop(function() {
    scene.render();
});

window.addEventListener('resize', function() {
   engine.resize();
});

// Inspector.Show(scene, {});
// Inspector for debugging