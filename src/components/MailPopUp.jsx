import copy from "copy-text-to-clipboard";
import { Check, Copy, X } from "lucide-react";
import { useState } from "react";

const MailPopUp = ({ setIsMailOpen }) => {
	const [isCopied, setIsCopied] = useState(false);

	const handleCopy = (e) => {
		e.stopPropagation();
		copy("edoardo.zullo00@gmail.com");
		setIsCopied(true);
	};
	const handleClose = (e) => {
		e.stopPropagation();
		setIsMailOpen(false);
	};

	return (
		<div
			onClick={(e) => handleClose(e)}
			className="fixed z-[100] h-screen w-screen bg-black/40 transition-all duration-700 ease-in-out"
		>
			<div onClick={(e) => e.stopPropagation()} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-[#141414] p-4 shadow-xl md:p-10">
				{/* Close Button */}
				<button
					onClick={(e) => handleClose(e)}
					className="absolute -right-2 -top-2 grid size-5 place-items-center rounded-full bg-gray-500 text-black"
				>
					<X className="size-3" strokeWidth={3} />
				</button>

				<div className="mb-4 text-center text-white">
					<h2 className="text-lg font-semibold md:text-xl">Contact Us</h2>
					<p className="text-sm text-gray-400 md:text-base">
						Copy the email address below to reach out to us!
					</p>
				</div>

				<div className="flex w-full items-center justify-between gap-3 rounded-lg border border-gray-500 p-3 text-center text-white transition-all duration-300">
					<p>{isCopied ? "Copied!" : "edoardo.zullo00@gmail.com"}</p>
					<button onClick={(e) => handleCopy(e)}>
						{!isCopied ? (
							<Copy className="size-5" />
						) : (
							<Check className="size-5 text-green-500" />
						)}
					</button>
				</div>
			</div>
		</div>
	);
};

export default MailPopUp;
