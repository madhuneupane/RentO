<template>
  <div class="home">
    <div class="view-container" ref="threeDBox"></div>
    <div class="button-container">
      <!-- <button
        class="change-room-button"
        @click="changeRoom('lowq')"
        :class="{ 'current-room-button': currentRoom === 'lowq' }"
      >
        Low Quality
      </button>
      <button
        class="change-room-button"
        @click="changeRoom('medq')"
        :class="{ 'current-room-button': currentRoom === 'medq' }"
        style="top: 60px"
      >
        Medium Quality
      </button> -->
      <button
        class="change-room-button"
        @click="changeRoom('kitchen')"
        :class="{ 'current-room-button': currentRoom === 'kitchen' }"
        style="top: 110px"
      >
        Kitchen
      </button>
      <button
        class="change-room-button"
        @click="changeRoom('living')"
        :class="{ 'current-room-button': currentRoom === 'living' }"
        style="top: 160px"
      >
        Living Room
      </button>
    </div>
  </div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
export default {
  name: "Home",
  data() {
    return {
      scene: null,
      camera: null,
      controls: null,
      renderer: null,
      axisHelper: null,
      box: null,
      timer: {},
      picList: ["right", "left", "top", "bottom", "front", "back"],
      currentRoom: "kitchen",
    };
  },
  methods: {
    initScene() {
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0x101010);
    },
    initCamera(element) {
      this.camera = new THREE.PerspectiveCamera(
        45,
        element.clientWidth / element.clientHeight,
        0.1,
        1000
      );
      this.camera.position.set(50, 0, 40);
    },
    initControls(element) {
      this.controls = new OrbitControls(this.camera, element);
      this.controls.minDistance = 1;
      this.controls.maxDistance = 100;
      this.controls.enablePan = false;
    },
    initRenderer(element) {
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(element.offsetWidth, element.offsetHeight);
      element.appendChild(this.renderer.domElement);
    },
    initContent() {
      let boxGeometry = new THREE.BoxGeometry(10, 10, 10);
      let boxMaterials = [];
      this.picList.forEach((item) => {
        let texture = new THREE.TextureLoader().load(
          require(`@/assets/image/${this.currentRoom}/${item}.png`)
        );
        boxMaterials.push(new THREE.MeshBasicMaterial({ map: texture }));
      });
      this.box = new THREE.Mesh(boxGeometry, boxMaterials);
      this.box.geometry.scale(10, 10, -10);
      this.scene.add(this.box);
    },
    render() {
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
      this.timer = requestAnimationFrame(this.render);
    },
    onResize() {
      let element = this.$refs.threeDBox;
      this.camera.aspect = element.clientWidth / element.clientHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(element.clientWidth, element.clientHeight);
    },
    changeRoom(roomName) {
      // Toggle between room1 and room2
      this.currentRoom = roomName;
      console.log("Current" + roomName);
      this.initContent(); // Reload room content
    },
  },
  mounted() {
    let element = this.$refs.threeDBox;
    this.initScene();
    this.initCamera(element);
    this.initControls(element);
    this.initContent();
    this.initRenderer(element);
    this.render();
    window.addEventListener("resize", this.onResize, false);
  },
  destroyed() {
    cancelAnimationFrame(this.timer);
  },
};
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .view-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .change-room-button {
    width: 120px;
    font-size: 1rem;
    padding: 12px;
    background-color: #3b6665;
    color: #fff;
    border: 0.5px solid grey;
    cursor: pointer;
    border-radius: 20px;
  }
  .current-room-button {
    background-color: #f6d6cf;
    color: purple;
  }
  .button-container {
    position: absolute;
    bottom: 10%;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
}
</style>
