import { Select } from '@chakra-ui/react'
import { useState } from "react";

import FullShoulderWidth from "../../assets/images/measurements/men_size_1 (1).jpg";
import Sleeves from "../../assets/images/measurements/men_size_2.jpg"
import FullChest from "../../assets/images/measurements/men_size_3.jpg"
import Waist from "../../assets/images/measurements/men_size_4.jpg"
import Hips from "../../assets/images/measurements/men_size_5.jpg"
import FrontShoulderWidth from "../../assets/images/measurements/men_size_6.jpg"
import BackShoulderWidth from "../../assets/images/measurements/men_size_7.jpg"
import FrontJacketLength from "../../assets/images/measurements/men_size_8.jpg"
import Neck from "../../assets/images/measurements/men_size_9.jpg"
import TROUSER_WAIST from "../../assets/images/measurements/men_size_10.jpg";
import CROTCH from "../../assets/images/measurements/men_size_11.jpg"
import THIGH from "../../assets/images/measurements/men_size_12.jpg"
import TROUSER_LENGTH from "../../assets/images/measurements/men_size_13.jpg"
import CUFF from "../../assets/images/measurements/men_size_14.jpg"
import MeasurementBlock from "../../components/Customer/MeasurementBlock";
import { combinedMeasurements } from "../../constants/index"


const CustomizeMeasurements = () => {

	const [measurementType, setMeasurementType] = useState('')

	const [selectedSize, setSelectedSize] = useState('S');
	const [selectedUnit, setSelectedUnit] = useState('inch');



	return (
		<div className="w-full min-h-[calc(100vh-64px)]">

			{/* Give Sizes Later */}
			<div className="bg-black hover:opacity-80 text-white px-4 py-4 rounded-lg m-5 font-extrabold">Give Sizes Later</div>

			{/* Current Sizes */}
			<div
				className="bg-black hover:opacity-80 text-white px-4 py-4 rounded-lg m-5 font-extrabold"
				onClick={() => setMeasurementType(measurementType === "current-sizes" ? "" : "current-sizes")}
			>
				Current Sizes
			</div>
			<div className={`mt-4 transition-opacity ease-in-out duration-1000 flex flex-col ${measurementType === "current-sizes" ? 'opacity-100' : 'opacity-0 hidden'
				}`}>
				<div className='flex justify-center m-5'>
					<Select
						placeholder='Select Unit'
						width='400px'
					>
						<option value='Inch'>Inch</option>
						<option value='Centimeters'>Centimeters</option>
					</Select>
				</div>
				<div className='flex flex-wrap justify-center gap-4'>

					<MeasurementBlock image={FullShoulderWidth} description='Measure from the end of the right shoulder to the end of the left shoulder. We define the "End of the Shoulder" as where the horizontal plane of the shoulder intersects thevertical plane of the arm' header="Full Shoulder Width" />
					<MeasurementBlock image={Sleeves} description='The "Pinch" of the hand is found where the base of the thumb and the base of the index finger intersect' header="Sleeves" />
					<MeasurementBlock image={FullChest} description='Measure around the chest and body at its fullest part (typically right under the armpits and shoulder blades, right across the nipples). Hold the tape against the body tight enough so that it does not slip down, but not so tight that it restricts breathing. It should be "snug". Make sure the tape is horizontal and theperson`s arms are by their side; then take a normal breath and measure. Do not puff out your chest.' header="Full Chest" />
					<MeasurementBlock image={Waist} description='Measure around the fullest part of the waist/stomach or right below your bottom ribs, whichever is greater.' header="Waist" />
					<MeasurementBlock image={Hips} description='Measure around the fullest part of your hips and buttocks.' header="Hips/Seat" />
					<MeasurementBlock image={FrontShoulderWidth} description='With the person`s arms by their side, measure across the front of the chest. Start at the front of the right armpit, continue measuring across the nipples, and then stop at the front of the left armpit. Do not measure under the arms.' header="Front Shoulder Width" />
					<MeasurementBlock image={BackShoulderWidth} description='With the person`s arms by their side, measure across the back. Start at the back of the right armpit, continue measuring across the shoulder blades, and then stop at the back of the left armpit. Do not measure under the arms.' header="Back Shoulder Width" />
					<MeasurementBlock image={FrontJacketLength} description='Measure straight down the front from the base of the neck (right or left side) to the point level with your thumb knuckle.or till the length you would like your jacket' header="Front Jacket Length" />
					<MeasurementBlock image={Neck} description='The tape should be comfortably touching the skin, with enough room so that you do not feel restricted.' header="Neck" />
					<MeasurementBlock image={TROUSER_WAIST} description='Measure around your waist at the level where you would normally wear your pant`s belt. With the tape measure snug around your waist, relax, and take the measurement. Don`t be alarmed if this measurement seems larger than expected; off-the-rack pants are normally labeled as being smaller than what they really are.' header="Trouser Waist" />
					<MeasurementBlock image={CROTCH} description="Measure from the front top of the pant's waistband to the back top of the pant's waistband." header="Crotch" />
					<MeasurementBlock image={THIGH} description="Measure around your thigh at its widest point. You need measure only one side." header="Thigh" />
					<MeasurementBlock image={TROUSER_LENGTH} description="Measure from the top of your pant’s waistband to the floor along the outside of your leg. Make sure the tape is tight, that you are standing straight, and then measure." header="Trouser Length" />
					<MeasurementBlock image={CUFF} description="Measure width around cuff as shown." header="Cuff" />
				</div>
				<button className="bg-black text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">
					Save
				</button>
			</div>




			{/* Standard Sizes */}

			<div className="bg-black hover:opacity-80 text-white px-4 py-4 rounded-lg m-5 font-extrabold" onClick={() => setMeasurementType(measurementType === "Standard" ? "" : 'Standard')}>Standard Sizes</div>
			<div className={`mt-4 transition-opacity ease-in-out duration-1000 flex flex-col ${measurementType === "Standard" ? 'opacity-100' : 'opacity-0 hidden'
				}`}>
				<div className='flex justify-around m-5'>
					<Select
						placeholder='Select Unit'
						width='400px'
						value={selectedUnit} onChange={(event) => setSelectedUnit(event.target.value)}
					>
						<option value='inch'>Inch</option>
						<option value='centi'>Centimeters</option>
					</Select>

					<Select
						placeholder='Select Size'
						width='400px'
						value={selectedSize} onChange={(event) => setSelectedSize(event.target.value)}
					>
						<option value='XS'>XS</option>
						<option value='S'>S</option>
						<option value='M'>M</option>
						<option value='L'>L</option>
						<option value='XL'>XL</option>
						<option value='XXL'>XXL</option>
					</Select>
				</div>
				<div className='flex flex-wrap justify-center gap-4'>

					<MeasurementBlock image={FullShoulderWidth} description='Measure from the end of the right shoulder to the end of the left shoulder. We define the "End of the Shoulder" as where the horizontal plane of the shoulder intersects thevertical plane of the arm' header="Full Shoulder Width" value={combinedMeasurements[selectedSize]?.[selectedUnit]?.jacket?.FullShoulderWidth} />
					<MeasurementBlock image={Sleeves} description='The "Pinch" of the hand is found where the base of the thumb and the base of the index finger intersect' header="Sleeves" value={combinedMeasurements[selectedSize]?.[selectedUnit]?.jacket?.Sleeves} />
					<MeasurementBlock image={FullChest} description='Measure around the chest and body at its fullest part (typically right under the armpits and shoulder blades, right across the nipples). Hold the tape against the body tight enough so that it does not slip down, but not so tight that it restricts breathing. It should be "snug". Make sure the tape is horizontal and theperson`s arms are by their side; then take a normal breath and measure. Do not puff out your chest.' header="Full Chest" value={combinedMeasurements[selectedSize]?.[selectedUnit]?.jacket?.FullChest} />
					<MeasurementBlock image={Waist} description='Measure around the fullest part of the waist/stomach or right below your bottom ribs, whichever is greater.' header="Waist" value={combinedMeasurements[selectedSize]?.[selectedUnit]?.jacket?.Waist} />
					<MeasurementBlock image={Hips} description='Measure around the fullest part of your hips and buttocks.' header="Hips/Seat" value={combinedMeasurements[selectedSize]?.[selectedUnit]?.jacket?.Hips} />
					<MeasurementBlock image={FrontShoulderWidth} description='With the person`s arms by their side, measure across the front of the chest. Start at the front of the right armpit, continue measuring across the nipples, and then stop at the front of the left armpit. Do not measure under the arms.' header="Front Shoulder Width" value={combinedMeasurements[selectedSize]?.[selectedUnit]?.jacket?.FrontShoulderWidth} />
					<MeasurementBlock image={BackShoulderWidth} description='With the person`s arms by their side, measure across the back. Start at the back of the right armpit, continue measuring across the shoulder blades, and then stop at the back of the left armpit. Do not measure under the arms.' header="Back Shoulder Width" value={combinedMeasurements[selectedSize]?.[selectedUnit]?.jacket?.BackShoulderWidth} />
					<MeasurementBlock image={FrontJacketLength} description='Measure straight down the front from the base of the neck (right or left side) to the point level with your thumb knuckle.or till the length you would like your jacket' header="Front Jacket Length" value={combinedMeasurements[selectedSize]?.[selectedUnit]?.jacket?.FrontJacketLength} />
					<MeasurementBlock image={Neck} description='The tape should be comfortably touching the skin, with enough room so that you do not feel restricted.' header="Neck" value={combinedMeasurements[selectedSize]?.[selectedUnit]?.jacket?.Neck} />
					<MeasurementBlock image={TROUSER_WAIST} description='Measure around your waist at the level where you would normally wear your pant`s belt. With the tape measure snug around your waist, relax, and take the measurement. Don`t be alarmed if this measurement seems larger than expected; off-the-rack pants are normally labeled as being smaller than what they really are.' header="Trouser Waist" value={combinedMeasurements[selectedSize]?.[selectedUnit]?.trouser?.TrouserWaist} />
					<MeasurementBlock image={CROTCH} description="Measure from the front top of the pant's waistband to the back top of the pant's waistband." header="Crotch" value={combinedMeasurements[selectedSize]?.[selectedUnit]?.trouser?.Crotch} />
					<MeasurementBlock image={THIGH} description="Measure around your thigh at its widest point. You need measure only one side." header="Thigh" value={combinedMeasurements[selectedSize]?.[selectedUnit]?.trouser?.Thigh} />
					<MeasurementBlock image={TROUSER_LENGTH} description="Measure from the top of your pant’s waistband to the floor along the outside of your leg. Make sure the tape is tight, that you are standing straight, and then measure." header="Trouser Length" value={combinedMeasurements[selectedSize]?.[selectedUnit]?.trouser?.TrouserLength} />
					<MeasurementBlock image={CUFF} description="Measure width around cuff as shown." header="Cuff" value={combinedMeasurements[selectedSize]?.[selectedUnit]?.trouser?.Cuff} />
				</div>
				<button className="bg-black text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">
					Save
				</button>
			</div>

			{/* Custom Sizes */}
			<div
				className="bg-black hover:opacity-80 text-white px-4 py-4 rounded-lg m-5 font-extrabold"
				onClick={() => setMeasurementType(measurementType === "custom" ? "" : "custom")}
			>
				Custom Sizes
			</div>
			<div className={`mt-4 transition-opacity ease-in-out duration-1000 flex flex-col ${measurementType === "custom" ? 'opacity-100' : 'opacity-0 hidden'
				}`}>
				<div className='flex justify-center m-5'>
					<Select
						placeholder='Select Unit'
						width='400px'
					>
						<option value='inch'>Inch</option>
						<option value='centi'>Centimeters</option>
					</Select>
				</div>
				<div className='flex flex-wrap justify-center gap-4'>

					<MeasurementBlock image={FullShoulderWidth} description='Measure from the end of the right shoulder to the end of the left shoulder. We define the "End of the Shoulder" as where the horizontal plane of the shoulder intersects thevertical plane of the arm' header="Full Shoulder Width" />
					<MeasurementBlock image={Sleeves} description='The "Pinch" of the hand is found where the base of the thumb and the base of the index finger intersect' header="Sleeves" />
					<MeasurementBlock image={FullChest} description='Measure around the chest and body at its fullest part (typically right under the armpits and shoulder blades, right across the nipples). Hold the tape against the body tight enough so that it does not slip down, but not so tight that it restricts breathing. It should be "snug". Make sure the tape is horizontal and theperson`s arms are by their side; then take a normal breath and measure. Do not puff out your chest.' header="Full Chest" />
					<MeasurementBlock image={Waist} description='Measure around the fullest part of the waist/stomach or right below your bottom ribs, whichever is greater.' header="Waist" />
					<MeasurementBlock image={Hips} description='Measure around the fullest part of your hips and buttocks.' header="Hips/Seat" />
					<MeasurementBlock image={FrontShoulderWidth} description='With the person`s arms by their side, measure across the front of the chest. Start at the front of the right armpit, continue measuring across the nipples, and then stop at the front of the left armpit. Do not measure under the arms.' header="Front Shoulder Width" />
					<MeasurementBlock image={BackShoulderWidth} description='With the person`s arms by their side, measure across the back. Start at the back of the right armpit, continue measuring across the shoulder blades, and then stop at the back of the left armpit. Do not measure under the arms.' header="Back Shoulder Width" />
					<MeasurementBlock image={FrontJacketLength} description='Measure straight down the front from the base of the neck (right or left side) to the point level with your thumb knuckle.or till the length you would like your jacket' header="Front Jacket Length" />
					<MeasurementBlock image={Neck} description='The tape should be comfortably touching the skin, with enough room so that you do not feel restricted.' header="Neck" />
					<MeasurementBlock image={TROUSER_WAIST} description='Measure around your waist at the level where you would normally wear your pant`s belt. With the tape measure snug around your waist, relax, and take the measurement. Don`t be alarmed if this measurement seems larger than expected; off-the-rack pants are normally labeled as being smaller than what they really are.' header="Trouser Waist" />
					<MeasurementBlock image={CROTCH} description="Measure from the front top of the pant's waistband to the back top of the pant's waistband." header="Crotch" />
					<MeasurementBlock image={THIGH} description="Measure around your thigh at its widest point. You need measure only one side." header="Thigh" />
					<MeasurementBlock image={TROUSER_LENGTH} description="Measure from the top of your pant’s waistband to the floor along the outside of your leg. Make sure the tape is tight, that you are standing straight, and then measure." header="Trouser Length" />
					<MeasurementBlock image={CUFF} description="Measure width around cuff as shown." header="Cuff" />
				</div>
				<button className="bg-black text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">
					Save
				</button>
			</div>

		</div>

	);
};



export default CustomizeMeasurements;
