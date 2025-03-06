import * as BABYLON from "@babylonjs/core";


// This function calls for the importing of all the book-related 3D models. They are then named, positioned, scaled and rotated
export function import_books(scene) {

    BABYLON.SceneLoader.ImportMesh(
        '',
        '/images-objects/',
        'stack_of_books_8.gltf',
        scene,
        function (meshes) {

            const stack_of_books_0_0 = meshes[0];
            stack_of_books_0_0.position = new BABYLON.Vector3(-1.66, 0.868, 4.54);
            stack_of_books_0_0.rotation = new BABYLON.Vector3(Math.PI * 1.5, Math.PI * 1.5, 0);
            stack_of_books_0_0.scaling = new BABYLON.Vector3(-0.6, 0.6, 0.6);
            stack_of_books_0_0.name = "stack_of_books_0_0";

        });


    BABYLON.SceneLoader.ImportMesh(
        '',
        '/images-objects/',
        'stack_of_books_8.gltf',
        scene,
        function (meshes) {

            const stack_of_books_1_0 = meshes[0];
            stack_of_books_1_0.position = new BABYLON.Vector3(-0.87, 0.868, 4.54);
            stack_of_books_1_0.rotation = new BABYLON.Vector3(Math.PI * 1.5, Math.PI * 1.5, 0);
            stack_of_books_1_0.scaling = new BABYLON.Vector3(-0.6, 0.6, 0.6);
            stack_of_books_1_0.name = "stack_of_books_1_0";

        });

    BABYLON.SceneLoader.ImportMesh(
        '',
        '/images-objects/',
        'stack_of_books_8.gltf',
        scene,
        function (meshes) {

            const stack_of_books_2_0 = meshes[0];
            stack_of_books_2_0.position = new BABYLON.Vector3(-0.095, 0.868, 4.54);
            stack_of_books_2_0.rotation = new BABYLON.Vector3(Math.PI * 1.5, Math.PI * 1.5, 0);
            stack_of_books_2_0.scaling = new BABYLON.Vector3(-0.6, 0.6, 0.6);
            stack_of_books_2_0.name = "stack_of_books_2_0";

        });



    BABYLON.SceneLoader.ImportMesh(
        '',
        '/images-objects/',
        'stack_of_books_8.gltf',
        scene,
        function (meshes) {

            const stack_of_books_0_1 = meshes[0];
            stack_of_books_0_1.position = new BABYLON.Vector3(-1.66, 1.368, 4.54);
            stack_of_books_0_1.rotation = new BABYLON.Vector3(Math.PI * 1.5, Math.PI * 1.5, 0);
            stack_of_books_0_1.scaling = new BABYLON.Vector3(-0.6, 0.6, 0.6);
            stack_of_books_0_1.name = "stack_of_books_0_1";

        });

    BABYLON.SceneLoader.ImportMesh(
        '',
        '/images-objects/',
        'stack_of_books_8.gltf',
        scene,
        function (meshes) {

            const stack_of_books_1_1 = meshes[0];
            stack_of_books_1_1.position = new BABYLON.Vector3(-0.87, 1.368, 4.54);
            stack_of_books_1_1.rotation = new BABYLON.Vector3(Math.PI * 1.5, Math.PI * 1.5, 0);
            stack_of_books_1_1.scaling = new BABYLON.Vector3(-0.6, 0.6, 0.6);
            stack_of_books_1_1.name = "stack_of_books_1_1";

        });

    BABYLON.SceneLoader.ImportMesh(
        '',
        '/images-objects/',
        'stack_of_books_8.gltf',
        scene,
        function (meshes) {

            const stack_of_books_2_1 = meshes[0];
            stack_of_books_2_1.position = new BABYLON.Vector3(-0.095, 1.368, 4.54);
            stack_of_books_2_1.rotation = new BABYLON.Vector3(Math.PI * 1.5, Math.PI * 1.5, 0);
            stack_of_books_2_1.scaling = new BABYLON.Vector3(-0.6, 0.6, 0.6);
            stack_of_books_2_1.name = "stack_of_books_2_1";

        });

    BABYLON.SceneLoader.ImportMesh(
        '',
        '/images-objects/',
        'stack_of_books_8.gltf',
        scene,
        function (meshes) {

            const stack_of_books_0_2 = meshes[0];
            stack_of_books_0_2.position = new BABYLON.Vector3(-1.66, 1.861, 4.54);
            stack_of_books_0_2.rotation = new BABYLON.Vector3(Math.PI * 1.5, Math.PI * 1.5, 0);
            stack_of_books_0_2.scaling = new BABYLON.Vector3(-0.6, 0.6, 0.6);
            stack_of_books_0_2.name = "stack_of_books_0_2";

        });

    BABYLON.SceneLoader.ImportMesh(
        '',
        '/images-objects/',
        'stack_of_books_8.gltf',
        scene,
        function (meshes) {

            const stack_of_books_1_2 = meshes[0];
            stack_of_books_1_2.position = new BABYLON.Vector3(-0.87, 1.861, 4.54);
            stack_of_books_1_2.rotation = new BABYLON.Vector3(Math.PI * 1.5, Math.PI * 1.5, 0);
            stack_of_books_1_2.scaling = new BABYLON.Vector3(-0.6, 0.6, 0.6);
            stack_of_books_1_2.name = "stack_of_books_1_2";

        });

    BABYLON.SceneLoader.ImportMesh(
        '',
        '/images-objects/',
        'stack_of_books_8.gltf',
        scene,
        function (meshes) {

            const stack_of_books_2_2 = meshes[0];
            stack_of_books_2_2.position = new BABYLON.Vector3(-0.095, 1.861, 4.54);
            stack_of_books_2_2.rotation = new BABYLON.Vector3(Math.PI * 1.5, Math.PI * 1.5, 0);
            stack_of_books_2_2.scaling = new BABYLON.Vector3(-0.6, 0.6, 0.6);
            stack_of_books_2_2.name = "stack_of_books_2_2";

        });
}