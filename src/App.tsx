import React, { FC, Fragment, useState, useRef, useEffect, useCallback } from 'react';

import Title from "./components/Title";
import Gamover from "./components/Gameover";
import ControlOverlay from './components/ControlOverlay';

import { InputManager } from "./utils/InputManager";

const WIDTH: number = window.innerWidth - 200;
const HEIGHT: number = window.innerHeight - 150;

const App: FC = () => {

	const FPS: number = 30;
	const ship: any = null; // TODO: ship: any need to assign proper type
	const invader: string[] = []; // TODO: invader: string[] need to assign proper type
	const lastStateChange: number = 0; // TODO: need to check for what purpose it is used.

	let previousTime: number = 0;

	// --- created dummy canvas so that error inside useEffect hooks can be solved.
	const canvasRef = useRef<HTMLCanvasElement>(document.createElement("canvas"));

	const [screen, setScreen] = useState({
		width: WIDTH,
		height: HEIGHT,
		ratio: window.devicePixelRatio || 1,
	});
	const [input, setInput] = useState<InputManager>(new InputManager());
	const [score, setScore] = useState<number>(0);
	const [context, setContext] = useState<CanvasRenderingContext2D | null>();
	
	// --- called inside requestAnimationFrame, so it is calling it self infine time.
	const update = useCallback((time: number) => {
		console.log("Here :: ");

		const delta = time - previousTime;

		if (FPS && delta < (1000 / FPS) ) {
			return;
		}


		requestAnimationFrame(update);
	}, [previousTime]);

	// --- on resize of window
	const handleResize = useCallback((e: UIEvent) => {
		setScreen({
			...screen,
			width: window.innerWidth - 200,
			height: window.innerHeight - 150,
			ratio: window.devicePixelRatio || 1,	
		});
	}, [screen]);

	useEffect(() => {
		window.addEventListener("resize", handleResize, true);
		input.bindKey();

		if (canvasRef !== undefined && canvasRef.current !== undefined) {
			setContext(canvasRef.current.getContext("2d"));

			requestAnimationFrame(update);
		}
	}, [input, canvasRef, update, handleResize]);

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