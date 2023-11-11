<template>
  <div class="home">
    <div class="view-container" ref="threeDBox"></div>
    <button
      v-for="(value, room) in roomImages"
      :key="room"
      class="change-room-button"
      @click="changeRoom(room)"
      :class="{ 'current-room-button': currentRoom === room }"
    >
      {{ room }}
    </button>

    <!-- <button class="change-room-button" @click="changeToNextRoom">Change Room</button> -->
  </div>
</template>

<script>
import * as THREE from "three";
import axios from "axios";
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
      currentRoom: "",
      roomImages: {},
    };
  },
  methods: {
    fetchRoomImages() {
      const url =
        "http://3.232.202.158/api/fetchPropertyById/654e55cb0803e03f8993f980";
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `Network response was not ok: ${response.statusText}`
            );
          }
          //console.log(response.json())
          return response.json();
        })
        .then((data) => {
          this.roomImages = data.data.images;
          console.log("roomImages:", this.roomImages);

          const roomKeys = Object.keys(this.roomImages);
          console.log("Room Keys:", roomKeys);

          if (roomKeys.length > 0) {
            this.currentRoom = roomKeys[roomKeys.length - 1];
          }

          this.initContent();
        })
        .catch((error) => {
          console.error("Error fetching room images:", error);
        });
    },
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

      console.log(this.roomImages);
      if (this.roomImages[this.currentRoom]) {
        this.picList.forEach((item) => {
          let texture = new THREE.TextureLoader().load(
            this.roomImages[this.currentRoom][item]
          );
          boxMaterials.push(new THREE.MeshBasicMaterial({ map: texture }));
        });
      }

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
      // this.fetchRoomImages();
      const roomKeys = Object.keys(this.roomImages);
      if (roomKeys.length > 0) {
        const currentIndex = roomKeys.indexOf(this.currentRoom);
        const nextIndex = (currentIndex + 1) % roomKeys.length;
        this.currentRoom = roomKeys[nextIndex];
        this.initContent(); // Reload room content
      }
      // this.initContent(); // Reload room content
      // },
      // changeToNextRoom() {
      // const roomKeys = Object.keys(this.roomImages);
      // if (roomKeys.length > 0) {
      //   const currentIndex = roomKeys.indexOf(this.currentRoom);
      //   const nextIndex = (currentIndex + 1) % roomKeys.length;
      //   this.currentRoom = roomKeys[nextIndex];
      //   this.initContent(); // Reload room content
      // }
    },
  },
  mounted() {
    let element = this.$refs.threeDBox;
    this.fetchRoomImages();
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
    position: absolute;
    width: 120px;
    font-size: 0.9rem;
    top: 30px;
    left: 20px;
    padding: 10px;
    background-color: #007c38;
    color: #fff;
    border: none;
    cursor: pointer;
    border: 1px solid black;
  }
  .current-room-button {
    background-color: #15c08d;
  }
}
</style>
