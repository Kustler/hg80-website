import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { memo, useContext } from "react";
import RefContext from "../context/RefContext";
import Triangle from "./Icons/Triangle";

const Soc = () => {
	const { socRef, amRef } = useContext(RefContext);

	useGSAP(
		() => {
			gsap.fromTo(
				".soc-animate",
				{ opacity: 0, y: 100 },
				{
					opacity: 1,
					y: 0,
					duration: 0.7,
					ease: "power1.inOut",
					scrollTrigger: {
						trigger: socRef.current,
						start: "top 50%",
						end: "bottom bottom",
						scroller: "body",
						toggleActions: "play none none reverse",
					},
					stagger: 0.2,
				},
			);
		},
		{ scope: socRef.current },
	);
	return (
		<div
			ref={socRef}
			className="mx-auto flex max-w-screen-2xl flex-col justify-between gap-10 px-4 pb-2 pt-10 lg:gap-16 lg:pt-16 xl:min-h-screen xl:px-16 xl:pt-0"
		>
			<div className="am-animate w-fit space-y-2 text-white">
				<h2 className="ohno text-6xl font-bold text-white lg:text-9xl">
					Social History
				</h2>
				<div className="helvetica flex items-center justify-between gap-2">
					<p className="am-animate">1/5</p>{" "}
					<p className="am-animate">directed by Gaetano Cunzio</p>
				</div>
			</div>
			<div className="flex flex-col gap-10 xl:flex-row xl:items-center xl:justify-center">
				<div className="am-animate h-full xl:relative xl:min-h-[55vh] xl:w-[60%]">
					<iframe
						className="h-full w-full rounded-md min-h-64 sm:min-h-96 xl:absolute"
						src="https://www.youtube.com/watch?v=2rxE5qsWcI0"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
				</div>
				<div className="helvetica am-animate flex flex-col items-start gap-7 text-white xl:w-[40%]">
					<p>
					These are some images from the latest project I contributed to: Social Hisory, a documentary series that explores the Italian digital scene and the stories of those who began their careers on YouTube in the early 2000s. The series is available on RAI Play, the online platform of Italy’s national broadcaster, and recieved significant attention, remaining on the Top Ten Most Watched for three consecutive weeks.
					Within the production team, I was responsible for location sound recording as well as post-production audio work, including mixing in 2.0 for television's audio systems, and 5.1 for dolby surround, sound design and dialogues cleaning.
					</p>
				</div>
			</div>
			<div className="flex w-full items-center justify-center">
				<button
					onClick={() =>
						amRef.current.scrollIntoView({ behavior: "smooth" })
					}
					className="animate-bounce"
				>
					<Triangle />
				</button>
			</div>
		</div>
	);
};

export default memo(Soc);
