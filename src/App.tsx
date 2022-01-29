import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { DiscogsProvider } from "./data/DiscogsData";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AlbumDetail from "./components/AlbumDetail";
function App() {
  return (
    <DiscogsProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="albums/:id" element={<AlbumDetail />} />
      </Routes>
    </DiscogsProvider>
  );
}

export default App;
