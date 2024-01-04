import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";

import '../style/css/style.css'


function MeshComponent() {
    const fileUrl = "scene.gltf";
    // const mesh = useRef<Mesh>(null!);
    const gltf = useLoader(GLTFLoader, fileUrl);
  
    // gltf.scene.position.y = -5;
    // gltf.scene.position.x = -2;
    
    const group = useRef<THREE.Group>();

    useFrame(() => {
      if (group.current) {
        group.current.rotation.y += 0.01; // Ajuste a velocidade de rotação conforme necessário
      }
    });
  
    return (
      <group ref={group}>
        <primitive object={gltf.scene} />
      </group>
    );
  }


export function PcScene() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Canvas className='modelo3d' style={{ width: '100%', height: '15vw' }} camera={{zoom: 1.3}}>
        <OrbitControls position={[10, 10, 10]} />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <MeshComponent />
      </Canvas>
    </div>
  )
}
