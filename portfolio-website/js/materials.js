import * as BABYLON from "@babylonjs/core";
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


export function light_sources(scene, meshes) {
    let lightSources = 0;

    meshes.forEach((mesh) => {
        if (mesh.name === 'bulb') {

            // const boundingInfo = mesh.getBoundingInfo();
            // const boundingBox = boundingInfo.boundingBox;
            // const size = boundingBox.maximum.subtract(boundingBox.minimum);
            // const longestAxis = Math.max(size.x, size.y, size.z);
            //
            // let direction;
            // if (longestAxis === size.x) {
            //     direction = new BABYLON.Vector3(1, 0, 0);
            // } else if (longestAxis === size.y) {
            //     direction = new BABYLON.Vector3(0, 1, 0);
            // } else {
            //     direction = new BABYLON.Vector3(0, 0, 1);
            // }
            //
            // direction = BABYLON.Vector3.TransformNormal(direction, mesh.getWorldMatrix());
            // direction.normalize();

            lightSources++;
            const light = new BABYLON.PointLight(`light_${lightSources}`, mesh.getAbsolutePosition(), scene);
            light.intensity = 0.1;
            light.diffuse = new BABYLON.Color3(253, 178, 66);

        }

    })
}
