import * as BABYLON from "@babylonjs/core";

export function import_furniture(scene) {
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

        });

    BABYLON.SceneLoader.ImportMesh(
        '',
        '/images-objects/',
        'ceiling_lights.gltf',
        scene,
        function (meshes) {

            const ceiling_light = meshes[0];
            ceiling_light.position = new BABYLON.Vector3(-1.345, 3, 2);
            ceiling_light.rotation = new BABYLON.Vector3(Math.PI, 0, 0);
            ceiling_light.scaling = new BABYLON.Vector3(2, 2, 2);
            ceiling_light.name = "ceiling_light";
        });
}