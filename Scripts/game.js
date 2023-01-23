/// <reference path="../node_modules/babylonjs/babylon.module.d.ts" />
/// <reference path="../node_modules/babylonjs-loaders/babylonjs.loaders.module.d.ts" />
/// <reference path="../node_modules/babylonjs-materials/babylonjs.materials.module.d.ts" />
/// <reference path="../node_modules/babylonjs-gui/babylon.gui.module.d.ts" />

//-------------------- YOUR CODE GOES HERE ------------------------------

function  CreateScene(engine:BABYLON.NativeEngine) : BABYLON.Scene {
    // This creates a basic Babylon Scene object (non-mesh)
    var scene = new BABYLON.Scene(engine);

    // This creates and positions a free camera (non-mesh)
    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);

    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    // This attaches the camera to the canvas
    //camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

    // Our built-in 'sphere' shape. Params: name, options, scene
    var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 2, segments: 32}, scene);

    // Move the sphere upward 1/2 its height
    sphere.position.y = 1;

    // Our built-in 'ground' shape. Params: name, options, scene
    var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 6, height: 6}, scene);

    return scene;
}

var engine = new BABYLON.NativeEngine();
var scene = CreateScene(engine);

engine.runRenderLoop(function () {
    scene.render();
});
