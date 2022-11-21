<template>
  <v-container
    fluid
    class="fill-height"
  >
    <canvas ref="layoutDisplay"/>
  </v-container>
</template>
<script lang="ts">
export default {
  name: 'LayoutPage',
};
</script>

<script setup lang="ts">
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Color,
  Mesh,
  BoxGeometry,
  CylinderGeometry,
  MeshBasicMaterial,
  MeshPhongMaterial,
  MeshLambertMaterial,
  AmbientLight,
  SpotLight,
  DirectionalLight,
  PlaneGeometry,
  TextureLoader,
  TOUCH,
  PCFSoftShadowMap,
  CameraHelper,
} from 'three';

import {MapControls} from 'three/examples/jsm/controls/OrbitControls';
import {ref, onMounted, watch, computed} from 'vue';

const layoutDisplay = ref<HTMLCanvasElement | null>(null);

const width = computed(() => window.innerWidth);
const height = computed(() => window.innerHeight);
const aspectRatio = computed(() => window.innerWidth / window.innerHeight);

watch(aspectRatio, updateRenderer);
watch(aspectRatio, updateCamera);

const scene = new Scene();
scene.background = new Color( 0xb0b0f0 );

let controls: MapControls;

let renderer: WebGLRenderer;
let camera: PerspectiveCamera;

camera = new PerspectiveCamera(
  60,
  aspectRatio.value,
  0.1,
  10000,
);

camera.position.set(0, 350, 350);

// trees

for ( let i = 0; i < 1000; i ++ ) {
  const ts = 20+30*Math.random();
  const geometry = new CylinderGeometry( 0, ts/3, ts, 3, 1 );
  const material = new MeshPhongMaterial( {color: new Color(0,0.25+Math.random()/2,0), flatShading: true} );
  const mesh = new Mesh( geometry, material );
  mesh.position.x = Math.random() * 1600 - 800;
  mesh.position.y = 0;
  mesh.position.z = Math.random() * 1200 - 600;
  mesh.rotation.y = Math.random();
  mesh.updateMatrix();
  mesh.matrixAutoUpdate = false;
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  scene.add( mesh );
}

// plan

const planImage = new TextureLoader().load('src/assets/Track_Plan.png');
const planGeometry = new PlaneGeometry( 1600, 1200 );
planGeometry.rotateX( - Math.PI / 2 );
const planMaterial = new MeshLambertMaterial( {map: planImage});
const surface = new Mesh(planGeometry, planMaterial);
surface.position.y = -15;
surface.receiveShadow = true;
scene.add(surface);

// lights

scene.add( new AmbientLight( 0xf0f0f0, 0.5) );
const light = new DirectionalLight( 0xffffff, 0.8 );
light.position.set( 3, 2, 1 );
light.castShadow = true;
const dd = 1000;
light.shadow.camera.near = -dd;
light.shadow.camera.far = dd;
const ds = 1000;
light.shadow.camera.left = -ds;
light.shadow.camera.right = ds;
light.shadow.camera.top = ds;
light.shadow.camera.bottom = -ds;
// light.shadow.bias = - 0.000222;
// light.shadow.bias = +0.00005;
const ss = 512;
light.shadow.mapSize.width = ss;
light.shadow.mapSize.height = ss;
scene.add( light );

// const helper = new CameraHelper( light.shadow.camera );
// scene.add( helper );

onMounted(() => {
  renderer = new WebGLRenderer({
    canvas: layoutDisplay.value as unknown as HTMLCanvasElement,
    antialias: true,
  });
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap;

  controls = new MapControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.07;
  controls.maxPolarAngle = Math.PI / 2;
  
  updateRenderer();
  updateCamera();

  animate();
});

function updateRenderer() {
  renderer.setSize(width.value, height.value)
  renderer.setPixelRatio(window.devicePixelRatio)
}

function updateCamera() {
  camera.aspect = aspectRatio.value
  camera.updateProjectionMatrix()
  //controls.update()
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  render();
}

function render() {
  renderer.render(scene, camera);
}

</script>
<style scoped></style>
