import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import AudioContextProvider from "./context/AudioContextProvider.jsx";
import RefContextProvider from "./context/RefContextProvider.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RefContextProvider>
			<AudioContextProvider>
				<App />
			</AudioContextProvider>
		</RefContextProvider>
	</StrictMode>,
);
