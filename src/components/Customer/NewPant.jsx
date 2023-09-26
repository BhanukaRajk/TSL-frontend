/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/models/NewSuit.gltf
*/

import { useGLTF, useTexture } from '@react-three/drei'
import { useSelector } from "react-redux";
import * as THREE from 'three'

import colors from '../../constants/colors.js'
import { selectJacket } from "../../store/slices/jacketCustomizationSlice.js";
import { selectRotation } from '../../store/slices/rotationHandleSlice.js';

export function NewPant(props) {
  const { nodes, materials } = useGLTF('/models/NewSuit.gltf')
  const material = useSelector(selectJacket).fabric;
  const backPocket = useSelector(selectJacket).backPocket;
  const trouser = useSelector(selectJacket).trouser;
  const pocketColor = useSelector(selectJacket).pocketColor;
  const buttonColor = useSelector(selectJacket).buttonColor;

  const propsRotation = useSelector(selectRotation);




  const TextureProps = {

    MAT0000000001: useTexture({
      // MEKA MATERIAL CODE EKA WENAS KARALA WENA NAME DANNA EPA!!
      map: "/textures/Poly - formal coat/color_map.jpg",
      normalMap: "/textures/Poly - formal coat/normal_map_opengl.jpg",
      roughnessMap: "/textures/Poly - formal coat/roughness_map.jpg",
      aoMap: "/textures/Poly - formal coat/ao_map.jpg",
    }),

    MAT0000000002: useTexture({
      map: "/textures/Fabric_Polyester_002_SD/Fabric_Polyester_002_basecolor.jpg",
      normalMap:
        "/textures/Fabric_Polyester_002_SD/Fabric_Polyester_002_normal.jpg",
      roughnessMap:
        "/textures/Fabric_Polyester_002_SD/Fabric_Polyester_002_roughness.jpg",
      aoMap:
        "/textures/Fabric_Polyester_002_SD/Fabric_Polyester_002_ambientOcclusion.jpg",
    }),

    MAT0000000003: useTexture({
      map: "/textures/Fabric_polyester_001_SD/Fabric_polyester_001_basecolor.jpg",
      normalMap:
        "/textures/Fabric_polyester_001_SD/Fabric_polyester_001_normal.jpg",
      roughnessMap:
        "/textures/Fabric_polyester_001_SD/Fabric_polyester_001_roughness.jpg",
      aoMap:
        "/textures/Fabric_polyester_001_SD/Fabric_polyester_001_ambientOcclusion.jpg",
    }),

    MAT0000000004: useTexture({
      map: "/textures/Fabric_011_SD/Fabric_011_COLOR.jpg",
      normalMap: "/textures/Fabric_011_SD/Fabric_011_NORM.jpg",
      roughnessMap:
        "/textures/Fabric_Polyester_002_SD/Fabric_Polyester_002_roughness.jpg",
      // roughnessMap: "/textures/Fabric_011_SD/Fabric_011_ROUGH.jpg",
      aoMap: "/textures/Fabric_011_SD/Fabric_011_OCC.jpg",
    }),
    MAT0000000006: useTexture({
      map: "/textures/Fabric_Burlap_003_SD/Fabric_Burlap_003_basecolor.jpg",
      normalMap: "/textures/Fabric_Burlap_003_SD/Fabric_Burlap_003_normal.jpg",
      roughnessMap:
        "/textures/Fabric_Burlap_003_SD/Fabric_Burlap_003_roughness.jpg",
      aoMap:
        "/textures/Fabric_Burlap_003_SD/Fabric_Burlap_003_ambientOcclusion.jpg",
    }),
    MAT0000000005: useTexture({
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

  TextureProps[material].map.repeat.set(3, 3);
  TextureProps[material].normalMap.repeat.set(3, 3);
  TextureProps[material].roughnessMap.repeat.set(3, 3);
  TextureProps[material].aoMap.repeat.set(3, 3);

  TextureProps[material].map.wrapS = TextureProps[material].map.wrapT =
    THREE.RepeatWrapping;
  TextureProps[material].normalMap.wrapS = TextureProps[
    material
  ].normalMap.wrapT = THREE.RepeatWrapping;
  TextureProps[material].roughnessMap.wrapS = TextureProps[
    material
  ].roughnessMap.wrapT = THREE.RepeatWrapping;
  TextureProps[material].aoMap.wrapS = TextureProps[material].aoMap.wrapT =
    THREE.RepeatWrapping;

  const pocketTextureProps = {
    MAT0000000001: useTexture({
      // MEKA MATERIAL CODE EKA WENAS KARALA WENA NAME DANNA EPA!!
      map: "/textures/Poly - formal coat/color_map.jpg",
      normalMap: "/textures/Poly - formal coat/normal_map_opengl.jpg",
      roughnessMap: "/textures/Poly - formal coat/roughness_map.jpg",
      aoMap: "/textures/Poly - formal coat/ao_map.jpg",
    }),

    MAT0000000002: useTexture({
      map: "/textures/Fabric_Polyester_002_SD/Fabric_Polyester_002_basecolor.jpg",
      normalMap:
        "/textures/Fabric_Polyester_002_SD/Fabric_Polyester_002_normal.jpg",
      roughnessMap:
        "/textures/Fabric_Polyester_002_SD/Fabric_Polyester_002_roughness.jpg",
      aoMap:
        "/textures/Fabric_Polyester_002_SD/Fabric_Polyester_002_ambientOcclusion.jpg",
    }),

    MAT0000000003: useTexture({
      map: "/textures/Fabric_polyester_001_SD/Fabric_polyester_001_basecolor.jpg",
      normalMap:
        "/textures/Fabric_polyester_001_SD/Fabric_polyester_001_normal.jpg",
      roughnessMap:
        "/textures/Fabric_polyester_001_SD/Fabric_polyester_001_roughness.jpg",
      aoMap:
        "/textures/Fabric_polyester_001_SD/Fabric_polyester_001_ambientOcclusion.jpg",
    }),

    MAT0000000004: useTexture({
      map: "/textures/Fabric_011_SD/Fabric_011_COLOR.jpg",
      normalMap: "/textures/Fabric_011_SD/Fabric_011_NORM.jpg",
      roughnessMap:
        "/textures/Fabric_Polyester_002_SD/Fabric_Polyester_002_roughness.jpg",
      // roughnessMap: "/textures/Fabric_011_SD/Fabric_011_ROUGH.jpg",
      aoMap: "/textures/Fabric_011_SD/Fabric_011_OCC.jpg",
    }),
    MAT0000000006: useTexture({
      map: "/textures/Fabric_Burlap_003_SD/Fabric_Burlap_003_basecolor.jpg",
      normalMap: "/textures/Fabric_Burlap_003_SD/Fabric_Burlap_003_normal.jpg",
      roughnessMap:
        "/textures/Fabric_Burlap_003_SD/Fabric_Burlap_003_roughness.jpg",
      aoMap:
        "/textures/Fabric_Burlap_003_SD/Fabric_Burlap_003_ambientOcclusion.jpg",
    }),
    MAT0000000005: useTexture({
      map: "/textures/Fabric_Lace_004/Fabric_Lace_004_basecolor.jpg",
      normalMap: "/textures/Fabric_Lace_004/Fabric_Lace_004_normal.jpg",
      roughnessMap: "/textures/Fabric_Lace_004/Fabric_Lace_004_roughness.jpg",
      aoMap: "/textures/Fabric_Lace_004/Fabric_Lace_004_ambientOcclusion.jpg",
    }),
    Fabric_015: useTexture({
      map: "/textures/Fabric_015/Fabric_015_COLOR.jpg",
      normalMap: "/textures/Fabric_015/Fabric_015_NORM.jpg",
      roughnessMap: "/textures/Fabric_Polyester_002_SD/Fabric_Polyester_002_roughness.jpg",
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
    <group {...props} dispose={null} position={[props.control.x, props.control.y, props.control.z]}
      scale={props.camCont.scale} rotation={[0, propsRotation, 0]}>
      {/* <mesh geometry={nodes.Jacket_Suit_Notch_Vents.geometry} material={materials.Suit_DarkBrownPlaid} position={[0, 0.021, 0.001]} rotation={[-Math.PI / 2, 0, 0]} scale={0.025} ></mesh>
      <mesh geometry={nodes.Jacket_Suit_Peak_NoVents.geometry} material={materials['b0b0b0.001']} position={[0.004, 0.013, 0.003]} rotation={[-Math.PI / 2, 0, 0]} scale={0.025} ></mesh>
      <mesh geometry={nodes.jacket_single_extra_Button.geometry} material={materials['Button.002']} position={[-1.183, 0.799, -0.276]} rotation={[-0.737, 0.962, 1.749]} scale={0.025} ></mesh>
      <mesh geometry={nodes.Jacket_6_button.geometry} material={materials.Button} position={[0, 0, 0.018]} rotation={[-Math.PI / 2, 0, 0]} scale={0.025} ></mesh>
      <mesh geometry={nodes.Jacket_Front_1_Button.geometry} material={materials['Button.005']} position={[0, 0, 0.005]} rotation={[-Math.PI / 2, 0, 0]} scale={0.025} ></mesh> */}
      <mesh geometry={nodes.PantsSlim_Suit.geometry} material={materials['b0b0b0.002']} rotation={[-Math.PI / 2, 0, 0]} scale={0.025} visible={trouser === 'no-vent' || trouser === null ? true : false} ><meshStandardMaterial {...TextureProps[material]} /></mesh>
      <mesh geometry={nodes.Pants_Button.geometry} material={materials['Button.006']} rotation={[-Math.PI / 2, 0, 0]} scale={0.025} visible={backPocket === 'with-btn' ? true : false}><meshStandardMaterial color={colors[buttonColor]} /></mesh>
      {/* <mesh geometry={nodes.Jacket_Suit_2_Button_Holes.geometry} material={materials['Suit_WineVelvetSolid.003']} position={[0, 0, 0.003]} rotation={[-Math.PI / 2, 0, 0]} scale={0.025} ></mesh>
      <mesh geometry={nodes.Jacket_6_Button_Holes.geometry} material={materials['b0b0b0.003']} position={[0, 0, 0.021]} rotation={[-Math.PI / 2, 0, 0]} scale={0.025} ></mesh>
      <mesh geometry={nodes.Jacket_Suit_PocketFlaps.geometry} material={materials['Suit_NavyWindowpane.003']} position={[0, 0, 0.023]} rotation={[-Math.PI / 2, 0, 0]} scale={0.025} ></mesh>
      <mesh geometry={nodes.Jacket_Suit_PocketLine.geometry} material={materials['Suit_WineVelvetSolid.004']} position={[0, 0, 0.025]} rotation={[-Math.PI / 2, 0, 0]} scale={0.025} ></mesh>
      <mesh geometry={nodes.Vest_Back_Strap.geometry} material={materials['b0b0b0.004']} position={[0, 0, -0.033]} rotation={[-Math.PI / 2, 0, 0]} scale={0.025} ></mesh>
      <mesh geometry={nodes.Vest_withColar.geometry} material={materials['Suit_NavyWindowpane.004']} position={[-0.001, -0.029, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.025} ></mesh> */}
      <mesh geometry={nodes.Pants_Back_PocketLine.geometry} material={materials['b0b0b0.005']} rotation={[-Math.PI / 2, 0, 0]} scale={0.025} visible={backPocket === 'no-btn' || backPocket === 'with-btn' ? true : false}><meshStandardMaterial {...(pocketColor === null ? TextureProps[material] : pocketTextureProps[pocketColor])} /></mesh>
      {/* <mesh geometry={nodes.Vest_WithNoColar.geometry} material={materials['b0b0b0.006']} position={[0.001, -0.022, -0.006]} rotation={[-Math.PI / 2, 0, 0]} scale={0.025} ></mesh> */}
      <mesh geometry={nodes.Pants_Normal.geometry} material={materials.Suit_OlivieSolidBrushedTwill} position={[-0.002, 0.008, 0.009]} rotation={[-Math.PI / 2, 0, 0]} scale={0.025} visible={trouser === 'center-vent' ? true : false}><meshStandardMaterial {...TextureProps[material]} /></mesh>
      {/* <mesh geometry={nodes.jacket_2_Button.geometry} material={materials['Button.007']} position={[-0.024, -0.084, -0.002]} rotation={[-Math.PI / 2, 0, 0]} scale={0.025} ></mesh>
      <mesh geometry={nodes.Jacket_ChestPocket.geometry} material={materials['Suit_WineVelvetSolid.005']} position={[0, 0, 0.009]} rotation={[-Math.PI / 2, 0, 0]} scale={0.025} ></mesh>
      <mesh geometry={nodes.jacket_Sleve_3_Button.geometry} material={materials['Button.001']} position={[0, 0, -0.001]} rotation={[-Math.PI / 2, 0, 0]} scale={0.025} ></mesh>
      <mesh geometry={nodes.jacket_Sleve_2_Button.geometry} material={materials['Button.003']} position={[0, 0, 0.001]} rotation={[-Math.PI / 2, 0, 0]} scale={0.025} ></mesh>
      <mesh geometry={nodes.Jacket_Sleve_4_Button.geometry} material={materials['Button.008']} position={[0, 0, 0.001]} rotation={[-Math.PI / 2, 0, 0]} scale={0.025} ></mesh>
      <mesh geometry={nodes.Jacket_Front_1_Button001.geometry} material={materials['Button.004']} position={[0, -0.087, 0.005]} rotation={[-Math.PI / 2, 0, 0]} scale={0.025} ></mesh> */}
    </group>
  )
}

useGLTF.preload('/models/NewSuit.gltf')
