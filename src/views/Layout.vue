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
} from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {ref, onMounted, watch, computed} from 'vue';

const layoutDisplay = ref<HTMLCanvasElement | null>(null);

const width = computed(() => window.innerWidth);
const height = computed(() => window.innerHeight);
const aspectRatio = computed(() => window.innerWidth / window.innerHeight);

watch(aspectRatio, updateRenderer);
watch(aspectRatio, updateCamera);

const scene = new Scene();
scene.background = new Color( 0xb0b0f0 );

let controls: OrbitControls;

let renderer: WebGLRenderer;
let camera: PerspectiveCamera;

camera = new PerspectiveCamera(
  60,
  aspectRatio.value,
  0.1,
  2000,
);

camera.position.set(0, 350, 350);

// trees

const geometry = new CylinderGeometry( 0, 10, 30, 4, 1 );
const material = new MeshPhongMaterial( { color: 0x00ff00, flatShading: true } );

for ( let i = 0; i < 1000; i ++ ) {
  const mesh = new Mesh( geometry, material );
  mesh.position.x = Math.random() * 1600 - 800;
  mesh.position.y = 0;
  mesh.position.z = Math.random() * 1200 - 600;
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

scene.add( new AmbientLight( 0xf0f0f0, 0.6) );
const light = new SpotLight( 0xffffff, 0.4 );
light.position.set( 2000, 1000, 500 );
light.angle = Math.PI * 0.2;
light.castShadow = true;
light.shadow.camera.near = 0.5;
light.shadow.camera.far = 5000;
//light.shadow.bias = - 0.000222;
light.shadow.bias = +0.00005;
light.shadow.mapSize.width = 2048;
light.shadow.mapSize.height = 2048;
scene.add( light );

onMounted(() => {
  renderer = new WebGLRenderer({
    canvas: layoutDisplay.value as unknown as HTMLCanvasElement,
    antialias: true,
  });
  renderer.shadowMap.enabled = true;

  controls = new OrbitControls(camera,renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.1;
  controls.screenSpacePanning = false;
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
