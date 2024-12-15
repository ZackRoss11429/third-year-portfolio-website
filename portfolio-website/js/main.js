import * as BABYLON from '@babylonjs/core';
import '@babylonjs/loaders/GLTF';
import {Inspector} from '@babylonjs/inspector';
import {ActionManager, ExecuteCodeAction} from "@babylonjs/core";

import {import_furniture} from "./furniture.js";
import {import_books} from "./books.js";
import {import_desk_items} from "./desk_items.js";
import {import_room} from "./room.js";
import {import_default_properties, import_materialProperties} from "./materials.js";


const canvas = document.getElementById('renderCanvas');
const engine = new BABYLON.Engine(canvas);

const createScene = function() {
    const scene = new BABYLON.Scene(engine);

    scene.createDefaultCamera(true, false, true);

    const sun = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0), scene);

//     var camera = new BABYLON.UniversalCamera("Camera", new BABYLON.Vector3(-0.8, 1.7, 1.34), scene);
//     camera.attachControl(canvas, true);
//
// // Lock the mouse pointer for immersive controls
//     canvas.addEventListener("click", () => {
//         canvas.requestPointerLock = canvas.requestPointerLock || canvas.mozRequestPointerLock || canvas.webkitRequestPointerLock;
//         canvas.requestPointerLock();
//     });
//
// // Sensitivity for mouse look
//     camera.angularSensibility = 1000;
//
// // Movement flags and speed
//     let moveForward = false;
//     let moveBackward = false;
//     let moveLeft = false;
//     let moveRight = false;
//     const maxMoveSpeed = 0.25; // Maximum movement speed
//     let currentSpeed = new BABYLON.Vector3(0, 0, 0); // Current velocity
//     const acceleration = 0.02; // Rate of acceleration
//     const deceleration = 0.05; // Rate of deceleration
//
// // Fixed Y-level for the camera
//     const FIXED_Y = 1.7;
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
// // Mouse move event for smoother rotation control
//     let isMouseMoving = false;
//     canvas.addEventListener("mousemove", () => {
//         isMouseMoving = true;
//         clearTimeout(mouseStopTimeout); // Reset mouse stop timeout
//         mouseStopTimeout = setTimeout(() => (isMouseMoving = false), 100); // Detect when the mouse stops moving
//     });
//
//     let mouseStopTimeout;
//
// // Movement logic in the render loop
//     scene.onBeforeRenderObservable.add(() => {
//         // Get the forward and right vectors relative to the camera
//         const forward = new BABYLON.Vector3(
//             Math.sin(camera.rotation.y),
//             0,
//             Math.cos(camera.rotation.y)
//         );
//         const right = new BABYLON.Vector3(forward.z, 0, -forward.x);
//
//         // Calculate target velocity
//         let targetVelocity = new BABYLON.Vector3(0, 0, 0);
//         if (moveForward) targetVelocity.addInPlace(forward.scale(maxMoveSpeed));
//         if (moveBackward) targetVelocity.subtractInPlace(forward.scale(maxMoveSpeed));
//         if (moveLeft) targetVelocity.subtractInPlace(right.scale(maxMoveSpeed));
//         if (moveRight) targetVelocity.addInPlace(right.scale(maxMoveSpeed));
//
//         // Smooth acceleration and deceleration
//         currentSpeed = BABYLON.Vector3.Lerp(currentSpeed, targetVelocity, acceleration);
//
//         // Apply movement to the camera
//         camera.position.addInPlace(currentSpeed);
//         camera.position.y = FIXED_Y;
//
//         // Stop camera rotation if mouse isn't moving
//         if (!isMouseMoving) {
//             camera.inputs.attached.mouse.detachControl();
//         } else if (!camera.inputs.attached.mouse._pointerInput) {
//             camera.inputs.attached.mouse.attachControl(canvas);
//         }
//     });
//
// // Set the initial target to prevent zooming and panning
//     camera.setTarget(BABYLON.Vector3.Zero());
//     camera.lowerRadiusLimit = 0.1;
//     camera.upperRadiusLimit = 0.1;

    // constructor(scene: Scene) {
    //     scene.actionManager = new ActionManager(scene);
    //     this.inputMap = {};
    //     scene.actionManager.registerAction(new
    //     ExecuteCodeAction(ActionManager.OnKeyDownTrigger, (evt)=> {
    //         this.inputMap[evt.sourceEvent.key] =
    //             evt.sourceEvent.type == "keydown";
    //     }));
    //     scene.actionManager.registerAction(new
    //     ExecuteCodeAction(ActionManager.OnKeyUpTrigger, (evt) => {
    //         this.inputMap[evt.sourceEvent.key] =
    //             evt.sourceEvent.type == "keyup";
    //     }));
    //     scene.onBeforeRenderObservable.add(() => {
    //         this._updateFromKeyboard();
    //     });
    // }




    import_room(scene);

    import_desk_items(scene); // imports desk item models from desk_items.js

    import_furniture(scene); // imports furniture models from furniture.js

    import_books(scene); // imports bookshelf models from books.js


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
            phone.position = new BABYLON.Vector3(0.2, 1, 0.85);
            phone.rotation = new BABYLON.Vector3(0, Math.PI/2, 0);
            phone.scaling = new BABYLON.Vector3(-0.5, 0.5, 0.5);
            phone.name = "phone";



        });

    var phone_view = new BABYLON.UniversalCamera("phone_view_camera", new BABYLON.Vector3(-1, 1.6, 1.15), scene);
    phone_view.alpha = -3.155;
    phone_view.beta = 1.4895;
    phone_view.radius = 1.4982;
    phone_view.rotation = new BABYLON.Vector3(Math.PI/6, Math.PI/2, 0);


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


    scene.onPointerDown = function castRay() {
        const hit = scene.pick(scene.pointerX, scene.pointerY);

        if(hit.pickedMesh && hit.pickedMesh.parent.parent.name == "phone") {
            console.log(hit.pickedMesh.parent.parent.name);
            scene.activeCamera = phone_view;


            // hit.pickedMesh.parent.parent.renderOutline = true;
            // hit.pickedMesh.parent.parent.outlineColor = BABYLON.Color3.Red();
            // hit.pickedMesh.parent.parent.outlineWidth = 0.1;
        }

    }


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