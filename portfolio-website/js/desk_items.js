import * as BABYLON from "@babylonjs/core";

export function import_desk_items(scene) {
    BABYLON.SceneLoader.ImportMesh(
        '',
        '/images-objects/',
        'antique_desk.gltf',
        scene,
        function (meshes) {

            const large_desk = meshes[0];
            large_desk.position = new BABYLON.Vector3(0, 0, 3);
            large_desk.name = "main_desk";


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

        });
    const desk_lamp_light = new BABYLON.SpotLight(
        'spotLight',
        new BABYLON.Vector3(-1.163, 1.468, 3.548),
        new BABYLON.Vector3(68, -112.5, -45), Math.PI, 1, scene);
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

    BABYLON.SceneLoader.ImportMesh(
        '',
        '/images-objects/',
        'old_journal.gltf',
        scene,
        function (meshes) {

            const old_journal1 = meshes[0];
            old_journal1.position = new BABYLON.Vector3(-1.18, 0.975, 3);
            old_journal1.rotation = new BABYLON.Vector3(0, Math.PI * (47/24), 0);
            old_journal1.scaling = new BABYLON.Vector3(-0.6, 0.6, 0.6);
            old_journal1.name = "old_journal1";

        });
    BABYLON.SceneLoader.ImportMesh(
        '',
        '/images-objects/',
        'old_journal.gltf',
        scene,
        function (meshes) {

            const old_journal2 = meshes[0];
            old_journal2.position = new BABYLON.Vector3(-1.1, 1.07, 3.15);
            old_journal2.rotation = new BABYLON.Vector3(0, Math.PI * (43/24), 0);
            old_journal2.scaling = new BABYLON.Vector3(-0.6, 0.6, 0.6);
            old_journal2.name = "old_journal2";

        });
}