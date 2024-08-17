import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Map from "./pages/Map";
import News from "./components/News";
import "./index.css";
import Home from "./pages/Home";
import Rules from "./pages/Rules";
import { AnimatePresence, motion } from "framer-motion";
import Festival from "./pages/Festival";
import Timeline from "./pages/Timeline";
import Challenges from "./pages/Challenges";

const baseUrl = "/dronefest-2024/";

createRoot(document.getElementById("app")!).render(
  <BrowserRouter basename={baseUrl}>
    <AnimatePresence mode="popLayout">
      <motion.div>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/festival" element={<Festival />} />
            <Route path="/news" element={<News />} />
            <Route path="/map" element={<Map />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/challenges" element={<Challenges />} />
          </Route>
        </Routes>
      </motion.div>
    </AnimatePresence>
  </BrowserRouter>,
);
