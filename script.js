const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, 600/400, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({canvas: document.getElementById('carCanvas'), alpha: true});
renderer.setSize(600,400);
camera.position.set(0, 2, 8);

const ambient = new THREE.AmbientLight(0x888888);
const spot = new THREE.SpotLight(0x7fff7f, 1);
spot.position.set(5,10,5);
scene.add(ambient, spot);

const bodyGeo = new THREE.BoxGeometry(3,1,1.5);
const bodyMat = new THREE.MeshPhongMaterial({ color: 0x556644, shininess: 30 });
const body = new THREE.Mesh(bodyGeo, bodyMat);

const wheels = new THREE.Group();
const wheelGeo = new THREE.TorusGeometry(0.5, 0.2, 16, 100);
const wheelMat = new THREE.MeshPhongMaterial({ color: 0x99aa77, emissive: 0x224422 });
const pos = [[-1.2,-0.6,0.9], [1.2,-0.6,0.9], [-1.2,-0.6,-0.9], [1.2,-0.6,-0.9]];
pos.forEach(p => {
  const w = new THREE.Mesh(wheelGeo, wheelMat);
  w.position.set(...p);
  w.rotation.x = Math.PI / 2;
  w.rotation.z = Math.PI / 4;
  wheels.add(w);
});
body.add(wheels);
scene.add(body);

function animate(){
  requestAnimationFrame(animate);
  wheels.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
