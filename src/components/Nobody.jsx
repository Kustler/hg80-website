import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { memo, useContext } from "react";
import RefContext from "../context/RefContext";
import Triangle from "./Icons/Triangle";

const Nobody = () => {
	const { nobodyRef, duneRef } = useContext(RefContext);

	useGSAP(
		() => {
			gsap.fromTo(
				".nobody-animate",
				{ opacity: 0, y: 100 },
				{
					opacity: 1,
					y: 0,
					duration: 0.7,
					ease: "power1.inOut",
					scrollTrigger: {
						trigger: nobodyRef.current,
						start: "top 50%",
						end: "bottom bottom",
						scroller: "body",
						toggleActions: "play none none reverse",
					},
					stagger: 0.2,
				},
			);
		},
		{ scope: nobodyRef.current },
	);
	return (
		<div
			ref={nobodyRef}
			className="mx-auto flex max-w-screen-2xl flex-col justify-between gap-10 px-4 pb-2 pt-10 lg:gap-16 lg:pt-16 xl:min-h-screen xl:px-16 xl:pt-0"
		>
			<div className="nobody-animate w-fit space-y-2 text-white">
				<h2 className="ohno text-6xl font-bold text-white lg:text-9xl">
					Nobody wants to die
				</h2>
				<div className="helvetica flex items-center justify-between gap-2">
					<p className="nobody-animate">2/4</p>{" "}
					<p className="nobody-animate">directed by Ayush Karki</p>
				</div>
			</div>
			<div className="flex flex-col gap-10 xl:flex-row xl:items-center xl:justify-center">
				<div className="nobody-animate h-full xl:relative xl:min-h-[55vh] xl:w-[60%]">
					<iframe
						className="h-full w-full rounded-md min-h-64 sm:min-h-96 xl:absolute"
						src="https://www.youtube.com/embed/gYcYV9wkcvo?si=bJGPyKvGUddF_vZy?modestbranding=1&rel=0"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
				</div>
				<div className="helvetica nobody-animate flex flex-col items-start gap-7 text-white xl:w-[40%]">
					<p>
						In this cinematic trailer, I reconstructed the environments, music,
						and sound design of the video game Nobody Wants to Die, creating a
						soundtrack that is partially orchestral and partially electronic.
						The sound design was crafted by blending organic samples with
						synthesizers.
					</p>
				</div>
			</div>
			<div className="flex w-full items-center justify-center">
				<button
					onClick={() => duneRef.current.scrollIntoView({ behavior: "smooth" })}
					className="animate-bounce"
				>
					<Triangle />
				</button>
			</div>
		</div>
	);
};

export default memo(Nobody);
