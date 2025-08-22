import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { memo, useContext } from "react";
import RefContext from "../context/RefContext";

const Season = () => {
	const { seasonRef } = useContext(RefContext);

	useGSAP(
		() => {
			gsap.fromTo(
				".season-animate",
				{ opacity: 0, y: 100 },
				{
					opacity: 1,
					y: 0,
					duration: 0.7,
					ease: "power1.inOut",
					scrollTrigger: {
						trigger: seasonRef.current,
						start: "top 50%",
						end: "bottom bottom",
						scroller: "body",
						toggleActions: "play none none reverse",
					},
					stagger: 0.2,
				},
			);
		},
		{ scope: seasonRef.current },
	);
	return (
		<div
			ref={seasonRef}
			className="mx-auto flex max-w-screen-2xl flex-col justify-between gap-10 px-4 pb-2 pt-10 lg:gap-16 lg:pt-16 xl:min-h-screen xl:px-16 xl:pt-0"
		>
			<div className="season-animate w-fit space-y-2 text-white">
				<h2 className="ohno text-6xl font-bold text-white lg:text-9xl">
					Season
				</h2>
				<div className="helvetica flex items-center justify-between gap-2">
					<p className="season-animate">5/5</p>{" "}
					<p className="season-animate">From Scavanger Studio</p>
				</div>
			</div>
			<div className="flex flex-col gap-10 xl:flex-row xl:items-center xl:justify-center">
				<div className="season-animate h-full xl:relative xl:min-h-[55vh] xl:w-[60%]">
					<iframe
						className="h-full w-full rounded-md min-h-64 sm:min-h-96 xl:absolute"
						src="https://www.youtube.com/embed/DRDogBkA6e0?si=nnFciZcNi29BogGg?modestbranding=1&rel=0"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
				</div>
				<div className="helvetica season-animate flex flex-col items-start gap-7 text-white xl:w-[40%]">
					<p>
						The soundtrack for this project was created entirely with
						synthesizers, from the melody to the drums. The sound design was
						intentionally kept organic to preserve the intimate essence of the
						work.
					</p>
				</div>
			</div>
			<div></div>
		</div>
	);
};

export default memo(Season);
