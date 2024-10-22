let scene, camera, renderer, rain, rainCount = 10000;

function initRain() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 1;
    camera.rotation.x = Math.PI / 2;

    renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('rainCanvas'), alpha: true });
    renderer.setSize(window.innerWidth * 1, window.innerHeight * 1);

    const rainGeometry = new THREE.BufferGeometry();
    const rainPositions = [];

    for (let i = 0; i < rainCount; i++) {
        const x = Math.random() * 400 - 200;
        const y = Math.random() * 500 - 250;
        const z = Math.random() * 400 - 200;
        rainPositions.push(x, y, z);
    }

    rainGeometry.setAttribute('position', new THREE.Float32BufferAttribute(rainPositions, 3));

    const rainMaterial = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 0.1,
        transparent: true
    });

    rain = new THREE.Points(rainGeometry, rainMaterial);
    scene.add(rain);

    window.addEventListener('resize', onWindowResize, false);
    animateRain();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animateRain() {
    rain.rotation.y += 0.002;

    const positions = rain.geometry.attributes.position.array;
    for (let i = 1; i < positions.length; i += 3) {
        positions[i] -= 0.5;
        if (positions[i] < -250) {
            positions[i] = 250;
        }
    }
    rain.geometry.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);
    requestAnimationFrame(animateRain);
}

initRain();