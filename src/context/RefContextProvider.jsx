import { useRef } from "react";
import RefContext from "./RefContext";

const RefContextProvider = ({ children }) => {
	const aboutRef = useRef();
	const worksRef = useRef();
	const socRef = useRef();
	const amRef = useRef();
	const nobodyRef = useRef();
	const duneRef = useRef();
	const seasonRef = useRef();

	return (
		<RefContext.Provider
			value={{
				aboutRef,
				worksRef,
				socRef,
				amRef,
				nobodyRef,
				duneRef,
				seasonRef,
			}}
		>
			{children}
		</RefContext.Provider>
	);
};

export default RefContextProvider;
