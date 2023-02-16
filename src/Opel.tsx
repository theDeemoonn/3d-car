import * as THREE from "three";
import React, {ReactNode} from "react";
import {useGLTF} from "@react-three/drei";
import {GLTF} from "three-stdlib";

interface IColor {
    loader?: ReactNode;
    color: string;
    colorWh: string;
}

type GLTFResult = GLTF & {
    nodes: {
        Object_4: THREE.Mesh;
        Object_6: THREE.Mesh;
        Object_8: THREE.Mesh;
        Object_10: THREE.Mesh;
        Object_12: THREE.Mesh;
        Object_14: THREE.Mesh;
        Object_16: THREE.Mesh;
        Object_18: THREE.Mesh;
        Object_20: THREE.Mesh;
        Object_22: THREE.Mesh;
        Object_24: THREE.Mesh;
        Object_26: THREE.Mesh;
        Object_28: THREE.Mesh;
        Object_30: THREE.Mesh;
        Object_32: THREE.Mesh;
        Object_34: THREE.Mesh;
        Object_36: THREE.Mesh;
        Object_38: THREE.Mesh;
        Object_40: THREE.Mesh;
        Object_42: THREE.Mesh;
        Object_44: THREE.Mesh;
        Object_46: THREE.Mesh;
        Object_48: THREE.Mesh;
        Object_50: THREE.Mesh;
        Object_52: THREE.Mesh;
        Object_54: THREE.Mesh;
        Object_57: THREE.Mesh;
        Object_58: THREE.Mesh;
        Object_60: THREE.Mesh;
        Object_62: THREE.Mesh;
        Object_64: THREE.Mesh;
        Object_66: THREE.Mesh;
        Object_68: THREE.Mesh;
        Object_70: THREE.Mesh;
        Object_72: THREE.Mesh;
        Object_74: THREE.Mesh;
        Object_76: THREE.Mesh;
        Object_78: THREE.Mesh;
    };
    materials: {
        glass: THREE.MeshStandardMaterial;
        bodypaint: THREE.MeshStandardMaterial;
        red_glass: THREE.MeshStandardMaterial;
        blackness: THREE.MeshStandardMaterial;
        plastic: THREE.MeshStandardMaterial;
        chrome: THREE.MeshStandardMaterial;
        rubber_masks: THREE.MeshStandardMaterial;
        aluminum: THREE.MeshPhysicalMaterial;
        red_chrome: THREE.MeshStandardMaterial;
        unpaint_black: THREE.MeshStandardMaterial;
        windshilds: THREE.MeshStandardMaterial;
        calipers: THREE.MeshStandardMaterial;
        black_paint: THREE.MeshStandardMaterial;
        brake_disk: THREE.MeshPhysicalMaterial;
        ["20_-_Default"]: THREE.MeshStandardMaterial;
        ["20_-_Default22"]: THREE.MeshStandardMaterial;
    };
};

export function OpelAstraGTC2012 ({ color, colorWh, ...props }: IColor & JSX.IntrinsicElements["group"]) {
    const { nodes, materials } = useGLTF(
        "/opel_astra_gtc_2012.glb"
    ) as GLTFResult;
    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0.03, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_4.geometry}
                            material={materials.glass}
                        />
                    </group>
                    <group rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_6.geometry}
                            material={materials.bodypaint}
                        ><meshLambertMaterial color={color} /></mesh>
                    </group>
                    <group rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_8.geometry}
                            material={materials.red_glass}
                        />
                    </group>
                    <group rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_10.geometry}
                            material={materials.blackness}
                        />
                    </group>
                    <group rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_12.geometry}
                            material={materials.plastic}
                        />
                    </group>
                    <group rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_14.geometry}
                            material={materials.chrome}
                        />
                    </group>
                    <group rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_16.geometry}
                            material={materials.rubber_masks}
                        />
                    </group>
                    <group rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_18.geometry}
                            material={materials.aluminum}
                        />
                    </group>
                    <group rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_20.geometry}
                            material={materials.red_chrome}
                        />
                    </group>
                    <group rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_22.geometry}
                            material={materials.glass}
                        />
                    </group>
                    <group rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_24.geometry}
                            material={materials.rubber_masks}
                        />
                    </group>
                    <group rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_26.geometry}
                            material={materials.chrome}
                        />
                    </group>
                    <group rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_28.geometry}
                            material={materials.unpaint_black}
                        />
                    </group>
                    <group rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_30.geometry}
                            material={materials.glass}
                        />
                    </group>
                    <group rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_32.geometry}
                            material={materials.plastic}
                        />
                    </group>
                    <group rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_34.geometry}
                            material={materials.aluminum}
                        />
                    </group>
                    <group rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_36.geometry}
                            material={materials.glass}
                        />
                    </group>
                    <group rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_38.geometry}
                            material={materials.windshilds}
                        />
                    </group>
                    <group rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_40.geometry}
                            material={materials.red_glass}
                        />
                    </group>
                    <group rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_42.geometry}
                            material={materials.chrome}
                        />
                    </group>
                    <group
                        position={[109.38, 46.19, -199.13]}
                        rotation={[-Math.PI / 2, 0, 0]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_44.geometry}
                            material={materials.aluminum}
                        ><meshLambertMaterial color={colorWh} /></mesh>
                    </group>
                    <group
                        position={[110.6, 46.19, -199.13]}
                        rotation={[-Math.PI / 2, 0, 0]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_46.geometry}
                            material={materials.calipers}
                        />
                    </group>
                    <group rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_48.geometry}
                            material={materials.rubber_masks}
                        />
                    </group>
                    <group rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_50.geometry}
                            material={materials.rubber_masks}
                        />
                    </group>
                    <group rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_52.geometry}
                            material={materials.glass}
                        />
                    </group>
                    <group rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_54.geometry}
                            material={materials.chrome}
                        />
                    </group>
                    <group
                        position={[0.49, 46.19, -11.24]}
                        rotation={[-Math.PI / 2, 0, 0]}
                    >
                        <group position={[-109.52, -187.07, 0]}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_57.geometry}
                                material={materials.rubber_masks}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_58.geometry}
                                material={materials.rubber_masks}
                            />
                        </group>
                    </group>
                    <group
                        position={[-109.02, 46.19, 175.82]}
                        rotation={[-Math.PI / 2, 0, 0]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_60.geometry}
                            material={materials.black_paint}
                        />
                    </group>
                    <group
                        position={[-109.02, 46.19, 175.82]}
                        rotation={[-Math.PI / 2, 0, 0]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_62.geometry}
                            material={materials.brake_disk}
                        />
                    </group>
                    <group rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_64.geometry}
                            material={materials.chrome}
                        />
                    </group>
                    <group rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_66.geometry}
                            material={materials["20_-_Default"]}
                        />
                    </group>
                    <group rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_68.geometry}
                            material={materials.chrome}
                        />
                    </group>
                    <group rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_70.geometry}
                            material={materials.glass}
                        />
                    </group>
                    <group
                        position={[-45.99, 110.53, -297.5]}
                        rotation={[-Math.PI / 2, 0, 0]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_72.geometry}
                            material={materials.aluminum}
                        />
                    </group>
                    <group rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_74.geometry}
                            material={materials.rubber_masks}
                        />
                    </group>
                    <group rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_76.geometry}
                            material={materials["20_-_Default22"]}
                        />
                    </group>
                    <group rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_78.geometry}
                            material={materials.chrome}
                        />
                    </group>
                </group>
            </group>
        </group>
    );
};








useGLTF.preload("/opel_astra_gtc_2012.glb");
