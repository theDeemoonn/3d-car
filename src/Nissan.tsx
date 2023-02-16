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
        Object_2: THREE.Mesh;
        Object_4: THREE.Mesh;
        Object_8: THREE.Mesh;
        Object_9: THREE.Mesh;
        Object_10: THREE.Mesh;
        Object_11: THREE.Mesh;
        Object_12: THREE.Mesh;
        Object_13: THREE.Mesh;
        Object_14: THREE.Mesh;
        Object_16: THREE.Mesh;
        Object_17: THREE.Mesh;
        Object_18: THREE.Mesh;
        Object_19: THREE.Mesh;
        Object_20: THREE.Mesh;
        Object_22: THREE.Mesh;
        Object_23: THREE.Mesh;
        Object_24: THREE.Mesh;
        Object_25: THREE.Mesh;
        Object_26: THREE.Mesh;
        Object_27: THREE.Mesh;
        Object_29: THREE.Mesh;
        Object_30: THREE.Mesh;
        Object_31: THREE.Mesh;
        Object_32: THREE.Mesh;
        Object_33: THREE.Mesh;
        Object_34: THREE.Mesh;
        Object_35: THREE.Mesh;
        Object_36: THREE.Mesh;
        Object_37: THREE.Mesh;
        Object_38: THREE.Mesh;
        Object_41: THREE.Mesh;
        Object_42: THREE.Mesh;
        Object_43: THREE.Mesh;
        Object_44: THREE.Mesh;
        Object_45: THREE.Mesh;
        Object_7: THREE.Mesh;
        Object_39: THREE.Mesh;
        Object_15: THREE.Mesh;
        Object_40: THREE.Mesh;
        Object_28: THREE.Mesh;
        Object_5: THREE.Mesh;
        Object_6: THREE.Mesh;
        Object_3: THREE.Mesh;
        Object_21: THREE.Mesh;
    };
    materials: {
        ["Material.002"]: THREE.MeshStandardMaterial;
        ["Material.012"]: THREE.MeshStandardMaterial;
        ["Material.034"]: THREE.MeshStandardMaterial;
        ["Material.030"]: THREE.MeshStandardMaterial;
        ["Material.026"]: THREE.MeshStandardMaterial;
        ["Material.028"]: THREE.MeshStandardMaterial;
        ["Material.039"]: THREE.MeshStandardMaterial;
        ["Material.046"]: THREE.MeshStandardMaterial;
        ["Material.048"]: THREE.MeshStandardMaterial;
        ["Material.001"]: THREE.MeshPhysicalMaterial;
        Material: THREE.MeshPhysicalMaterial;
        ["Material.003"]: THREE.MeshStandardMaterial;
        ["Material.007"]: THREE.MeshStandardMaterial;
        ["Material.005"]: THREE.MeshStandardMaterial;
        ["Material.011"]: THREE.MeshStandardMaterial;
        ["Material.018"]: THREE.MeshStandardMaterial;
        ["Material.023"]: THREE.MeshStandardMaterial;
        ["Material.021"]: THREE.MeshStandardMaterial;
        ["Material.025"]: THREE.MeshStandardMaterial;
        ["Material.035"]: THREE.MeshStandardMaterial;
        ["Material.037"]: THREE.MeshStandardMaterial;
        ["Material.043"]: THREE.MeshStandardMaterial;
        ["Material.042"]: THREE.MeshStandardMaterial;
        ["Material.044"]: THREE.MeshStandardMaterial;
        ["Material.013"]: THREE.MeshStandardMaterial;
        ["Material.029"]: THREE.MeshStandardMaterial;
        ["plate_d-dds"]: THREE.MeshStandardMaterial;
        ["Material.024"]: THREE.MeshStandardMaterial;
        ["Material.016"]: THREE.MeshStandardMaterial;
        ["Material.017"]: THREE.MeshStandardMaterial;
        ["Material.019"]: THREE.MeshStandardMaterial;
        ["Material.009"]: THREE.MeshPhysicalMaterial;
        ["Material.006"]: THREE.MeshStandardMaterial;
    };
};

export function Nissan({ color, colorWh, ...props }: IColor & JSX.IntrinsicElements["group"]) {
    const { nodes, materials } = useGLTF(
        "/nissan_fairlady_z_s30240z_1978.glb"
    ) as GLTFResult;
    return (
        <group {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group
                    name="Sketchfab_model"
                    rotation={[-Math.PI / 2, 0, 0]}
                    userData={{ name: "Sketchfab_model" }}
                >
                    <group
                        name="Nissan_S30objcleanermaterialmergergles"
                        userData={{ name: "Nissan S30.obj.cleaner.materialmerger.gles" }}
                    >
                        <mesh
                            name="Object_2"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_2.geometry}
                            material={materials["Material.002"]}
                            userData={{ name: "Object_2" }}
                        />
                        <mesh
                            name="Object_4"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_4.geometry}
                            material={materials["Material.012"]}
                            userData={{ name: "Object_4" }}
                        />
                        <mesh
                            name="Object_8"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_8.geometry}
                            material={materials["Material.034"]}
                            userData={{ name: "Object_8" }}
                        />
                        <mesh
                            name="Object_9"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_9.geometry}
                            material={materials["Material.030"]}
                            userData={{ name: "Object_9" }}
                        />
                        <mesh
                            name="Object_10"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_10.geometry}
                            material={materials["Material.026"]}
                            userData={{ name: "Object_10" }}
                        />
                        <mesh
                            name="Object_11"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_11.geometry}
                            material={materials["Material.028"]}
                            userData={{ name: "Object_11" }}
                        />
                        <mesh
                            name="Object_12"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_12.geometry}
                            material={materials["Material.039"]}
                            userData={{ name: "Object_12" }}
                        />
                        <mesh
                            name="Object_13"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_13.geometry}
                            material={materials["Material.046"]}
                            userData={{ name: "Object_13" }}
                        />
                        <mesh
                            name="Object_14"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_14.geometry}
                            material={materials["Material.048"]}
                            userData={{ name: "Object_14" }}
                        />
                        <mesh
                            name="Object_16"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_16.geometry}
                            material={materials["Material.001"]}
                            userData={{ name: "Object_16" }}
                        ><meshLambertMaterial color={color} /></mesh>
                        <mesh
                            name="Object_17"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_17.geometry}
                            material={materials["Material.001"]}
                            userData={{ name: "Object_17" }}
                        ><meshLambertMaterial color={color} /></mesh>
                        <mesh
                            name="Object_18"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_18.geometry}
                            material={materials.Material}
                            userData={{ name: "Object_18" }}
                        />
                        <mesh
                            name="Object_19"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_19.geometry}
                            material={materials["Material.003"]}
                            userData={{ name: "Object_19" }}
                        />
                        <mesh
                            name="Object_20"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_20.geometry}
                            material={materials["Material.003"]}
                            userData={{ name: "Object_20" }}
                        />
                        <mesh
                            name="Object_22"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_22.geometry}
                            material={materials["Material.007"]}
                            userData={{ name: "Object_22" }}
                        />
                        <mesh
                            name="Object_23"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_23.geometry}
                            material={materials["Material.005"]}
                            userData={{ name: "Object_23" }}
                        ><meshLambertMaterial color={colorWh} /></mesh>
                        <mesh
                            name="Object_24"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_24.geometry}
                            material={materials["Material.011"]}
                            userData={{ name: "Object_24" }}
                        />
                        <mesh
                            name="Object_25"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_25.geometry}
                            material={materials["Material.011"]}
                            userData={{ name: "Object_25" }}
                        />
                        <mesh
                            name="Object_26"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_26.geometry}
                            material={materials["Material.011"]}
                            userData={{ name: "Object_26" }}
                        />
                        <mesh
                            name="Object_27"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_27.geometry}
                            material={materials["Material.011"]}
                            userData={{ name: "Object_27" }}
                        />
                        <mesh
                            name="Object_29"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_29.geometry}
                            material={materials["Material.018"]}
                            userData={{ name: "Object_29" }}
                        />
                        <mesh
                            name="Object_30"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_30.geometry}
                            material={materials["Material.023"]}
                            userData={{ name: "Object_30" }}
                        />
                        <mesh
                            name="Object_31"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_31.geometry}
                            material={materials["Material.023"]}
                            userData={{ name: "Object_31" }}
                        />
                        <mesh
                            name="Object_32"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_32.geometry}
                            material={materials["Material.023"]}
                            userData={{ name: "Object_32" }}
                        />
                        <mesh
                            name="Object_33"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_33.geometry}
                            material={materials["Material.023"]}
                            userData={{ name: "Object_33" }}
                        />
                        <mesh
                            name="Object_34"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_34.geometry}
                            material={materials["Material.021"]}
                            userData={{ name: "Object_34" }}
                        />
                        <mesh
                            name="Object_35"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_35.geometry}
                            material={materials["Material.021"]}
                            userData={{ name: "Object_35" }}
                        />
                        <mesh
                            name="Object_36"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_36.geometry}
                            material={materials["Material.025"]}
                            userData={{ name: "Object_36" }}
                        />
                        <mesh
                            name="Object_37"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_37.geometry}
                            material={materials["Material.035"]}
                            userData={{ name: "Object_37" }}
                        />
                        <mesh
                            name="Object_38"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_38.geometry}
                            material={materials["Material.035"]}
                            userData={{ name: "Object_38" }}
                        />
                        <mesh
                            name="Object_41"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_41.geometry}
                            material={materials["Material.037"]}
                            userData={{ name: "Object_41" }}
                        />
                        <mesh
                            name="Object_42"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_42.geometry}
                            material={materials["Material.043"]}
                            userData={{ name: "Object_42" }}
                        />
                        <mesh
                            name="Object_43"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_43.geometry}
                            material={materials["Material.043"]}
                            userData={{ name: "Object_43" }}
                        />
                        <mesh
                            name="Object_44"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_44.geometry}
                            material={materials["Material.042"]}
                            userData={{ name: "Object_44" }}
                        />
                        <mesh
                            name="Object_45"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_45.geometry}
                            material={materials["Material.044"]}
                            userData={{ name: "Object_45" }}
                        />
                        <mesh
                            name="Object_7"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_7.geometry}
                            material={materials["Material.013"]}
                            userData={{ name: "Object_7" }}
                        />
                        <mesh
                            name="Object_39"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_39.geometry}
                            material={materials["Material.029"]}
                            userData={{ name: "Object_39" }}
                        />
                        <mesh
                            name="Object_15"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_15.geometry}
                            material={materials["plate_d-dds"]}
                            userData={{ name: "Object_15" }}
                        />
                        <mesh
                            name="Object_40"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_40.geometry}
                            material={materials["Material.024"]}
                            userData={{ name: "Object_40" }}
                        />
                        <mesh
                            name="Object_28"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_28.geometry}
                            material={materials["Material.016"]}
                            userData={{ name: "Object_28" }}
                        />
                        <mesh
                            name="Object_5"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_5.geometry}
                            material={materials["Material.017"]}
                            userData={{ name: "Object_5" }}
                        />
                        <mesh
                            name="Object_6"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_6.geometry}
                            material={materials["Material.019"]}
                            userData={{ name: "Object_6" }}
                        />
                        <mesh
                            name="Object_3"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_3.geometry}
                            material={materials["Material.009"]}
                            userData={{ name: "Object_3" }}
                        />
                        <mesh
                            name="Object_21"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_21.geometry}
                            material={materials["Material.006"]}
                            userData={{ name: "Object_21" }}
                        />
                    </group>
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/nissan_fairlady_z_s30240z_1978.glb");
