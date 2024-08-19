import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Map from "./pages/Map";
import News from "./pages/News";
import "./index.css";
import Home from "./pages/Home";
import Rules from "./pages/Rules";
import Festival from "./pages/Festival";
import Timeline from "./pages/Timeline";
import Challenges from "./pages/Challenges";
import Sponsors from "./pages/Sponsors";
import Channels from "./pages/Channels";
import Community from "./pages/Community";

const baseUrl = "/dronefest-2024/";

createRoot(document.getElementById("app")!).render(
  <BrowserRouter basename={baseUrl}>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/festival" element={<Festival />} />
        <Route path="/news" element={<News />} />
        <Route path="/map" element={<Map />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/community" element={<Community />} />
        <Route path="/channels" element={<Channels />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
