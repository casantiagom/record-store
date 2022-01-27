import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { DiscogsProvider } from "./data/DiscogsData";

function App() {
  return (
    <DiscogsProvider>
      <Navbar />
      <Body />
    </DiscogsProvider>
  );
}

export default App;
