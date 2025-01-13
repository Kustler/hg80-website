import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { memo, useContext } from "react";
import RefContext from "../context/RefContext";
import Triangle from "./Icons/Triangle";

const About = () => {
	const { aboutRef, worksRef } = useContext(RefContext);

	useGSAP(() => {
		gsap.fromTo(
			".about-animate",
			{ opacity: 0, y: 100 },
			{
				opacity: 1,
				y: 0,
				duration: 0.7,
				ease: "power1.inOut",
				scrollTrigger: {
					trigger: aboutRef.current,
					start: "top 50%",
					end: "bottom bottom",
					scroller: "body",
					toggleActions: "play none none reverse",
				},
				stagger: 0.2,
			},
		);
	});
	return (
		<div
			ref={aboutRef}
			className="mx-auto flex max-w-screen-2xl flex-col justify-between gap-10 px-4 pb-2 pt-10 lg:gap-16 lg:pt-14 xl:min-h-screen xl:px-16"
		>
			<h2 className="ohno about-animate text-6xl font-bold text-white lg:text-9xl">
				About
			</h2>
			<div className="gap-5 xl:flex">
				<div className="hidden lg:w-[40%] xl:block"></div>
				<div className="helvetica about-animate flex flex-col items-start gap-5 text-white lg:gap-7 xl:w-[60%]">
					<p>
						My name is Edoardo Zullo, and I am a sound designer with a deep
						passion for music and storytelling through sound. I have always
						loved cinema and have been fascinated by soundtracks and immersive
						audio environments. I began studying sound design in 2018 at the
						International School of Comics in Turin and later completed my
						studies at MAS Academy in Rome in 2024, finishing my fourth year and
						earning 480 certified hours from Steinberg, the company behind
						Cubase.
					</p>
					<p>
						I have worked on numerous animated shorts for the Piedmont Region
						and currently collaborate with YouTube channels like NovaLectio and
						Oddity Islands, which produce documentaries and investigative
						reports.
					</p>
					<p>
						As of 2025, I work with Pepegas Team, a Milan-based company
						specializing in media production, including films, music videos,
						live events, docuseries, and multimedia entertainment products. Our
						collaborations include working with companies like Rai, Prime Video,
						and private clients.
					</p>
				</div>
			</div>
			<div className="flex w-full items-center about-animate justify-center">
				<button
					onClick={() =>
						worksRef.current.scrollIntoView({ behavior: "smooth" })
					}
					className="animate-bounce"
				>
					<Triangle />
				</button>
			</div>
		</div>
	);
};

export default memo(About);
