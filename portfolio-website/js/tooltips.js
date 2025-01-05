import * as BABYLON from '@babylonjs/core';
import * as GUI from '@babylonjs/gui';
import '@babylonjs/gui-editor';
import {AdvancedDynamicTexture} from '@babylonjs/gui';

let activeTooltip = null;
export function displayTooltip(scene, src, object_position) {

    if (activeTooltip) return;

    const tooltipPlane = BABYLON.MeshBuilder.CreatePlane("tooltip_plane", {width: 0.4, height: 0.4/3}, scene);
    tooltipPlane.position = object_position;

    const tooltipTexture = new BABYLON.DynamicTexture("tooltip_texture", {width: 0.4, height: 0.4/3}, scene);

    const ctx = tooltipTexture.getContext();
    const image = new Image();
    image.src = `../images-objects/tooltip/${src}`;
    image.onload = () => {
        ctx.drawImage(image, 0, 0, 1, 1);
        tooltipTexture.update();
    };


    const tooltip_material = new BABYLON.StandardMaterial("tooltip_material", scene);
    tooltip_material.diffuseTexture = tooltipTexture;
    tooltip_material.backFaceCulling = false;
    tooltipPlane.material = tooltip_material;

    tooltipPlane.billboardMode = BABYLON.Mesh.BILLBOARDMODE_ALL;
    activeTooltip = tooltipPlane;
}

export function removeTooltip() {
    activeTooltip.dispose();
}


// export function displayTooltip(scene, mesh, imagePath) {
//     console.log("test");
//     const tooltipTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("tooltip");
//     const tooltipImage = new BABYLON.GUI.Image("tooltipImage", imagePath);
//     tooltipImage.isVisible = false;
//
//     tooltipTexture.addControl(tooltipImage);
//     mesh.actionManager = new BABYLON.ActionManager(scene);
//     mesh.actionManager.registerAction(
//         new BABYLON.ExecuteCodeAction(
//             BABYLON.ActionManager.OnPointerOverTrigger,
//             () => {
//                 tooltipImage.isVisible = true;
//             }
//         )
//     );
//
//     mesh.actionManager.registerAction(
//         new BABYLON.ExecuteCodeAction(
//             BABYLON.ActionManager.OnPointerOutTrigger,
//             () => {
//                 tooltipImage.isVisible = false;
//             }
//         )
//     );
// }