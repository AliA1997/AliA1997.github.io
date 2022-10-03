import * as THREE from "three";
import { OrbitControls } from "https://unpkg.com/three@0.145.0/examples/jsm/controls/OrbitControls.js";
console.log("SCRIPT:", THREE);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
renderer.render(scene, camera);

const torusGeometry1 = new THREE.TorusGeometry(10, 1, 16, 100);
const torusGeometry2 = new THREE.TorusGeometry(12, 1, 16, 100);
const torusGeometry3 = new THREE.TorusGeometry(14, 1, 16, 100);
const material1 = new THREE.MeshBasicMaterial({ color: 0x408194 });
const material2 = new THREE.MeshBasicMaterial({ color: 0xff6347 });
const material3 = new THREE.MeshBasicMaterial({ color: 0xff3333  });
const torus1 = new THREE.Mesh(torusGeometry1, material1);
const torus2 = new THREE.Mesh(torusGeometry2, material2);
const torus3 = new THREE.Mesh(torusGeometry3, material3);

scene.add(torus1);
scene.add(torus2);
scene.add(torus3);
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(20, 20, 20);
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const images = ["bitcoin.jpg", "ethereum-classic.png", "litecoin.jpg"];
  const randonMaterialIndex = Math.round(Math.random() * 2);
  const randomTexture = new THREE.TextureLoader().load(
    images[randonMaterialIndex]
  );
  const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    map: randomTexture,
  });

  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}
Array(200).fill().forEach(addStar);

const spaceTexture = new THREE.TextureLoader().load("space.jpg");
console.log("spaceTexture:", spaceTexture);
scene.background = spaceTexture;
const jsTexture = new THREE.TextureLoader().load("js-2022.png");
const jsGlobe = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: jsTexture,
  })
);
scene.add(jsGlobe);
// jsGlobe.position.z = 30;
// jsGlobe.position.setX(-10);
function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  jsGlobe.rotation.x += 0.05;
  jsGlobe.rotation.y += 0.075;
  jsGlobe.rotation.z += 0.05;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.position.y = t * -0.0002;
}
function animate() {
  requestAnimationFrame(animate);
  torus1.rotation.x += 0.01;
  torus1.rotation.y += 0.005;
  torus1.rotation.z += 0.01;
  torus2.rotation.x -= 0.01;
  torus2.rotation.y -= 0.05;
  torus2.rotation.z -= 0.01;
  controls.update();
  renderer.render(scene, camera);
}

animate();
