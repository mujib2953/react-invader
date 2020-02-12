import React, { FC, Fragment, useState, useRef, useEffect } from 'react';

import Title from "./components/Title";
import Gamover from "./components/Gameover";
import ControlOverlay from './components/ControlOverlay';

import { InputManager } from "./utils/InputManager";

const WIDTH: number = window.innerWidth - 200;
const HEIGHT: number = window.innerHeight - 150;

const App: FC = () => {

	// MutableRefObject<HTMLCanvasElement
	const canvasRef = useRef<HTMLCanvasElement>(document.createElement("canvas"));
	// const canvasRef = useRef< MutableRefObject<HTMLCanvasElement>>();

	const [screen, setScreen] = useState({
		width: WIDTH,
		height: HEIGHT,
		ratio: window.devicePixelRatio || 1,
	});
	const [input, setInput] = useState<InputManager>(new InputManager());
	const [score, setScore] = useState<number>(0);
	const [context, setContext] = useState<CanvasRenderingContext2D | null>();

	useEffect(() => {

		const handleResize = (e: UIEvent) => {
			setScreen({
				...screen,
				width: window.innerWidth - 200,
				height: window.innerHeight - 150,
				ratio: window.devicePixelRatio || 1,	
			});
		};

		window.addEventListener("resize", handleResize, true);
		input.bindKey();
		
		if (canvasRef !== undefined && canvasRef.current !== undefined) {
			setContext(canvasRef.current.getContext("2d"));
		}
	}, [input, screen, canvasRef]);

	return (
		<Fragment>
			<Title />
			<Gamover />
			<ControlOverlay />
			<canvas
				ref = { canvasRef }
				width = { screen.width * screen.ratio }
				height = { screen.height * screen.ratio }
			/>
		</Fragment>
	);
}
export default App;