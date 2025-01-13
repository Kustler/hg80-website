import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { memo, useContext } from "react";
import RefContext from "../context/RefContext";
import Triangle from "./Icons/Triangle";

const Works = () => {
	const { worksRef, amRef } = useContext(RefContext);

	useGSAP(() => {
		gsap.fromTo(
			".works-animate",
			{ opacity: 0, y: 100 },
			{
				opacity: 1,
				y: 0,
				duration: 0.7,
				ease: "power1.inOut",
				scrollTrigger: {
					trigger: worksRef.current,
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
			ref={worksRef}
			className="mx-auto flex max-w-screen-2xl flex-col justify-between gap-10 px-4 pb-2 pt-10 lg:gap-16 lg:pt-14 xl:min-h-screen xl:px-16"
		>
			<h2 className="ohno works-animate text-6xl font-bold text-white lg:text-9xl">
				Works
			</h2>
			<div className="gap-5 xl:flex">
				<div className="hidden lg:w-[40%] xl:block"></div>
				<div className="helvetica works-animate flex flex-col items-start gap-5 text-white lg:gap-7 xl:w-[60%]">
					<p>
						I chose these works because each of them showcases a different skill
						of mine in composition and sound design, ranging from pure
						orchestral to the exclusive use of synthesizers.
					</p>
					<p>
						All of these pieces are part of the archive of my university
						projects, and all the videos in question are resound. Therefore, I
						composed the score for each one from scratch, interpreting them
						according to my style and personal vision. External projects I have
						completed or are currently working on are protected by NDAs and
						cannot be included in this portfolio.
					</p>
				</div>
			</div>
			<div className="works-animate flex w-full items-center justify-center">
				<button
					onClick={() => amRef.current.scrollIntoView({ behavior: "smooth" })}
					className="animate-bounce"
				>
					<Triangle />
				</button>
			</div>
		</div>
	);
};

export default memo(Works);
