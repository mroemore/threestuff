window.onload = function(){
var WIDTH  = 400;
var HEIGHT = 300;

var VIEW_ANGLE = 45;
var ASPECT = WIDTH / HEIGHT;
var NEAR = 0.1;
var FAR = 10000;

var $container = $('#container');

var renderer = new THREE.WebGLRenderer(); //webgl rendererererer
var camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR); //scene
var scene = new THREE.Scene();

// add the camera to the scene
scene.add(camera);

// the camera starts at 0,0,0
// so pull it back
camera.position.z = 300;

// start the renderer
renderer.setSize(WIDTH, HEIGHT);

// attach the render-supplied DOM element
$container.append(renderer.domElement);

// set up the sphere vars
var radius = 50;
var segments = 16;
var rings = 16;

// create a new mesh with
// sphere geometry - we will cover
// the sphereMaterial next!
var sphere = new THREE.Mesh(

  new THREE.SphereGeometry(
    radius,
    segments,
    rings),

  sphereMaterial);

// add the sphere to the scene
scene.add(sphere);

var sphereMaterial =
  new THREE.MeshLambertMaterial(
    {
      color: 0xCC0000
    });

// create a point light
var pointLight = new THREE.PointLight(0x00FFFF);

// set its position
pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;

// add to the scene
scene.add(pointLight);

setInterval(renderer.render(scene, camera), 16);
}