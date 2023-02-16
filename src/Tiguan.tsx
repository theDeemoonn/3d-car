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
        Object_20: THREE.Mesh;
        Object_18: THREE.Mesh;
        Object_22: THREE.Mesh;
        Object_24: THREE.Mesh;
        Object_26: THREE.Mesh;
        Object_29: THREE.Mesh;
        Object_28: THREE.Mesh;
        Object_31: THREE.Mesh;
        Object_35: THREE.Mesh;
        Object_33: THREE.Mesh;
        Object_37: THREE.Mesh;
        Object_39: THREE.Mesh;
        Object_41: THREE.Mesh;
        Object_43: THREE.Mesh;
        Object_45: THREE.Mesh;
        Object_47: THREE.Mesh;
        Object_49: THREE.Mesh;
        Object_51: THREE.Mesh;
        Object_53: THREE.Mesh;
        Object_55: THREE.Mesh;
        Object_57: THREE.Mesh;
        Object_59: THREE.Mesh;
        Object_61: THREE.Mesh;
        Object_63: THREE.Mesh;
        Object_65: THREE.Mesh;
        Object_67: THREE.Mesh;
        Object_69: THREE.Mesh;
        Object_71: THREE.Mesh;
        Object_73: THREE.Mesh;
        Object_75: THREE.Mesh;
        Object_77: THREE.Mesh;
        Object_80: THREE.Mesh;
        Object_79: THREE.Mesh;
        Object_82: THREE.Mesh;
        Object_84: THREE.Mesh;
        Object_86: THREE.Mesh;
        Object_87: THREE.Mesh;
        Object_89: THREE.Mesh;
        Object_91: THREE.Mesh;
        Object_93: THREE.Mesh;
        Object_95: THREE.Mesh;
        Object_97: THREE.Mesh;
        Object_99: THREE.Mesh;
        Object_101: THREE.Mesh;
        Object_103: THREE.Mesh;
        Object_105: THREE.Mesh;
        Object_107: THREE.Mesh;
        Object_109: THREE.Mesh;
        Object_111: THREE.Mesh;
        Object_113: THREE.Mesh;
        Object_115: THREE.Mesh;
        Object_117: THREE.Mesh;
        Object_119: THREE.Mesh;
        Object_121: THREE.Mesh;
        Object_123: THREE.Mesh;
        Object_125: THREE.Mesh;
        Object_127: THREE.Mesh;
        Object_129: THREE.Mesh;
        Object_131: THREE.Mesh;
        Object_133: THREE.Mesh;
        Object_135: THREE.Mesh;
        Object_137: THREE.Mesh;
        Object_139: THREE.Mesh;
        Object_141: THREE.Mesh;
        Object_143: THREE.Mesh;
        Object_145: THREE.Mesh;
        Object_147: THREE.Mesh;
        Object_149: THREE.Mesh;
        Object_151: THREE.Mesh;
        Object_153: THREE.Mesh;
        Object_155: THREE.Mesh;
        Object_157: THREE.Mesh;
        Object_159: THREE.Mesh;
        Object_161: THREE.Mesh;
        Object_163: THREE.Mesh;
        Object_165: THREE.Mesh;
        Object_167: THREE.Mesh;
        Object_169: THREE.Mesh;
        Object_171: THREE.Mesh;
        Object_173: THREE.Mesh;
        Object_175: THREE.Mesh;
        Object_177: THREE.Mesh;
        Object_179: THREE.Mesh;
        Object_181: THREE.Mesh;
        Object_182: THREE.Mesh;
        Object_184: THREE.Mesh;
        Object_186: THREE.Mesh;
        Object_188: THREE.Mesh;
        Object_190: THREE.Mesh;
        Object_192: THREE.Mesh;
        Object_194: THREE.Mesh;
        Object_196: THREE.Mesh;
        Object_198: THREE.Mesh;
        Object_200: THREE.Mesh;
        Object_202: THREE.Mesh;
        Object_204: THREE.Mesh;
        Object_206: THREE.Mesh;
        Object_208: THREE.Mesh;
        Object_210: THREE.Mesh;
    };
    materials: {
        Metal_Black: THREE.MeshStandardMaterial;
        Plastic: THREE.MeshStandardMaterial;
        Silver: THREE.MeshStandardMaterial;
        Car_Paint: THREE.MeshStandardMaterial;
        Red_Light: THREE.MeshStandardMaterial;
        Glass: THREE.MeshStandardMaterial;
        Wight_Light: THREE.MeshStandardMaterial;
        Rubber: THREE.MeshStandardMaterial;
        material_0: THREE.MeshStandardMaterial;
        Tires: THREE.MeshStandardMaterial;
    };
};

export function Tiguan({ color, colorWh, ...props }: IColor & JSX.IntrinsicElements["group"]) {
    const { nodes, materials } = useGLTF("/vw_tiguan_2021.glb") as GLTFResult;
    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_4.geometry}
                            material={materials.Metal_Black}
                        />
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_6.geometry}
                            material={materials.Plastic}
                        />
                    </group>
                    <group position={[0, 0.39, 2.15]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_8.geometry}
                            material={materials.Metal_Black}
                        />
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_10.geometry}
                            material={materials.Plastic}
                        />
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_12.geometry}
                            material={materials.Plastic}
                        />
                    </group>
                    <group position={[0, 0.03, 0.03]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_14.geometry}
                            material={materials.Plastic}
                        />
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_16.geometry}
                            material={materials.Plastic}
                        />
                    </group>
                    <group position={[0.01, 0.76, 2.09]} rotation={[1.28, 0, Math.PI]}>
                        <group position={[0, -0.01, 0]}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_20.geometry}
                                material={materials.Silver}
                            />
                        </group>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_18.geometry}
                            material={materials.Metal_Black}
                        />
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_22.geometry}
                            material={materials.Metal_Black}
                        />
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_24.geometry}
                            material={materials.Metal_Black}
                        />
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_26.geometry}
                            material={materials.Plastic}
                        />
                    </group>
                    <group position={[0.8, 1.05, 0.73]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_29.geometry}
                            material={materials.Metal_Black}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_28.geometry}
                            material={materials.Car_Paint}
                        ><meshLambertMaterial color={color} /></mesh>
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_31.geometry}
                            material={materials.Metal_Black}
                        />
                    </group>
                    <group position={[0.01, 1.02, -2.09]} rotation={[1.72, 0, 0]}>
                        <group position={[0, -0.01, 0]}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_35.geometry}
                                material={materials.Silver}
                            />
                        </group>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_33.geometry}
                            material={materials.Metal_Black}
                        />
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_37.geometry}
                            material={materials.Metal_Black}
                        />
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_39.geometry}
                            material={materials.Metal_Black}
                        />
                    </group>
                    <group position={[-0.01, 0.03, -0.01]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_41.geometry}
                            material={materials.Metal_Black}
                        />
                    </group>
                    <group position={[-0.01, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_43.geometry}
                            material={materials.Metal_Black}
                        />
                    </group>
                    <group position={[0.88, 1.05, -1.14]} rotation={[0.04, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_45.geometry}
                            material={materials.Car_Paint}
                        />
                    </group>
                    <group position={[0.88, 1, -0.16]} rotation={[0.08, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_47.geometry}
                            material={materials.Car_Paint}
                        />
                    </group>
                    <group position={[-0.07, 1.1, 1.07]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_49.geometry}
                            material={materials.Metal_Black}
                        />
                    </group>
                    <group position={[-0.07, 1.1, 1.05]} rotation={[0, -0.51, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_51.geometry}
                            material={materials.Metal_Black}
                        />
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_53.geometry}
                            material={materials.Metal_Black}
                        />
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_55.geometry}
                            material={materials.Metal_Black}
                        />
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_57.geometry}
                            material={materials.Silver}
                        />
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_59.geometry}
                            material={materials.Car_Paint}
                        />
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_61.geometry}
                            material={materials.Car_Paint}
                        ><meshLambertMaterial color={color} /></mesh>
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_63.geometry}
                            material={materials.Car_Paint}
                        ><meshLambertMaterial color={color} /></mesh>
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_65.geometry}
                            material={materials.Car_Paint}
                        ><meshLambertMaterial color={color} /></mesh>
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_67.geometry}
                            material={materials.Car_Paint}
                        ><meshLambertMaterial color={color} /></mesh>
                    </group>
                    <group position={[0, 0.04, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_69.geometry}
                            material={materials.Car_Paint}
                        ><meshLambertMaterial color={color} /></mesh>
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_71.geometry}
                            material={materials.Car_Paint}
                        ><meshLambertMaterial color={color} /></mesh>
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_73.geometry}
                            material={materials.Car_Paint}
                        ><meshLambertMaterial color={color} /></mesh>
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_75.geometry}
                            material={materials.Car_Paint}
                        ><meshLambertMaterial color={color} /></mesh>
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_77.geometry}
                            material={materials.Car_Paint}
                        ><meshLambertMaterial color={color} /></mesh>
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_80.geometry}
                            material={materials.Metal_Black}
                        ><meshLambertMaterial color={color} /></mesh>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_79.geometry}
                            material={materials.Car_Paint}
                        ><meshLambertMaterial color={color} /></mesh>
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_82.geometry}
                            material={materials.Car_Paint}
                        ><meshLambertMaterial color={color} /></mesh>
                    </group>
                    <group position={[0, 0.04, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_84.geometry}
                            material={materials.Car_Paint}
                        ><meshLambertMaterial color={color} /></mesh>
                    </group>
                    <group position={[0, 0.04, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_86.geometry}
                            material={materials.Car_Paint}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_87.geometry}
                            material={materials.Red_Light}
                        />
                    </group>
                    <group position={[0, 0.04, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_89.geometry}
                            material={materials.Metal_Black}
                        />
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_91.geometry}
                            material={materials.Glass}
                        />
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_93.geometry}
                            material={materials.Glass}
                        />
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_95.geometry}
                            material={materials.Glass}
                        />
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_97.geometry}
                            material={materials.Glass}
                        />
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_99.geometry}
                            material={materials.Glass}
                        />
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_101.geometry}
                            material={materials.Glass}
                        />
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_103.geometry}
                            material={materials.Glass}
                        />
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_105.geometry}
                            material={materials.Wight_Light}
                        />
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_107.geometry}
                            material={materials.Wight_Light}
                        />
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_109.geometry}
                            material={materials.Wight_Light}
                        />
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_111.geometry}
                            material={materials.Wight_Light}
                        />
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_113.geometry}
                            material={materials.Wight_Light}
                        />
                    </group>
                    <group position={[0, 0.03, 0]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_115.geometry}
                            material={materials.Wight_Light}
                        />
                    </group>
                    <group position={[0, 0.03, -0.02]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_117.geometry}
                            material={materials.Wight_Light}
                        />
                    </group>
                    <group position={[0, 0.03, -0.02]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_119.geometry}
                            material={materials.Wight_Light}
                        />
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_121.geometry}
                            material={materials.Wight_Light}
                        />
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_123.geometry}
                            material={materials.Wight_Light}
                        />
                    </group>
                    <group position={[0.54, 0.79, 1.93]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_125.geometry}
                            material={materials.Wight_Light}
                        />
                    </group>
                    <group position={[0.54, 0.79, 1.93]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_127.geometry}
                            material={materials.Wight_Light}
                        />
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_129.geometry}
                            material={materials.Red_Light}
                        />
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_131.geometry}
                            material={materials.Red_Light}
                        />
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_133.geometry}
                            material={materials.Red_Light}
                        />
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_135.geometry}
                            material={materials.Red_Light}
                        />
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_137.geometry}
                            material={materials.Red_Light}
                        />
                    </group>
                    <group position={[0.8, 1.05, 0.73]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_139.geometry}
                            material={materials.Glass}
                        />
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_141.geometry}
                            material={materials.Glass}
                        ><meshLambertMaterial color={color} /></mesh>
                    </group>
                    <group position={[0, 0.02, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_143.geometry}
                            material={materials.Plastic}
                        />
                    </group>
                    <group position={[-0.01, 0.46, 0.6]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_145.geometry}
                            material={materials.Silver}
                        />
                    </group>
                    <group position={[-0.01, 0.5, 0.6]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_147.geometry}
                            material={materials.Plastic}
                        />
                    </group>
                    <group position={[-0.01, 0.5, 0.6]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_149.geometry}
                            material={materials.Rubber}
                        />
                    </group>
                    <group position={[0.4, 1.34, -0.38]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_151.geometry}
                            material={materials.Plastic}
                        />
                    </group>
                    <group position={[0.4, 0.93, -0.28]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_153.geometry}
                            material={materials.Plastic}
                        />
                    </group>
                    <group position={[0.4, 0.55, 0.37]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_155.geometry}
                            material={materials.Plastic}
                        />
                    </group>
                    <group position={[0, 0.55, -0.71]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_157.geometry}
                            material={materials.Plastic}
                        />
                    </group>
                    <group position={[0.01, 0.9, -1.05]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_159.geometry}
                            material={materials.Plastic}
                        />
                    </group>
                    <group position={[0.61, 0.54, -0.14]} rotation={[0, 0, -Math.PI / 2]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_161.geometry}
                            material={materials.Plastic}
                        />
                    </group>
                    <group position={[0.41, 1.31, -1.13]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_163.geometry}
                            material={materials.Plastic}
                        />
                    </group>
                    <group position={[0.02, 1.27, -1.15]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_165.geometry}
                            material={materials.Plastic}
                        />
                    </group>
                    <group position={[0.47, 1.23, -1.16]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_167.geometry}
                            material={materials.Silver}
                        />
                    </group>
                    <group position={[0.07, 1.23, -1.16]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_169.geometry}
                            material={materials.material_0}
                        />
                    </group>
                    <group position={[0.47, 1.23, -0.38]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_171.geometry}
                            material={materials.Silver}
                        />
                    </group>
                    <group position={[0.4, 1.26, 0.48]} rotation={[-1.11, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_173.geometry}
                            material={materials.Plastic}
                        />
                    </group>
                    <group position={[0, 0.46, 0.26]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_175.geometry}
                            material={materials.Plastic}
                        />
                    </group>
                    <group position={[0, 0.48, 0.14]} rotation={[-0.16, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_177.geometry}
                            material={materials.Plastic}
                        />
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_179.geometry}
                            material={materials.Plastic}
                        />
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_181.geometry}
                            material={materials.Plastic}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_182.geometry}
                            material={materials.Glass}
                        />
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_184.geometry}
                            material={materials.Plastic}
                        />
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_186.geometry}
                            material={materials.Rubber}
                        />
                    </group>
                    <group position={[0, 1.4, -1.76]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_188.geometry}
                            material={materials.Rubber}
                        />
                    </group>
                    <group position={[0, 0.03, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_190.geometry}
                            material={materials.Rubber}
                        />
                    </group>
                    <group position={[0, 0.46, 0.26]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_192.geometry}
                            material={materials.Plastic}
                        />
                    </group>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_194.geometry}
                        material={materials.Tires}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_196.geometry}
                        material={materials.Tires}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_198.geometry}
                        material={materials.Tires}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_200.geometry}
                        material={materials.Tires}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_202.geometry}
                        material={materials.Tires}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_204.geometry}
                        material={materials.Tires}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_206.geometry}
                        material={materials.Tires}
                    ><meshLambertMaterial color={colorWh} /> </mesh>
                    <group rotation={[Math.PI / 2, 0.08, 2.37]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_208.geometry}
                            material={materials.Tires}
                        />
                    </group>
                    <group rotation={[0, 0, 0.08]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_210.geometry}
                            material={materials.Tires}
                        />
                    </group>
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/vw_tiguan_2021.glb");
