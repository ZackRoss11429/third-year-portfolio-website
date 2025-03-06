import * as BABYLON from "@babylonjs/core";


// This function calls for the importing of all the furniture-prop-related 3D models. They are then named, positioned, scaled and rotated
export function import_props(scene) {
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
}