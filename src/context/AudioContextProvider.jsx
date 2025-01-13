import { useRef, useState } from "react";
import { audioFiles } from "../data/data";
import AudioContext from "./AudioContext";
const AudioContextProvider = ({ children }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);
	const audioRef = useRef(null);
	const playAudio = () => {
		audioRef.current.play();
		setIsPlaying(true);
	};

	const pauseAudio = () => {
		audioRef.current.pause();
		setIsPlaying(false);
	};

	const handleSkipNext = () => {
		const nextIndex = (currentIndex + 1) % audioFiles.length;
		setCurrentIndex(nextIndex);
	};

	const handleAudioEnd = () => {
		handleSkipNext();
	};
	return (
		<AudioContext.Provider
			value={{
				currentIndex,
				setCurrentIndex,
				isPlaying,
				setIsPlaying,
				audioFiles,
				playAudio,
				pauseAudio,
				handleSkipNext,
				handleAudioEnd,
				audioRef,
			}}
		>
			{children}
		</AudioContext.Provider>
	);
};

export default AudioContextProvider;
