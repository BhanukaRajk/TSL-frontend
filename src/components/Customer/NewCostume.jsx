/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/models/newCostume.gltf
*/

// import { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

// import { useLoader } from '@react-three/fiber'
// import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useCustomization } from "../../contexts/Controller";



export function NewCostume(props) {
  const { nodes, materials } = useGLTF("/models/newCostume.gltf");
  const { material, PocketFlaps } = useCustomization();

  const TextureProps = {
    grey: useTexture({
      map: "/textures/Poly - formal coat/color_map.jpg",
      normalMap: "/textures/Poly - formal coat/normal_map_opengl.jpg",
      roughnessMap: "/textures/Poly - formal coat/roughness_map.jpg",
      aoMap: "/textures/Poly - formal coat/ao_map.jpg",
    }),

    Fabric_Polyester_002_SD: useTexture({
      map: "/textures/Fabric_Polyester_002_SD/Fabric_Polyester_002_basecolor.jpg",
      normalMap:
        "/textures/Fabric_Polyester_002_SD/Fabric_Polyester_002_normal.jpg",
      roughnessMap:
        "/textures/Fabric_Polyester_002_SD/Fabric_Polyester_002_roughness.jpg",
      aoMap:
        "/textures/Fabric_Polyester_002_SD/Fabric_Polyester_002_ambientOcclusion.jpg",
    }),

    Fabric_polyester_001_SD: useTexture({
      map: "/textures/Fabric_polyester_001_SD/Fabric_polyester_001_basecolor.jpg",
      normalMap:
        "/textures/Fabric_polyester_001_SD/Fabric_polyester_001_normal.jpg",
      roughnessMap:
        "/textures/Fabric_polyester_001_SD/Fabric_polyester_001_roughness.jpg",
      aoMap:
        "/textures/Fabric_polyester_001_SD/Fabric_polyester_001_ambientOcclusion.jpg",
    }),

    Fabric_011_SD: useTexture({
      map: "/textures/Fabric_011_SD/Fabric_011_COLOR.jpg",
      normalMap: "/textures/Fabric_011_SD/Fabric_011_NORM.jpg",
      roughnessMap:
        "/textures/Fabric_Polyester_002_SD/Fabric_Polyester_002_roughness.jpg",
      // roughnessMap: "/textures/Fabric_011_SD/Fabric_011_ROUGH.jpg",
      aoMap: "/textures/Fabric_011_SD/Fabric_011_OCC.jpg",
    }),
    Fabric_Burlap_003_SD: useTexture({
      map: "/textures/Fabric_Burlap_003_SD/Fabric_Burlap_003_basecolor.jpg",
      normalMap: "/textures/Fabric_Burlap_003_SD/Fabric_Burlap_003_normal.jpg",
      roughnessMap:
        "/textures/Fabric_Burlap_003_SD/Fabric_Burlap_003_roughness.jpg",
      aoMap:
        "/textures/Fabric_Burlap_003_SD/Fabric_Burlap_003_ambientOcclusion.jpg",
    }),
    Fabric_Lace_004: useTexture({
      map: "/textures/Fabric_Lace_004/Fabric_Lace_004_basecolor.jpg",
      normalMap: "/textures/Fabric_Lace_004/Fabric_Lace_004_normal.jpg",
      roughnessMap: "/textures/Fabric_Lace_004/Fabric_Lace_004_roughness.jpg",
      aoMap: "/textures/Fabric_Lace_004/Fabric_Lace_004_ambientOcclusion.jpg",
    }),
    Fabric_015: useTexture({
      map: "/textures/Fabric_015/Fabric_015_COLOR.jpg",
      normalMap: "/textures/Fabric_015/Fabric_015_NORM.jpg",
      roughnessMap:
        "/textures/Fabric_Polyester_002_SD/Fabric_Polyester_002_roughness.jpg",
      // roughnessMap: "/textures/Fabric_015/Fabric_015_ROUGH.jpg",
      aoMap: "/textures/Fabric_015/Fabric_015_OCC.jpg",
    }),
    Leather_Perforated_001: useTexture({
      map: "/textures/Leather_Perforated_001/Leather_Perforated_001_basecolor.jpg",
      normalMap:
        "/textures/Leather_Perforated_001/Leather_Perforated_001_normal.jpg",
      roughnessMap:
        "/textures/Leather_Perforated_001/Leather_Perforated_001_roughness.jpg",
      aoMap:
        "/textures/Leather_Perforated_001/Leather_Perforated_001_ambientOcclusion.jpg",
    }),
    Fabric_019a: useTexture({
      map: "/textures/Fabric_019a/Fabric_019a_Base_Color.jpg",
      normalMap: "/textures/Fabric_019a/Fabric_019a_Normal.jpg",
      roughnessMap: "/textures/Fabric_019a/Fabric_019a_Roughness.jpg",
      aoMap: "/textures/Fabric_019a/Fabric_019a_ambientOcclusion.jpg",
    }),
    Brown_001: useTexture({
      map: "/textures/Brown_001/Leather_010_basecolor.jpg",
      normalMap: "/textures/Brown_001/Fabric_011_NORM.jpg",
      // roughnessMap: "/textures/Brown_001/Fabric_011_ROUGH.jpg",
      roughnessMap:
        "/textures/Fabric_Polyester_002_SD/Fabric_Polyester_002_roughness.jpg",
      aoMap: "/textures/Brown_001/Fabric_011_OCC.jpg",
    }),
    Fabric_026: useTexture({
      map: "/textures/Fabric_026/Fabric_026_basecolor.jpg",
      normalMap: "/textures/Fabric_026/Fabric_026_normal.jpg",
      roughnessMap: "/textures/Fabric_026/Fabric_026_roughness.jpg",
      aoMap: "/textures/Fabric_026/Fabric_026_ambientOcclusion.jpg",
    }),
    Fabric_Silk_001: useTexture({
      map: "/textures/Fabric_Silk_001/Fabric_Silk_001_basecolor.jpg",
      normalMap: "/textures/Fabric_Silk_001/Fabric_Silk_001_normal.jpg",
      roughnessMap: "/textures/Fabric_Silk_001/Fabric_Silk_001_roughness.jpg",
      aoMap: "/textures/Fabric_Silk_001/Fabric_Silk_001_ambientOcclusion.jpg",
    }),
  };

  return (
    // eslint-disable-next-line react/no-unknown-property, react/prop-types
    <group
      {...props}
      dispose={null}
      position={[props.control.x, props.control.y, props.control.z]}
      scale={props.camCont.scale}
    >
      {/* <group position={[0.034, -0.389, 0.082]}>
        <mesh geometry={nodes.Jacket_Button002.geometry} material={materials['Button.003']} position={[-1.101, 0.124, 0.012]} rotation={[-Math.PI / 2, 0, 0]} scale={0.025} />
        <mesh geometry={nodes.Jacket_Button003.geometry} material={materials['Button.003']} position={[-1.1, 0.041, 0.032]} rotation={[-Math.PI / 2, 0, 0]} scale={0.025} />
      </group>
      <group position={[0, 1.195, 0]} rotation={[1.541, 0, 0]}>
        <mesh geometry={nodes.Pants_Suit_FlatLay.geometry} material={materials.Suit_WineVelvetSolid} position={[0.036, -0.162, 0.617]} rotation={[-Math.PI, 0, 0]} scale={0.025} />
      </group> */}
      {/* <mesh geometry={nodes.JacketSlim_Button001.geometry} material={materials['Button.001']} rotation={[-Math.PI / 2, 0, 0]} scale={0.025} /> */}
      {/* <mesh geometry={nodes.Jacket_Button004.geometry} material={materials['Button.002']} position={[-1.101, 0.124, 0.012]} rotation={[-Math.PI / 2, 0, 0]} scale={0.025} /> */}

      {/* <mesh geometry={nodes.Jacket_Button005.geometry} material={materials['Button.002']} position={[-1.273, 0.883, -0.307]} rotation={[-0.741, 0.965, 1.754]} scale={0.025} visible >
        <meshStandardMaterial {...TextureProps[material]} />
      </mesh> */}

      <mesh
        geometry={nodes.Jacket_Button006.geometry}
        material={materials["Button.002"]}
        position={[0.0, -0.1, 0.006]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      >
        <meshStandardMaterial {...TextureProps[material]} />
      </mesh>

      <mesh
        geometry={nodes.Jacket_Button006.geometry}
        material={materials["Button.002"]}
        position={[0.0, -0.18, 0.006]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      >
        <meshStandardMaterial {...TextureProps[material]} />
      </mesh>

      {/* <mesh geometry={nodes.Jacket_Button009.geometry} material={materials['Button.002']} position={[0.124, -0.111, 0.028]} rotation={[-1.579, -0.08, -0.739]} scale={0.025} >
        <meshStandardMaterial {...TextureProps[material]} />
      </mesh> */}

      {/* <mesh geometry={nodes.Shoes.geometry} material={materials.Shoes} rotation={[-Math.PI / 2, 0, 0]} scale={0.025} >
         <meshStandardMaterial {...TextureProps[material]} />
      </mesh> */}

      <mesh
        geometry={nodes.Tie.geometry}
        material={materials.Tie}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      >
        <meshStandardMaterial {...TextureProps[material]} />
      </mesh>

      <mesh
        geometry={nodes.Jacket_Button.geometry}
        material={materials.Button}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      >
        <meshStandardMaterial {...TextureProps[material]} />
      </mesh>

      <mesh
        geometry={nodes.Jacket_Lining.geometry}
        material={materials.b0b0b0}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      >
        <meshStandardMaterial {...TextureProps[material]} />
      </mesh>
      <mesh
        geometry={nodes.Jacket_Lining_Tag.geometry}
        material={materials.b0b0b0}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      >
        <meshStandardMaterial {...TextureProps[material]} />
      </mesh>
      <mesh
        geometry={nodes.Jacket_Suit_Button_Holes.geometry}
        material={materials.Suit_WineVelvetSolid}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      >
        <meshStandardMaterial {...TextureProps[material]} />
      </mesh>
      <mesh
        geometry={nodes.Jacket_Suit_ChestPocket.geometry}
        material={materials.Suit_WineVelvetSolid}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      >
        <meshStandardMaterial {...TextureProps[material]} />
      </mesh>

      <mesh
        geometry={nodes.Jacket_Suit_PocketFlaps.geometry}
        material={materials.Suit_NavyWindowpane}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
        visible={PocketFlaps}
      >
        <meshStandardMaterial {...TextureProps[material]} />
      </mesh>
      <mesh
        geometry={nodes.Jacket_Suit_PocketWelts.geometry}
        material={materials.Suit_WineVelvetSolid}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      >
        <meshStandardMaterial {...TextureProps[material]} />
      </mesh>
      <mesh
        geometry={nodes.Jacket_Suit_Notch_NoVents.geometry}
        material={materials.Suit_NaturalStoneStripe}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      >
        <meshStandardMaterial {...TextureProps[material]} />
      </mesh>
      <mesh
        geometry={nodes.Jacket_Suit_Notch_Vents.geometry}
        material={materials.Suit_DarkBrownPlaid}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      >
        <meshStandardMaterial {...TextureProps[material]} />
      </mesh>
      <mesh
        geometry={nodes.Jacket_Suit__Peak_Vents.geometry}
        material={materials.b0b0b0}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      >
        <meshStandardMaterial {...TextureProps[material]} />
      </mesh>
      <mesh
        geometry={nodes.Jacket_Suit_Peak_NoVents.geometry}
        material={materials.b0b0b0}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      >
        <meshStandardMaterial {...TextureProps[material]} />
      </mesh>
      {/* <mesh geometry={nodes.Pants_Button.geometry} material={materials.Button} rotation={[-Math.PI / 2, 0, 0]} scale={0.025} />
      <mesh geometry={nodes.Pants_Suit_Button_Holes.geometry} material={materials.b0b0b0} rotation={[-Math.PI / 2, 0, 0]} scale={0.025} />
      <mesh geometry={nodes.Pants_Suit_Main.geometry} material={materials.Suit_OlivieSolidBrushedTwill} rotation={[-Math.PI / 2, 0, 0]} scale={0.025} />
      <mesh geometry={nodes.Pants_Suit_PocketWelts.geometry} material={materials.b0b0b0} rotation={[-Math.PI / 2, 0, 0]} scale={0.025} /> */}
      <mesh
        geometry={nodes.Shirt_Button.geometry}
        material={materials.Button}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Shirt_Button_Holes.geometry}
        material={materials.b0b0b0}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Shirt_Main.geometry}
        material={materials.ShirtFabric}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Vest_Button.geometry}
        material={materials.Button}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Vest_Lining.geometry}
        material={materials.b0b0b0}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Vest_Lining_Tag.geometry}
        material={materials.b0b0b0}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Vest_Strap.geometry}
        material={materials.b0b0b0}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Vest_Suit_Button_Holes.geometry}
        material={materials.b0b0b0}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Vest_Suit_Main.geometry}
        material={materials.Suit_NavyWindowpane}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      />
      {/* <mesh geometry={nodes.Shoes_Slim.geometry} material={materials.Shoes} rotation={[-Math.PI / 2, 0, 0]} scale={0.025} /> */}
      <mesh
        geometry={nodes.TieSlim.geometry}
        material={materials.Tie}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.JacketSlim_Button.geometry}
        material={materials.Button}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      >
        <meshStandardMaterial {...TextureProps[material]} />
      </mesh>
      <mesh
        geometry={nodes.JacketSlim_Lining_Tag.geometry}
        material={materials.b0b0b0}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      >
        <meshStandardMaterial {...TextureProps[material]} />
      </mesh>
      <mesh
        geometry={nodes.JacketSlim_Suit_Button_Holes.geometry}
        material={materials.b0b0b0}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      >
        <meshStandardMaterial {...TextureProps[material]} />
      </mesh>
      <mesh
        geometry={nodes.JacketSlim_Suit_Notch_NoVents.geometry}
        material={materials.Suit_WineVelvetSolid}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      >
        <meshStandardMaterial {...TextureProps[material]} />
      </mesh>
      <mesh
        geometry={nodes.JacketSlim_Suit_Notch_Vents.geometry}
        material={materials.b0b0b0}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      >
        <meshStandardMaterial {...TextureProps[material]} />
      </mesh>
      <mesh
        geometry={nodes.JacketSlim_Suit_Peak_NoVents.geometry}
        material={materials.b0b0b0}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      >
        <meshStandardMaterial {...TextureProps[material]} />
      </mesh>
      <mesh
        geometry={nodes.JacketSlim_Suit_Peak_Vents.geometry}
        material={materials.b0b0b0}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      >
        <meshStandardMaterial {...TextureProps[material]} />
      </mesh>
      {/* <mesh geometry={nodes.PantsSlim_Button.geometry} material={materials.Button} rotation={[-Math.PI / 2, 0, 0]} scale={0.025} />
      <mesh geometry={nodes.PantsSlim_Suit.geometry} material={materials.b0b0b0} rotation={[-Math.PI / 2, 0, 0]} scale={0.025} />
      <mesh geometry={nodes.PantsSlim_Suit_Button_Holes.geometry} material={materials.b0b0b0} rotation={[-Math.PI / 2, 0, 0]} scale={0.025} />
      <mesh geometry={nodes.PantsSlim_Suit_PocketWelts.geometry} material={materials.b0b0b0} rotation={[-Math.PI / 2, 0, 0]} scale={0.025} /> */}
      <mesh
        geometry={nodes.ShirtSlim.geometry}
        material={materials.ShirtFabric}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.ShirtSlim_Button.geometry}
        material={materials.Button}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.ShirtSlim_Button_Holes.geometry}
        material={materials.b0b0b0}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.VestSlim_Button.geometry}
        material={materials.Button}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.VestSlim_Lining_Tag.geometry}
        material={materials.b0b0b0}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.VestSlim_Strap.geometry}
        material={materials.b0b0b0}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.VestSlim_Suit.geometry}
        material={materials.b0b0b0}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.VestSlim_Suit_Button_Holes.geometry}
        material={materials.b0b0b0}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      />
      {/* <mesh geometry={nodes.Jacket_Button007.geometry} material={materials['Button.004']} position={[-1.056, -0.368, 0.175]} rotation={[-Math.PI / 2, 0, 0]} scale={0.025} /> */}
      {/* <mesh geometry={nodes.Jacket_Button008.geometry} material={materials['Button.005']} position={[-1.056, -0.368, 0.175]} rotation={[-Math.PI / 2, 0, 0]} scale={0.025} /> */}
    </group>
  );
}

useGLTF.preload("/models/newCostume.gltf");
