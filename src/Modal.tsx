import {Canvas, useLoader} from "@react-three/fiber";
import {Environment, OrbitControls, useFBX, useTexture} from "@react-three/drei";
import {Suspense} from "react";
import {Html, useProgress} from '@react-three/drei'
import "./App.css";



const Scene = () => {
    const fbx = useFBX("OPEL Astra GTC 2012.FBX.fbx");



    return  (
            <primitive object={fbx} scale={0.01} position={[0, -0.5, 0]} />

    )

};

export default function Model() {
    return (


                    <Scene/>



    );
}