// Setup the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector("#canvas") });
renderer.setSize(window.innerWidth, window.innerHeight);

// Add a cube to the scene
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Add a directional light to the scene
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 0, 10);
scene.add(light);

// Position the camera
camera.position.z = 5;

// Function to handle scroll events
function onScroll() {
  const scrollTop = window.scrollY || window.pageYOffset;
  const windowHeight = window.innerHeight;

  // Calculate the rotation angle based on the scroll position
  const angle = (scrollTop / windowHeight) * Math.PI / 2;

  // Rotate the cube around the x-axis
  cube.rotation.x = angle;
}

// Attach the onScroll function to the window's scroll event
window.addEventListener('scroll', onScroll);

// Render the scene
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
