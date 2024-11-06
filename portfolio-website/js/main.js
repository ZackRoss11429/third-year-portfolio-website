import * as BABYLON from '@babylonjs/core';
import '@babylonjs/loaders/GLTF';
import {Inspector} from '@babylonjs/inspector';

const canvas = document.getElementById('renderCanvas');
const engine = new BABYLON.Engine(canvas);

const createScene = function() {
    const scene = new BABYLON.Scene(engine);

    scene.createDefaultCameraOrLight(true, false, true);

    var camera = new BABYLON.UniversalCamera("Camera", new BABYLON.Vector3(-0.8, 1.7, 1.34), scene);
    camera.attachControl(canvas, true);
//     canvas.addEventListener("click", () => {
//         canvas.requestPointerLock = canvas.requestPointerLock || canvas.mozRequestPointerLock || canvas.webkitRequestPointerLock;
//         canvas.requestPointerLock();
//     });
//     camera.angularSensibility = 1000;
//
//     let moveForward = false;
//     let moveBackward = false;
//     let moveLeft = false;
//     let moveRight = false;
//     const moveSpeed = 0.25;
//
// // Keydown and Keyup listeners for WASD
//     window.addEventListener("keydown", (event) => {
//         switch (event.key) {
//             case "w": case "W": moveForward = true; break;
//             case "s": case "S": moveBackward = true; break;
//             case "a": case "A": moveLeft = true; break;
//             case "d": case "D": moveRight = true; break;
//         }
//     });
//
//     window.addEventListener("keyup", (event) => {
//         switch (event.key) {
//             case "w": case "W": moveForward = false; break;
//             case "s": case "S": moveBackward = false; break;
//             case "a": case "A": moveLeft = false; break;
//             case "d": case "D": moveRight = false; break;
//         }
//     });
//
// // Movement in render loop
//     scene.onBeforeRenderObservable.add(() => {
//         const forward = camera.getForwardRay().direction.scale(moveSpeed);
//         const right = BABYLON.Vector3.Cross(forward, BABYLON.Axis.Y).scale(moveSpeed);
//
//         if (moveForward) camera.position.addInPlace(forward);
//         if (moveBackward) camera.position.subtractInPlace(forward);
//         if (moveLeft) camera.position.subtractInPlace(right);
//         if (moveRight) camera.position.addInPlace(right);
//     });


    // camera.setTarget(BABYLON.Vector3.Zero());
    // camera.lowerRadiusLimit= 0.1;
    // camera.upperRadiusLimit = 0.1;





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
            study.name = "study";
            study.forEach((mesh) => {
                if (mesh.material) {
                    mesh.material.alpha = 1;
                }
            });

        });

    BABYLON.SceneLoader.ImportMesh(
        '',
        '/images-objects/',
        'study_window.gltf',
        scene,
        function (meshes) {

            const study_window = meshes[0];
            study_window.position = new BABYLON.Vector3(-3.147, 0, -0.015);
            study_window.rotation = new BABYLON.Vector3(0, Math.PI/2, 0);
            study_window.scaling = new BABYLON.Vector3(-4, 4, 4);
            study_window.name = "study_window";


            study_window.alpha = 0.3;
            study_window.transparencyMode = BABYLON.PBRMaterial.MATERIAL_ALPHABLEND;
            study_window.reflectivityColor = new BABYLON.Color3(0.2, 0.2, 0.2);

            const mesh = study_window.material.subMaterials;

        });

    // ############################################   DESK ITEMS    ############################################
    BABYLON.SceneLoader.ImportMesh(
        '',
        '/images-objects/',
        'antique_desk.gltf',
        scene,
        function (meshes) {

            const large_desk = meshes[0];
            large_desk.position = new BABYLON.Vector3(0, 0, 3);
            large_desk.name = "main_desk";

            large_desk.forEach((mesh) => {
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
            typewriter.name = "typewriter";
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
            desk_lamp.name = "desk_lamp";

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
            map_1.name = "map_1";

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
            scale_arm_compass.position = new BABYLON.Vector3(-0.66, 0.906, 3.54);
            scale_arm_compass.rotation = new BABYLON.Vector3(Math.PI * 1.5, Math.PI * (5/3), 0);
            scale_arm_compass.scaling = new BABYLON.Vector3(-0.25, 0.25, 0.25);
            scale_arm_compass.name = "scale_arm_compass";

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
            compass.name = "compass";

            scale_arm_compass.forEach((mesh) => {
                if (mesh.material) {
                    mesh.material.alpha = 1;
                }
            });

        });

    BABYLON.SceneLoader.ImportMesh(
        '',
        '/images-objects/',
        'pencil_holder.gltf',
        scene,
        function (meshes) {

            const pencil_holder = meshes[0];
            pencil_holder.position = new BABYLON.Vector3(-1.1, 0.975, 3.85);
            pencil_holder.rotation = new BABYLON.Vector3(0, Math.PI * (7/10), 0);
            pencil_holder.scaling = new BABYLON.Vector3(-0.4, 0.4, 0.4);
            pencil_holder.name = "pencil_holder";

            pencil_holder.forEach((mesh) => {
                if (mesh.material) {
                    mesh.material.alpha = 1;
                }
            });

        });

    BABYLON.SceneLoader.ImportMesh(
        '',
        '/images-objects/',
        'blue_mug.gltf',
        scene,
        function (meshes) {

            const mug = meshes[0];
            mug.position = new BABYLON.Vector3(-0.1, 0.975, 3.75);
            mug.rotation = new BABYLON.Vector3(0, Math.PI * (5/3), 0);
            mug.scaling = new BABYLON.Vector3(-0.4, 0.4, 0.4);
            mug.name = "mug";

            mug.forEach((mesh) => {
                if (mesh.material) {
                    mesh.material.alpha = 1;
                }
            });

        });

    BABYLON.SceneLoader.ImportMesh(
        '',
        '/images-objects/',
        'magnifying_glass.gltf',
        scene,
        function (meshes) {

            const magnifying_glass = meshes[0];
            magnifying_glass.position = new BABYLON.Vector3(0, 0.975, 3);
            magnifying_glass.rotation = new BABYLON.Vector3(0, Math.PI * (1/9), 0);
            magnifying_glass.scaling = new BABYLON.Vector3(-0.5, 0.5, 0.5);
            magnifying_glass.name = "magnifying_glass";

        });


    // ############################################ ^  DESK ITEMS  ^  ############################################




    // ############################################   FURNITURE    ############################################
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
            large_bookshelf.name = "large_bookshelf";

            large_bookshelf.forEach((mesh) => {
                if (mesh.material) {
                    mesh.material.alpha = 1;
                }
            });
        });

    BABYLON.SceneLoader.ImportMesh(
        '',
        '/images-objects/',
        'single_drawer.gltf',
        scene,
        function (meshes) {

            const single_drawer = meshes[0];
            single_drawer.position = new BABYLON.Vector3(-2.334, 0, 0.685);
            single_drawer.rotation = new BABYLON.Vector3(0, Math.PI*1.5, 0);
            single_drawer.scaling = new BABYLON.Vector3(0.8, 0.8, 0.8);
            single_drawer.name = "single_drawer";

            single_drawer.forEach((mesh) => {
                if (mesh.material) {
                    mesh.material.alpha = 1;
                }
            });
        });

    BABYLON.SceneLoader.ImportMesh(
        '',
        '/images-objects/',
        'double_drawer.gltf',
        scene,
        function (meshes) {

            const double_drawer = meshes[0];
            double_drawer.position = new BABYLON.Vector3(0.04, 0, 1.5);
            double_drawer.rotation = new BABYLON.Vector3(0, Math.PI/2, 0);
            double_drawer.scaling = new BABYLON.Vector3(0.8, 0.8, 0.8);
            double_drawer.name = "double_drawer";

            double_drawer.forEach((mesh) => {
                if (mesh.material) {
                    mesh.material.alpha = 1;
                }
            });
        });


    // ############################################  ^  FURNITURE   ^  ############################################




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

            chessboard.forEach((mesh) => {
                if (mesh.material) {
                    mesh.material.alpha = 1;
                }
            });
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
            phone.position = new BABYLON.Vector3(0.2, 1, 0.85);
            phone.rotation = new BABYLON.Vector3(0, Math.PI/2, 0);
            phone.scaling = new BABYLON.Vector3(-0.5, 0.5, 0.5);
            phone.name = "phone";
        });


    BABYLON.SceneLoader.ImportMesh(
        '',
        '/images-objects/',
        'citizencaneposter_framed.gltf',
        scene,
        function (meshes) {

            const movie_poster1 = meshes[0];
            movie_poster1.position = new BABYLON.Vector3(-2.616, 1, 2.8);
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