import { memo, useContext } from "react";
import RefContext from "../context/RefContext";
import AudioPlayer from "./AudioPlayer";
import Call from "./Icons/Call";
import Insta from "./Icons/Insta";
import Mail from "./Icons/Mail";
import Triangle from "./Icons/Triangle";
import Piano from "./Piano";

const Hero = ({ handleMailPopUpOpen, setIsMailOpen }) => {
	const { aboutRef, worksRef } = useContext(RefContext);
	return (
		<div className="relative mx-auto flex h-svh min-h-svh w-full max-w-screen-2xl flex-col py-4 pb-11 lg:px-16 lg:py-8 lg:pb-14">
			<div className="flex h-full w-full flex-col justify-between gap-4 rounded-xl border-2 border-white shadow-heroBorder max-lg:pt-4 md:px-6 lg:gap-5 lg:px-0">
				<div className="flex h-[60%] w-full shrink-0 flex-col-reverse justify-center gap-4 lg:gap-5 lg:px-16 lg:pt-8 xl:h-[50%] xl:flex-row">
					<div className="grid h-full grid-cols-2 gap-4 px-2 lg:gap-5 lg:px-0 xl:w-[30%]">
						<a href="tel:+39 346 871 2522">
							<button className="group col-span-1 flex h-full w-full items-center justify-center rounded-md border-2 border-white transition-all duration-500 hover:border-[#FF0000]">
								<Call
									className={
										"size-7 transition-all duration-500 group-hover:drop-shadow-redGlow md:size-12 xl:size-14"
									}
								/>
							</button>
						</a>
						<a
							href="mailto:edoardo.zullo00@gmail.com"
							target="_blank"
							className="lg:hidden"
						>
							<button className="group col-span-1 flex h-full w-full items-center justify-center rounded-md border-2 border-white transition-all duration-500 hover:border-[#FF0000]">
								<Mail
									className={
										"size-7 transition-all duration-500 group-hover:drop-shadow-redGlow md:size-12 xl:size-14"
									}
								/>
							</button>
						</a>

						<button
							onClick={handleMailPopUpOpen}
							className="group col-span-1 hidden h-full w-full items-center justify-center rounded-md border-2 border-white transition-all duration-500 hover:border-[#FF0000] lg:flex"
						>
							<Mail
								className={
									"size-7 transition-all duration-500 group-hover:drop-shadow-redGlow md:size-12 xl:size-14"
								}
							/>
						</button>

						<a href="https://www.instagram.com/edoardo_zullo" target="_blank">
							<button className="group flex h-full w-full items-center justify-center rounded-md border-2 border-white transition-all duration-500 hover:border-[#FF0000]">
								<Insta
									className={
										"size-7 transition-all duration-500 group-hover:drop-shadow-redGlow md:size-12 xl:size-14"
									}
								/>
							</button>
						</a>
						<button
							onClick={() =>
								worksRef.current.scrollIntoView({ behavior: "smooth" })
							}
							className="flex h-full w-full items-center justify-center rounded-md border-2 border-white text-2xl font-medium text-white transition-all duration-500 hover:border-[#FF0000] hover:drop-shadow-redGlow lg:text-3xl"
						>
							WORKS
						</button>
					</div>
					<div className="flex h-full flex-col justify-center gap-4 px-2 max-lg:pb-0 lg:gap-5 lg:px-0 lg:pl-0 xl:w-[70%]">
						<div className="flex h-full items-center justify-center rounded-md border-2 border-white">
							<h1 className="kyoshi text-5xl text-white md:text-7xl lg:text-9xl">
								HG80
							</h1>
						</div>
						<AudioPlayer />
					</div>
				</div>
				<div className="h-[40%] w-full xl:h-[50%]">
					<Piano />
				</div>
			</div>

			<div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center justify-center">
				<button
					onClick={() =>
						aboutRef.current.scrollIntoView({ behavior: "smooth" })
					}
					className="animate-bounce"
				>
					<Triangle />
				</button>
			</div>
		</div>
	);
};

export default memo(Hero);
