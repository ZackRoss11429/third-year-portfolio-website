import * as BABYLON from "@babylonjs/core";

export class Player {
    constructor(scene) {
        this.scene = scene;
        this.speed = 0.1;
        this.gravity = -0.01;

        this.camera = new BABYLON.UniversalCamera("playerCamera", new BABYLON.Vector3(0, 1.8, 0), scene);
        this.camera.attachControl(scene.getEngine().getRenderingCanvas(), true);

        this.camera.checkCollisions = true;
        this.camera.applyGravity = true;

        this.camera.ellipsoid = new BABYLON.Vector3(0.5, 1, 0.5);
        this.camera.ellipsoidOffset = new BABYLON.Vector3(0, 1, 0);

        scene.gravity = new BABYLON.Vector3(0, this.gravity, 0);
        scene.collisionsEnabled = true;
        this.camera.minZ = 0.45;

        this.initInput();
    }

    initInput() {
        const inputMap = {}; // Store key states
        const scene = this.scene;

        scene.onKeyboardObservable.add((kbInfo) => {
            const key = kbInfo.event.key.toLowerCase();

            if (kbInfo.type === BABYLON.KeyboardEventTypes.KEYDOWN) {
                inputMap[key] = true;

            } else if (kbInfo.type === BABYLON.KeyboardEventTypes.KEYUP) {
                inputMap[key] = false;
            }
        });

        scene.onBeforeRenderObservable.add(() => {
            let moveDirection = new BABYLON.Vector3(0, 0, 0);
            let forward = this.camera.getDirection(BABYLON.Axis.Z);
            let right = this.camera.getDirection(BABYLON.Axis.X);

            if (inputMap["w"] || inputMap["arrowup"]) moveDirection.addInPlace(forward);
            if (inputMap["s"] || inputMap["arrowdown"]) moveDirection.subtractInPlace(forward);
            if (inputMap["d"] || inputMap["arrowright"]) moveDirection.addInPlace(right);
            if (inputMap["a"] || inputMap["arrowleft"]) moveDirection.subtractInPlace(right);

            moveDirection.y = 0; // Prevent flying
            moveDirection.normalize().scaleInPlace(this.speed);

            this.camera.moveWithCollisions(moveDirection);
        });

    }

}