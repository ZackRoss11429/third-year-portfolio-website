import * as BABYLON from '@babylonjs/core';
import '@babylonjs/loaders/GLTF';
import {Inspector} from '@babylonjs/inspector';
import {ActionManager, ExecuteCodeAction} from "@babylonjs/core";
import {AudioEngine} from "@babylonjs/core";
import * as GUI from '@babylonjs/gui';
import '@babylonjs/gui-editor';

import {import_furniture} from "./furniture.js";
import {import_books} from "./books.js";
import {import_desk_items} from "./desk_items.js";
import {import_room} from "./room.js";
import {import_default_properties, import_materialProperties} from "./materials.js";
import {record_player} from "./record_player.js";
import{sound_position} from "./furniture.js";
import {createOutline, objectInteraction} from "./interaction.js";
import {Player} from "./Player.js";

const canvas = document.getElementById('renderCanvas');
const engine = new BABYLON.Engine(canvas);

const createScene = function() {
    const scene = new BABYLON.Scene(engine);

    scene.createDefaultCamera(true, false, true);
    // const light = new BABYLON.HemisphericLight("ambient_cheat_light", new BABYLON.Vector3(-1.345, 3, 2), scene);
    //
    // const sun = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0), scene);


    import_room(scene);

    import_desk_items(scene); // imports desk item models from desk_items.js

    import_furniture(scene); // imports furniture models from furniture.js

    import_books(scene); // imports bookshelf models from books.js

    // const player = new Player(scene);


    BABYLON.SceneLoader.ImportMesh(
        '',
        '/images-objects/',
        'chessboard.gltf',
        scene,
        function (meshes) {



            const chessboard = meshes[0];
            chessboard.position = new BABYLON.Vector3(-2.334, 0.997, 1.45);
            chessboard.rotation = new BABYLON.Vector3(0, Math.PI*1.5, 0);
            chessboard.scaling = new BABYLON.Vector3(-0.75, 0.75, 0.75);
            chessboard.name = "chessboard";

        });



    BABYLON.SceneLoader.ImportMesh(
        '',
        '/images-objects/',
        'antique_satchel.gltf',
        scene,
        function (meshes) {



            const satchel = meshes[0];
            satchel.position = new BABYLON.Vector3(-0.25, 0, 3.1);
            satchel.rotation = new BABYLON.Vector3(0, Math.PI / 6, 0);
            satchel.scaling = new BABYLON.Vector3(-0.5625, 0.5625, 0.5625);
            satchel.name = "satchel";
        });

    BABYLON.SceneLoader.ImportMesh(
        '',
        '/images-objects/',
        'rotary_phone.gltf',
        scene,
        function (meshes) {


            const phone = meshes[0];
            phone.position = new BABYLON.Vector3(0.3, 1, 1.27);
            phone.rotation = new BABYLON.Vector3(0, Math.PI/2, 0);
            phone.scaling = new BABYLON.Vector3(-0.5, 0.5, 0.5);
            phone.name = "phone";
        });


    createOutline(scene);
    objectInteraction(scene);


    BABYLON.SceneLoader.ImportMesh(
        '',
        '/images-objects/',
        'citizencaneposter_framed.gltf',
        scene,
        function (meshes) {


            const movie_poster1 = meshes[0];
            movie_poster1.position = new BABYLON.Vector3(-2.616, 1.4, 2.8);
            movie_poster1.rotation = new BABYLON.Vector3(0, Math.PI*1.5, 0);
            movie_poster1.scaling = new BABYLON.Vector3(-1, 1, 1);
            movie_poster1.name = "movie_poster1";
        });





    return scene;
}

const scene = createScene();

engine.runRenderLoop(function() {
    scene.render();
});

window.addEventListener('resize', function() {
   engine.resize();
});

Inspector.Show(scene, {});