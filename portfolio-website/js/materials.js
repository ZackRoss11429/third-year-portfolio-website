import * as BABYLON from "@babylonjs/core";


// this function checks for when a material is supposed to replicate a 'glass texture', through all meshes of that model
// being called 'glass'. Transparent properties are added to the mesh's material to then be displayed properly
export function import_materialProperties(scene, meshes) {
    let glassMesh = null;

    scene.onBeforeRenderObservable.add(() => {
        if (!glassMesh) {
            glassMesh = meshes.find(mesh => mesh.name === "glass");
            glassMesh.material.transparencyMode = 2;
            glassMesh.material.useAlphaFromAlbedoTexture = true;
            console.log("found");
        }


        console.log(glassMesh.material.alpha);

    });



}

// This function is called to add default properties to materials such as transparency, or reflectivity etc.
export function import_default_properties(scene, meshes) {
    meshes.forEach((mesh) => {
        if (mesh.material) {
            mesh.material.useAlphaFromAlbedoTexture = true;
            mesh.material.transparencyMode = 2;
            if (mesh.material.name === "glass") {
                mesh.material.backFaceCulling = false;
            }
            console.log("done");
        }


    });
}


// This function is called when every lighting 3D model. Every lighting model has its light bulb meshes called 'bulb'.
// Once these bulb locations are found, a PointLight source is added to its position to simulate it being an actual
// light source automatically
export function light_sources(scene, meshes) {
    let lightSources = 0;

    meshes.forEach((mesh) => {
        if (mesh.name === 'bulb') {
            lightSources++;
            const light = new BABYLON.PointLight(`light_${lightSources}`, mesh.getAbsolutePosition(), scene);
            light.intensity = 3;
            light.diffuse = new BABYLON.Color3(253/255, 178/255, 66/255);

        }

    })
}
