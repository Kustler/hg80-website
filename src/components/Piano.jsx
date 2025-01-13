import { memo, useEffect, useRef } from "react";
import { key, keyMap } from "../data/keymap";

const Piano = () => {
	const audioRefs = useRef([]);

	// Function to play preloaded audio
	const playAudio = (note) => {
		const audio = audioRefs.current[note];
		if (audio) {
			audio.currentTime = 0;
			audio.play();
		}
	};

	// Trigger keypress visual effects
	const triggerActiveEffect = (note) => {
		const keyElement = document.querySelector(`[data-note="${note}"]`);
		if (keyElement) {
			const isWhiteKey = keyElement.getAttribute("aria-label") === "white-key";
			const activeClass = isWhiteKey ? "bg-whiteKeyPress" : "bg-blackKeyPress";

			keyElement.classList.add(activeClass);
			setTimeout(() => keyElement.classList.remove(activeClass), 300);
		}
	};

	// Handle keyboard events
	const handleKeyDown = (event) => {
		const mappedKey = keyMap[event.key.toLowerCase()];
		if (mappedKey) {
			triggerActiveEffect(mappedKey.note);
			playAudio(mappedKey.note);
		}
	};

	useEffect(() => {
		// Preload audio files
		for (let i = 1; i <= 25; i++) {
			const audio = new Audio(`/keyboard/${i}.ogg`);
			audioRefs.current[i] = audio;
		}
	}, []);

	useEffect(() => {
		// Add event listener for keyboard controls
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	return (
		<div className="h-full w-full px-2 lg:px-16">
			<div className="h-full w-full border-2 border-b-0 border-white max-md:overflow-x-auto">
				<div className="grid h-full w-full grid-cols-[repeat(15,minmax(0,1fr))] gap-1 p-1 pb-0 max-md:min-w-[768px] xl:gap-2">
					{key.map((item) => (
						<div key={item.id} className="relative h-full w-full">
							{/* White key */}
							<div
								aria-label="white-key"
								data-note={item.white.note}
								onClick={() => playAudio(item.white.note)}
								className="h-full w-full cursor-pointer bg-white transition-colors duration-700 active:bg-whiteKeyPress"
							></div>

							{/* Black key */}
							{item.black && (
								<div
									aria-label="black-key"
									data-note={item.black.note}
									onClick={() => playAudio(item.black.note)}
									className="absolute -right-[0.125rem] top-0 z-50 h-[50%] w-[50%] translate-x-1/2 transform cursor-pointer bg-pianoGray transition-colors duration-700 active:bg-blackKeyPress xl:-right-1 xl:w-10"
								></div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default memo(Piano);
