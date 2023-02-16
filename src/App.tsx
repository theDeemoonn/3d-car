import "./App.css";
import {Canvas} from "@react-three/fiber";
import {Html, OrbitControls, Stage, useProgress} from "@react-three/drei";
import {Suspense, useMemo} from "react";
import {useControls} from "leva";
import {Tiguan} from "./Tiguan";
import {OpelAstraGTC2012} from "./Opel";
import {Nissan} from "./Nissan";


function Loader() {
    const {progress} = useProgress()
    return <Html center style={{color: '#fcfcfc'}}>{Math.floor(progress)} % загрузка</Html>
}


export default function App() {
    const carSelect = useControls({
        foo: {
            value: 'Opel',
            label: 'Модель',
            options: ['Opel', 'Tiguan',  'Nissan']
        }
    });
    const {color} = useControls({color: {value: '#ffffff', label: 'Цвет кузова'}});
    const {colorWh} = useControls({colorWh: {value: 'rgba(93,93,93,0.65)', label: 'Цвет дисков'}});


    const currentBlock = useMemo(() => {
        switch (carSelect.foo) {
            case 'Opel':
                return (

                    <OpelAstraGTC2012 color={color} colorWh={colorWh}/>


                );
            case 'Tiguan':
                return (

                    <Tiguan color={color} colorWh={colorWh}/>

                );
            case 'Nissan':
                return (

                    <Nissan color={color} colorWh={colorWh}/>

                );
        }
    }, [carSelect.foo, color, colorWh]);

   function minDistance (){
       if (carSelect.foo === 'Opel'){
           return 700
       }
       else {
           return 0
       }
   }
   function adjustCamera() {
       if (carSelect.foo === 'Opel'){
           return 0.04
       }
       else {
           return 2

       }

   }


    return (
        <div className="container" style={{background: '#5b5a58'}}>
            <Canvas shadows camera={{position: [4, 4, 12], fov: 35}}>
                <Suspense fallback={Loader()}>
                    <Stage intensity={1.5} environment="city"
                           shadows={{type: 'accumulative',  colorBlend: 2, opacity: 2}}
                           adjustCamera={adjustCamera()}>
                        {currentBlock}
                    </Stage>
                    <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} minDistance={minDistance()} />



                        </Suspense>
                        </Canvas>
                        </div>


                        );
                    }

                    // <ModelGL colorWh={colorWh} color={color}/>

                    //
                    // <div className="container" style={{background: '#5b5a58'}}>
                    // <Canvas shadows camera={{position: [4, 4, 12], fov: 35}}>
                    // <Suspense fallback={Loader()}>
                    // <Stage intensity={1.5} environment="city"
//                    shadows={{type: 'accumulative', color, colorBlend: 2, opacity: 2}} adjustCamera={0.04}>
//                 <OpelAstraGTC2012 color={color} colorWh={colorWh}/>
//             </Stage>
//             <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} minDistance={700} />
//         </Suspense>
//     </Canvas>
// </div>
