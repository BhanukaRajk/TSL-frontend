import { Canvas } from "@react-three/fiber"
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import { NewCostume } from './NewCostume'
import Experience from './Experience'
import { useState } from 'react'
import ControlPanel from "./utilComp/ControlPanel"
import CamControl from "./utilComp/CamControl"

const UpperModel = () => {
    const [control, setControl] = useState({
        x: 0,
        y: -1.7,
        z: 0
    })
    const [camCont, setCamCont] = useState({
        scale: 2.3,
    })
    return (
        <div className="w-1/3 h-screen flex items-center py-10 relative m-auto">
            <ControlPanel control={control} setControl={setControl} />
            <CamControl camCont={camCont} setCamCont={setCamCont} />
            <Canvas camera={{ position: [0, 0, 10], fov: 30 }}>
                <Suspense fallback={false}>
                    {/* <Suit1 controller={controller} /> */}
                    <NewCostume control={control} camCont={camCont} />
                </Suspense>
                <OrbitControls enableZoom={true} makeDefault minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
                <Environment preset="city" />
                {/* <ContactShadows rotation-x={Math.PI / 2} position={[0, -4.5, 0]} opacity={0.25} width={10} height={10} blur={1} far={4.5} /> */}
            </Canvas>
        </div>
    )
}

export default UpperModel