import * as BABYLON from "@babylonjs/core";
import {import_default_properties, light_sources} from "./materials.js";

export let sound_position = null;
export function import_furniture(scene) {
    BABYLON.SceneLoader.ImportMesh(
        '',
        '/images-objects/',
        'record_player.gltf',
        scene,
        function (meshes) {

            meshes.forEach((mesh) => {
                if (mesh.name === "int_cube_rp_speaker") {
                    sound_position = mesh.getAbsolutePosition();
                }
            })

            const record_player = meshes[0];
            record_player.position = new BABYLON.Vector3(0.5, 1, 0.73);
            record_player.rotation = new BABYLON.Vector3(0, Math.PI/2, 0);
            record_player.scaling = new BABYLON.Vector3(-0.9, 0.9,0.9);
            record_player.name = "record_player";

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
            large_bookshelf.name = "large_bookshelf";


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

            meshes.forEach((mesh) => {
               if (mesh.name === 'glass') {
                   console.log("found glass");
                   mesh.material.isTranslucencyEnabled = true;
                   mesh.material.translucencyIntensity = 0.95;
                   // mesh.material.emissiveColor = new BABYLON.Color3(240/255, 192/255, 92/255);


               } else {
               }
            });

            import_default_properties(scene, meshes);
            light_sources(scene, meshes);

            const ceiling_light = meshes[0];
            ceiling_light.position = new BABYLON.Vector3(-1.345, 3, 2);
            ceiling_light.rotation = new BABYLON.Vector3(Math.PI, 0, 0);
            ceiling_light.scaling = new BABYLON.Vector3(2, 2, 2);
            ceiling_light.name = "ceiling_light";
        });

    BABYLON.SceneLoader.ImportMesh(
        '',
        '/images-objects/',
        'leather_chair_1.gltf',
        scene,
        function (meshes) {

            const leather_chair_1 = meshes[0];
            leather_chair_1.position = new BABYLON.Vector3(-0.04, 0, 2.56);
            leather_chair_1.rotation = new BABYLON.Vector3(0, (17/18)*Math.PI, 0);
            leather_chair_1.scaling = new BABYLON.Vector3(1.25, 1.25, 1.25);
            leather_chair_1.name = "leather_chair_1";

            // meshes.forEach((mesh) => {
            //     const leatherMaterial = new BABYLON.PBRMaterial("leatherMaterial", scene);
            //     leatherMaterial.albedoColor = BABYLON.Color3.FromHexString("#421c17");
            //
            //     leatherMaterial.roughness = 0.4;
            //     leatherMaterial.metallic = 0.0;
            //     leatherMaterial.clearCoat.isEnabled = true;
            //     leatherMaterial.clearCoat.intensity = 0.8;
            //     leatherMaterial.clearCoat.roughness = 0.3;
            //     mesh.material = leatherMaterial;
            //    //  if (mesh.parent.name !== "legs") {
            //    //
            //    // }
            // });

        });

}