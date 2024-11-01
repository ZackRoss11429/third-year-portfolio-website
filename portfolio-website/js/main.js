import * as BABYLON from '@babylonjs/core';
import '@babylonjs/loaders/GLTF';
import {Inspector} from '@babylonjs/inspector';

const canvas = document.getElementById('renderCanvas');
const engine = new BABYLON.Engine(canvas);

const createScene = function() {
    const scene = new BABYLON.Scene(engine);

    scene.createDefaultCameraOrLight(true, false, true);
    var camera = new BABYLON.UniversalCamera("Camera", new BABYLON.Vector3(-0.8, 1.7, 1.34), scene);
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, true);
    camera.lowerRadiusLimit= 0.1;
    camera.upperRadiusLimit = 0.1;


    BABYLON.SceneLoader.ImportMesh(
        '',
        '/images-objects/',
        'study.gltf',
        scene,
        function (meshes) {

            const study = meshes[0];
            study.position = new BABYLON.Vector3(-3.147, 0, -0.015);
            study.rotation = new BABYLON.Vector3(0, Math.PI/2, 0);
            study.scaling = new BABYLON.Vector3(-4, 4, 4);
            study.forEach((mesh) => {
                if (mesh.material) {
                    mesh.material.alpha = 1;
                }
            });

        });

    BABYLON.SceneLoader.ImportMesh(
        '',
        '/images-objects/',
        'antique_desk.gltf',
        scene,
        function (meshes) {

            const large_desk = meshes[0];
            large_desk.position = new BABYLON.Vector3(0, 0, 3);

            large_desk.forEach((mesh) => {
                if (mesh.material) {
                    mesh.material.alpha = 1;
                }
            });
        });

    BABYLON.SceneLoader.ImportMesh(
        '',
        '/images-objects/',
        'large_bookshelf.gltf',
        scene,
        function (meshes) {

            const large_bookshelf = meshes[0];
            large_bookshelf.position = new BABYLON.Vector3(-1.345, 0, 2.807);
            large_bookshelf.rotation = new BABYLON.Vector3(0, 0, 0);
            large_bookshelf.scaling = new BABYLON.Vector3(1.675, 1.675, 1.675);

            large_bookshelf.forEach((mesh) => {
                if (mesh.material) {
                    mesh.material.alpha = 1;
                }
            });
        });

    BABYLON.SceneLoader.ImportMesh(
        '',
        '/images-objects/',
        'typewriter.gltf',
        scene,
        function (meshes) {

            const typewriter = meshes[0];
            typewriter.position = new BABYLON.Vector3(0.5, 0.975, 3.1);
            typewriter.rotation = new BABYLON.Vector3(0, Math.PI / 8, 0);
            typewriter.scaling = new BABYLON.Vector3(-0.5625, 0.5625, 0.5625);
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
        });

    BABYLON.SceneLoader.ImportMesh(
        '',
        '/images-objects/',
        'rotary_phone.gltf',
        scene,
        function (meshes) {

            const phone = meshes[0];
            phone.position = new BABYLON.Vector3(1, 1, 1);
            phone.rotation = new BABYLON.Vector3(0, 0, 0);
            phone.scaling = new BABYLON.Vector3(-0.5625, 0.5625, 0.5625);
        });

    BABYLON.SceneLoader.ImportMesh(
        '',
        '/images-objects/',
        'antique_desk_lamp.gltf',
        scene,
        function (meshes) {

            const desk_lamp = meshes[0];
            desk_lamp.position = new BABYLON.Vector3(-0.95, 0.975, 3.75);
            desk_lamp.rotation = new BABYLON.Vector3(0, Math.PI * (5/3), 0);
            desk_lamp.scaling = new BABYLON.Vector3(-0.5625, 0.5625, 0.5625);

            desk_lamp.forEach((mesh) => {
               if (mesh.material) {
                   mesh.material.alpha = 1;
               }
            });

        });
    const desk_lamp_light = new BABYLON.SpotLight(
      'spotLight',
      new BABYLON.Vector3(-1.163, 1.468, 3.548),
      new BABYLON.Vector3(68, -112.5, -45),
      Math.PI,
      1,
      scene
    );
    desk_lamp_light.intensity = 10;

    BABYLON.SceneLoader.ImportMesh(
        '',
        '/images-objects/',
        'antique_map_1.gltf',
        scene,
        function (meshes) {

            const map_1 = meshes[0];
            map_1.position = new BABYLON.Vector3(-0.9, 0.975, 3.75);
            map_1.rotation = new BABYLON.Vector3(0, Math.PI, 0);
            map_1.scaling = new BABYLON.Vector3(-0.5625, 0.5625, 0.5625);

            map_1.forEach((mesh) => {
                if (mesh.material) {
                    mesh.material.alpha = 1;
                }
            });

        });

    BABYLON.SceneLoader.ImportMesh(
        '',
        '/images-objects/',
        'scale_arm_compass.gltf',
        scene,
        function (meshes) {

            const scale_arm_compass = meshes[0];
            scale_arm_compass.position = new BABYLON.Vector3(-0.66, 0.933, 3.54);
            scale_arm_compass.rotation = new BABYLON.Vector3(Math.PI * 1.5, Math.PI * (5/3), 0);
            scale_arm_compass.scaling = new BABYLON.Vector3(-0.15, 0.15, 0.15);

            scale_arm_compass.forEach((mesh) => {
                if (mesh.material) {
                    mesh.material.alpha = 1;
                }
            });

        });

    BABYLON.SceneLoader.ImportMesh(
        '',
        '/images-objects/',
        'antique_compass.gltf',
        scene,
        function (meshes) {

            const compass = meshes[0];
            compass.position = new BABYLON.Vector3(-1.3, 0.975, 3.35);
            compass.rotation = new BABYLON.Vector3(0, Math.PI * (7/10), 0);
            compass.scaling = new BABYLON.Vector3(-0.18, 0.18, 0.18);

            scale_arm_compass.forEach((mesh) => {
                if (mesh.material) {
                    mesh.material.alpha = 1;
                }
            });

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