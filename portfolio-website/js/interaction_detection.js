// import * as BABYLON from "@babylonjs/core";
//
// scene.onPointerDown = function castRay(scene, objectName) {
//     const hit = scene.pick(scene.pointerX, scene.pointerY);
//
//     if(hit.pickedMesh && hit.pickedMesh.parent.parent.name === objectName) {
//         console.log(hit.pickedMesh.parent.parent.name);
//         // scene.activeCamera = phone_view;
//         hit.pickedMesh.parent.parent.forEach((mesh) => {
//             mesh.enableEdgesRendering();
//             mesh.edgesWidth = 2.5;
//             mesh.edgesColor = new BABYLON.Color4(1, 1, 1)
//         })
//
//
//         // hit.pickedMesh.parent.parent.renderOutline = true;
//         // hit.pickedMesh.parent.parent.outlineColor = BABYLON.Color3.Red();
//         // hit.pickedMesh.parent.parent.outlineWidth = 0.1;
//     }
//
// }