import { Provider } from "./src/context/BlogContext";
import Navigation from "./src/Navigation";

export default function App() {
	return (
		<Provider>
			<Navigation />
		</Provider>
	);
}
