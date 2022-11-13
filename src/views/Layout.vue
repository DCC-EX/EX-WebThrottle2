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
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
} from 'three';
import {ref, onMounted} from 'vue';

const layoutDisplay = ref<HTMLCanvasElement | null>(null);

const scene = new Scene();
const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshBasicMaterial({color: 0x00ff00});
const cube = new Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;


onMounted(() => {
  const renderer = new WebGLRenderer({
    canvas: layoutDisplay.value as unknown as HTMLCanvasElement,
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);

  function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  }


  animate();
});
</script>
<style scoped></style>
