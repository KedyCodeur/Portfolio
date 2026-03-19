import { useEffect, useRef } from 'react';
import './HomePage.css'
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

function HomePage(){

    //MOON
    

    const moonRef = useRef(null);
    const group = new THREE.Group()
    
    useEffect(()=>{



        let width = moonRef.current.clientWidth;
        let height = moonRef.current.clientHeight;

        const moonScene = new THREE.Scene();
        moonScene.add(group);

        let camera = new THREE.PerspectiveCamera(90,width/height,0.1,99999999);
        camera.position.z = 220;
       
       
        const renderer = new THREE.WebGLRenderer({
            canvas:moonRef.current,
            antialias:true,
            alpha:true
        });

        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio);
        
        const light = new THREE.AmbientLight(0xffffff, 1); 
        moonScene.add(light);

        renderer.outputColorSpace = THREE.SRGBColorSpace; 
        renderer.toneMapping = THREE.ACESFilmicToneMapping; 
        renderer.toneMappingExposure = 1.7; 

        const loader = new GLTFLoader();
        let moon;
        loader.load(
            '/models/moon.glb',
            (gltf)=>{
                
                moon = gltf.scene
                moon.rotation.y = 45 * (Math.PI / 180); 
                moon.traverse((child) => {
                    if (child.isMesh) {
                        child.material.wireframe = true; 
                        child.material.emissive = new THREE.Color("white"); 
                        child.material.emissiveIntensity = 0.005; 
                    }
                });
                
                moonScene.add(moon)
                }

        )   
        
    
        const clock = new THREE.Clock(); 

        const catLoader = new GLTFLoader();
        let mixer;
        let cat
        catLoader.load(
                '/models/cat.glb',
                (gltf) => {
                    cat = gltf.scene;
                    cat.position.z = 120;
                    cat.position.y = -60;
                    cat.traverse(child =>{
                            if (child.isMesh && child.material) {  
                                child.material.wireframe = true;
                                child.material.color.set("black")
                            }
                    })
                    group.add(cat)
                 
                    if (gltf.animations && gltf.animations.length) {
                        mixer = new THREE.AnimationMixer(cat); 
                        

                        const action = mixer.clipAction(gltf.animations[0]); 
                        action.play();
                    }
                }
            );

        

        
        const starLoader = new GLTFLoader()
        let star
        starLoader.load(
                '/models/star.glb',
                (gltf) => {
                    star = gltf.scene;
                    star.position.z = 110;
                    star.position.y = -60;
                    star.position.x = 70;
                    star.scale.set(10, 10, 10);
                    star.traverse(child => {
                        if (child.isMesh) {
                          
                            child.material = new THREE.MeshBasicMaterial({
                                color: "gold",
                                wireframe: true,
                                emissive:"gold",
                                emissiveIntensity:2
    
                            });
                        }
                    });
                    group.add(star)

                }
            );

        
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.autoRotate = true;       
        controls.autoRotateSpeed = 1.2; 
        controls.enableRotate = false;
        controls.enableZoom = false;
        controls.enablePan = false;
        
        let loopID
        function loop() {
            loopID = window.requestAnimationFrame(loop);
                
             
            const delta = clock.getDelta();
            if (mixer) {
                mixer.update(delta);
            }
            group.rotation.y += 0.005;

            controls.update();
            renderer.render(moonScene, camera);
            }
        
        loop();
        
        function resize(){
            const width = moonRef.current.clientWidth;
            const height = moonRef.current.clientHeight;
            renderer.setSize(width, height,false);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            
        }
        
        window.addEventListener("resize",resize);


        return (() => {
                    window.removeEventListener("resize", resize);
                    cancelAnimationFrame(loopID);
                    
                    moonScene.traverse(child => {
                        if (child.geometry) child.geometry.dispose();
                        if (child.material) {
                            if (Array.isArray(child.material)) {
                                child.material.forEach(m => m.dispose());
                            } else {
                                child.material.dispose();
                            }
                        }
                    });
                    renderer.dispose();
                });
    },[])



    return(
       
        <div className="HomePage Page" >
           
            <div className='homePageleft'>
                <canvas className='moon' ref={moonRef}></canvas>
            </div>
            <div className='explication'>
                <p><span>Hi, I'm Cem. </span>
                    Fullstack developer & CS student at SUPINFO Paris. <br/>
                    I build web applications and Python programs. <br />
                </p>
                <div className='explicationButtons'>
                    <a href="#">About Me</a>
                    <a href="#">Contact</a>
                </div>
                <div className="heroSocial">
                    <img src="/photos/linkedin.png" alt="Linkedin icon" />
                    <img src="/photos/github.png" alt="Github icon" />
                    <img src="/photos/cv.png" alt="Cv icon" />
                </div>
            </div>
        </div>  
    );

}

export default HomePage