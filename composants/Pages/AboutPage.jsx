
import './AboutPage.css'
import {useRef,useEffect} from 'react'
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';


function AboutPage(){

    const behemothRef = useRef(null);
  
    
    useEffect(()=>{



        let width = behemothRef.current.clientWidth;
        let height = behemothRef.current.clientHeight;

        const blodyScene = new THREE.Scene();
  

        let camera = new THREE.PerspectiveCamera(90,width/height,0.1,1000);
        camera.position.x = 1.1639076365811594;
        camera.position.y = 0.7738479056136977;
        camera.position.z = 7.020992992580258;
       
       
       
       
        const renderer = new THREE.WebGLRenderer({
            canvas:behemothRef.current,
            antialias:true,
            alpha:true,
            powerPreference: "high-performance",
        });

        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio,1));
                
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.2); 
        blodyScene.add(ambientLight);

        const mainLight = new THREE.DirectionalLight("white", 2); 
        mainLight.position.set(5, 5, 5); 
        blodyScene.add(mainLight);


        const dracoLoader = new DRACOLoader();
        
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');

        const loader = new GLTFLoader();
        loader.setDRACOLoader(dracoLoader); 

        let behemoth;

        const optimizedMaterial = new THREE.MeshPhongMaterial({
            color: 0x1a1a1a, 
            specular: 0x555555,
            shininess: 30,
            side: THREE.DoubleSide
        });
        loader.load(
            '/models/behemoth_draco.glb',
            (gltf)=>{
                
                behemoth = gltf.scene
                
                behemoth.scale.set(15,15,15)
                behemoth.rotation.set(
                    THREE.MathUtils.degToRad(0), 
                    THREE.MathUtils.degToRad(70), 
                    0                            
                );
             

                const newMaterial = optimizedMaterial;
                behemoth.traverse((child) => {
                        if (child.isMesh) {
                        
                            child.material = newMaterial;
                            
                           

                        }
                    });
                    behemoth.position.y=-2;
                    behemoth.position.x=-0.5;
                blodyScene.add(behemoth)
                }

        )   
        

        
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDampinge = true;
        controls.dampingFactor= 0.05;
        
        let loopID
        function loop() {
          
            loopID = window.requestAnimationFrame(loop);

           controls.update();
            if (!behemothRef.current || !camera) return;
            renderer.render(blodyScene, camera);
            
            console.log(behemoth?.rotation)
            }
            
            
        loop();
        
        function resize(){
            const width = behemothRef.current.clientWidth;
            const height = behemothRef.current.clientHeight;
            renderer.setSize(width, height,false);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            
        }
        
        window.addEventListener("resize",resize);


        return (() => {
                    window.removeEventListener("resize", resize);
                    cancelAnimationFrame(loopID);
                    
                    blodyScene.traverse(child => {
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
       
        <div className="AboutPage" >
            <div className="behemothPlaceHolder">
                <canvas className="behemoth" ref={behemothRef}> </canvas>
            </div>

            <div className="text">
                <h2>About Me</h2>
                <p>I'm Cem — a full-stack developer and CS student at SUPINFO Paris, originally from Istanbul.
                I build complete applications from scratch. React interfaces, REST APIs, database architectures, real-time systems — I handle the full picture, not just one piece of it. Every project I ship is something I'm proud to put my name on.
                I move fast, I work independently, and I take the craft seriously. Whether it's a clean UI or a well-structured database, the details matter to me.
                19 years old. Currently studying, constantly building. Open to internship opportunities from May 2026.
                Let's make something worth remembering.</p>
            </div>
           

        </div>  
    );

}

export default AboutPage