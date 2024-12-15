import * as BABYLON from "@babylonjs/core";
import {import_default_properties, import_materialProperties} from "./materials.js";

export function import_room(scene) {
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


        });

    BABYLON.SceneLoader.ImportMesh(
        '',
        '/images-objects/',
        'study_window.gltf',
        scene,
        function (meshes) {

            import_default_properties(scene, meshes);

            const study_window = meshes[0];
            study_window.position = new BABYLON.Vector3(-3.147, 0, -0.015);
            study_window.rotation = new BABYLON.Vector3(0, Math.PI/2, 0);
            study_window.scaling = new BABYLON.Vector3(-4, 4, 4);
            study_window.name = "study_window";
            console.log(meshes);

            // import_materialProperties(scene, meshes);





        });
}