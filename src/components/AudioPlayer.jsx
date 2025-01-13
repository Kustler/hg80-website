import { memo, useContext } from "react";
import Marquee from "react-fast-marquee";
import AudioContext from "../context/AudioContext";
import Pause from "./Icons/Pause";
import Play from "./Icons/Play";
import Skip from "./Icons/Skip";

const AudioPlayer = () => {
	const {
		currentIndex,
		isPlaying,
		audioFiles,
		playAudio,
		pauseAudio,
		handleSkipNext,
		handleAudioEnd,
		audioRef,
	} = useContext(AudioContext);

	return (
		<div className="kyoshi flex h-20 w-full items-center justify-between rounded-md border-2 border-white px-2 py-3">
			<Marquee>
				<h2 className="ml-5 text-xl text-white">
					{audioFiles[currentIndex].name}
				</h2>
			</Marquee>
			<audio
				ref={audioRef}
				src={audioFiles[currentIndex].src}
				onEnded={handleAudioEnd}
				autoPlay={isPlaying}
			></audio>
			<div className="flex items-center justify-center gap-3 pl-2 transition-all duration-1000 ease-in-out lg:gap-2">
				{isPlaying ? (
					<button onClick={pauseAudio} className="h-fit w-fit">
						<Pause className={"size-6 lg:size-7"} />
					</button>
				) : (
					<button onClick={playAudio} className="h-fit w-fit">
						<Play className={"size-6 lg:size-7"} />
					</button>
				)}
				<button onClick={handleSkipNext} className="h-fit w-fit">
					<Skip className={"size-7 lg:size-9"} />
				</button>
			</div>
		</div>
	);
};

export default memo(AudioPlayer);
