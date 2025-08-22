import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { memo, useContext } from "react";
import RefContext from "../context/RefContext";
import Triangle from "./Icons/Triangle";

const Dune = () => {
	const { duneRef, seasonRef } = useContext(RefContext);

	useGSAP(
		() => {
			gsap.fromTo(
				".dune-animate",
				{ opacity: 0, y: 100 },
				{
					opacity: 1,
					y: 0,
					duration: 0.7,
					ease: "power1.inOut",
					scrollTrigger: {
						trigger: duneRef.current,
						start: "top 50%",
						end: "bottom bottom",
						scroller: "body",
						toggleActions: "play none none reverse",
					},
					stagger: 0.2,
				},
			);
		},
		{ scope: duneRef.current },
	);
	return (
		<div
			ref={duneRef}
			className="mx-auto flex max-w-screen-2xl flex-col justify-between gap-10 px-4 pb-2 pt-10 lg:gap-16 lg:pt-16 xl:min-h-screen xl:px-16 xl:pt-0"
		>
			<div className="dune-animate w-fit space-y-2 text-white">
				<h2 className="ohno text-6xl font-bold text-white lg:text-9xl">
					Dune Awakening
				</h2>
				<div className="helvetica flex items-center justify-between gap-2">
					<p className="dune-animate">4/5</p>{" "}
					<p className="dune-animate">From a project of Funcom</p>
				</div>
			</div>
			<div className="flex flex-col gap-10 xl:flex-row xl:items-center xl:justify-center">
				<div className="dune-animate h-full xl:relative xl:min-h-[55vh] xl:w-[60%]">
					<iframe
						className="h-full min-h-64 w-full rounded-md sm:min-h-96 xl:absolute"
						src="https://www.youtube.com/embed/h4i3vfoIrLc?si=JSaAuGJ8mxx745lI?modestbranding=1&rel=0"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
				</div>
				<div className="helvetica dune-animate flex flex-col items-start gap-7 text-white xl:w-[40%]">
					<p>
						The soundtrack of this trailer is inspired by the score of the movie
						Dune. To create the sonic texture in the background, I used vocal
						samples that were modified and filtered to evoke an atmosphere that
						blends extraterrestrial and tribal elements simultaneously.
					</p>
				</div>
			</div>
			<div className="flex w-full items-center justify-center">
				<button
					onClick={() =>
						seasonRef.current.scrollIntoView({ behavior: "smooth" })
					}
					className="animate-bounce"
				>
					<Triangle />
				</button>
			</div>
		</div>
	);
};

export default memo(Dune);
