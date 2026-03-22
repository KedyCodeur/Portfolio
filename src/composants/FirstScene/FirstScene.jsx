import './FirstScene.css';
import * as THREE from 'three';
import { useRef, useEffect, useState} from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


function FirstScene({setSceneDisplay}) {
    const canvasRef = useRef(null);
    const cameraMoveStart = useRef(false)
    const [isFinished,setIsFinished] = useState(false)
    const flagSceneRemove = useRef(false)
    
    useEffect(() => {


       
        if (!canvasRef.current) return;

        const loader = new GLTFLoader();

        const scene = new THREE.Scene();
        
        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            alpha: true,
            antialias: true
        });
        
        
        renderer.outputColorSpace = THREE.SRGBColorSpace; 
        renderer.toneMapping = THREE.ACESFilmicToneMapping; 
        renderer.toneMappingExposure = 1.2; 
        
        const width = canvasRef.current.clientWidth;
        const height = canvasRef.current.clientHeight;

        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
        
        let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        camera.position.z=1.4;
        
        camera.position.x=-0.16;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();        
       
        let mixer;
        let action

        loader.load(
            '/models/honor.glb', 

            (gltf) => {
                const model = gltf.scene;
                scene.add(model); 
    

                
                if (gltf.animations && gltf.animations.length) {
                    mixer = new THREE.AnimationMixer(model); 
                    action = mixer.clipAction(gltf.animations[0]);
                    
                    action.setLoop(THREE.LoopOnce); 
                    action.clampWhenFinished = true; 
                    action.time= 14 ; 
                    
                    action.play();
                    mixer.addEventListener('finished', () => {
                                setIsFinished(true)
                            });
                }
            },
            undefined,
            (err) => console.error("Erreur Survenu: ", err) 
        );

        const mainLight = new THREE.DirectionalLight(0xffffff, 3); 
        mainLight.position.set(10, 10, 10);
        
        scene.add(mainLight);

        const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.5);
        scene.add(hemiLight);
        
        const clock = new THREE.Clock();
        let speed = 0.1
        let actionSpeed = 1


        function cleanScene(loopID){
            
            scene.traverse((element)=>{
                element.geometry?.dispose(); 
                element.material?.dispose();
            })
            
            renderer.dispose();
            if(camera){
                camera = null;
            }
            cancelAnimationFrame(loopID)

            
            window.removeEventListener("resize",resize);
        }

        
        let loopID
        function loop() {
            loopID = window.requestAnimationFrame(loop);
            const delta = clock.getDelta(); 
            if (mixer) mixer.update(delta);

            if(action){
            if(action.time >= 14.7 && action.time <= 16.7 ){
                if(actionSpeed > 0.40){
                    actionSpeed -= 0.004
                }
                action.timeScale = actionSpeed;
            }
            if(action.time >= 16.7 && !action.paused){
                if(actionSpeed <= 2.2){
                    actionSpeed += 0.05
                }
                action.timeScale = actionSpeed;
            }
            }
            if(cameraMoveStart.current ){
                if(camera.position.z > -7){
                     speed += 0.005
                     camera.position.z -= speed;
                }else if(!flagSceneRemove.current){
                    cleanScene(loopID)
                    flagSceneRemove.current = true
                    setSceneDisplay(false)
                }
                setIsFinished(false)
            }
            if(!camera) return; 
            renderer.render(scene, camera);
        }
        
        loop();
        
        function resize(){
            const width = canvasRef.current.clientWidth;
            const height = canvasRef.current.clientHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            
        }
        
        
        window.addEventListener("resize",resize);

        return(()=>{cleanScene(loopID)});
    }, []);

    return (
        <div className="heroBackground">
            <canvas ref={canvasRef}  />
             {isFinished &&  <span className='startBtn' onClick={()=>{cameraMoveStart.current=true}}> Start </span>}
             
        </div>
    );
}

export default FirstScene;