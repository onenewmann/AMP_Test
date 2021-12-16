import React, { useRef } from "react";
import WormholeMap from '../../assets/textures/wormhole.jpg';
import CloudsMap from '../../assets/textures/cloud.png';
import { TextureLoader } from "three";
import { useLoader, useFrame } from "@react-three/fiber";
import { Stars, useGLTF } from '@react-three/drei';

function Model({ url, ...props }) {
    const gltf = useGLTF(url)
    return <primitive object={gltf.scene} {...props} />
  }

// const Model = () => {
//     const gltf = useGLTF('/scene.gltf')
//     const spaceshipRef = useRef();
//     return <primitive ref={spaceshipRef} object={gltf.scene} dispose={null} position={[0, -2, 0]} scale={0.1} rotation={[0,0,-1.55]} />;
//   };
  

export function Wormhole(props){

    const [wormholeMap, cloudMap] = useLoader(TextureLoader, [WormholeMap, CloudsMap]);
    
    const wormholeRef = useRef();
    const cloudsRef = useRef();
    const starRef = useRef();
    const spaceshipRef = useRef();
    const spiritRef = useRef();
    const sateliteRef = useRef();

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
    
        wormholeRef.current.rotation.y = elapsedTime / 2;
        wormholeRef.current.rotation.z = elapsedTime / 10;
        cloudsRef.current.rotation.y = elapsedTime / -2;
        starRef.current.rotation.x = elapsedTime / -20;
        spiritRef.current.rotation.y = elapsedTime / -2;
        // spiritRef.current.rotation.x = elapsedTime / -2;
        sateliteRef.current.rotation.y = elapsedTime / -2;
        spaceshipRef.current.rotation.y =  elapsedTime / -5; //50 + Math.sin(elapsedTime) * 30
      });

    return (
    <>
        <ambientLight intensity={0.3} />
        <pointLight color="#f6f3ea" position={[10, 0, 10]} intensity={5} />
        <Stars ref={starRef} radius={300} depth={60} count={20000} factor={7} saturation={0} fade={true} />
        <mesh ref={cloudsRef} position={[0, 0, 0]} >
            <sphereGeometry args={[2.25, 32, 32]} />
            <meshPhongMaterial
            map={cloudMap}
            opacity={1}
            depthWrite={true}
            transparent={true}
            />
        </mesh>
        <mesh ref={wormholeRef} position={[0, 0, 0]}>
            <sphereGeometry args={[1.8, 32, 32]} />
            <meshStandardMaterial map={wormholeMap} metalness={0.98} roughnes={0.25} />
        </mesh>
        <group ref={spaceshipRef}>
            <Model  rotation-z={0} position={[0,-20,0]} scale={0.005} url='/starship.gltf' /> 
        </group>
        <group ref={spiritRef}>
            <Model  rotation-z={0} position={[5,-9,0]} scale={0.95} url='/scene.gltf' /> 
        </group>
        <group ref={sateliteRef}>
            <Model  rotation-z={0} position={[0,3,0]} scale={0.00002} url='/miner.gltf' /> 
        </group>
    </>
    );
}