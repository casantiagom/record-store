import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { DiscogsProvider } from "./data/DiscogsData";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AlbumDetail from "./components/AlbumDetail";
import NotFound from "./components/NotFound";
import Cart from "./components/Cart";
import Login from "./components/Login";

function App() {
  return (
    <DiscogsProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="albums/:id" element={<AlbumDetail />} />
        <Route path="notfound/" element={<NotFound />} />
        <Route path="cart/" element={<Cart />} />
        <Route path="login/" element={<Login />} />
      </Routes>
    </DiscogsProvider>
  );
}

export default App;
