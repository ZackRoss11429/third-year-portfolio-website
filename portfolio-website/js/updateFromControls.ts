import {Mesh, Scene, TransformNode, UniversalCamera, Vector3} from "@babylonjs/core";
import {PlayerInput} from "./inputController";

export class Player extends TransformNode {
    public camera: UniversalCamera;
    public scene: Scene;
    private _input: PlayerInput;

    public mesh: Mesh;

    private _camRoot: TransformNode;
    private _yTilt: TransformNode;

    private static readonly PLAYER_SPEED: number = 0.45;
    private _deltaTime: number = 0;
    private _h: number;
    private _v: number;

    private _moveDirection: Vector3 = new Vector3();
    private _inputAmt: number;

    constructor(scene: Scene, input?: PlayerInput) {
        super("player", scene);
        this.scene = scene;
        this._setupPlayerCamera();

    }

    private _setupPlayerCamera() {

    }
}