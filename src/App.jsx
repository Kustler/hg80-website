import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";
import { useContext, useState } from "react";
import Am from "./components/2am";
import About from "./components/About";
import Dune from "./components/Dune";
import FloatAudioPlayer from "./components/FloatAudioPlayer";
import Hero from "./components/Hero";
import MailPopUp from "./components/MailPopUp";
import Nobody from "./components/Nobody";
import Season from "./components/Season";
import Works from "./components/Works";
import RefContext from "./context/RefContext";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
	const { aboutRef } = useContext(RefContext);
	const [isMailOpen, setIsMailOpen] = useState(false);

	useGSAP(() => {
		gsap.set("#float-audio-player", {
			opacity: 0,
			bottom: -100,
			display: "none",
		});

		gsap.to("#float-audio-player", {
			opacity: 1,
			display: "block",
			bottom: 10,
			ease: "power1.inOut",
			scrollTrigger: {
				trigger: aboutRef.current,
				start: "top 20%",
				end: "bottom bottom",
				scroller: "body",
				toggleActions: "play none none reverse",
			},
		});
	});

	const handleMailPopUpOpen = () => {
		setIsMailOpen(true);
	};

	return (
		<ReactLenis
			root
			options={{
				duration: 0.9,
				smoothWheel: true,
				smoothTouch: true,
			}}
		>
			<div className="bg-[#141414]">
				{isMailOpen ? <MailPopUp setIsMailOpen={setIsMailOpen} /> : null}
				<Hero
					setIsMailOpen={setIsMailOpen}
					handleMailPopUpOpen={handleMailPopUpOpen}
				/>
				<div className="relative min-h-screen bg-cover">
					{/* Background overlay */}
					<div className="absolute inset-0 h-full w-full bg-[url('/bg.jpg')] bg-fixed bg-center opacity-15"></div>

					<div className="relative z-10 h-full w-full overflow-y-hidden max-lg:pb-20">
						<About />
						<Works />
						<Am />
						<Nobody />
						<Dune />
						<Season />
					</div>
				</div>

				{/* FLOAT AUDIO PLAYER */}
				<div
					id="float-audio-player"
					className="fixed bottom-0 z-50 w-[90%] text-6xl text-white max-md:left-1/2 max-md:-translate-x-1/2 md:left-4 md:w-[60%] lg:w-[50%] xl:left-16 xl:w-[35%]"
				>
					<FloatAudioPlayer />
				</div>
			</div>
		</ReactLenis>
	);
};

export default App;
