import { Outlet } from "react-router";
import "./App.css";
import ReloadPrompt from "./ReloadPrompt";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  return (
    <main className="relative overflow-x-hidden h-dvh pb-5">
      <div className="m-5 p-0 min-h-[calc(100svh-2.5rem-26px)]">
        <AnimatePresence mode="popLayout">
          <motion.div>
            <Outlet />
            <ReloadPrompt />
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}

export default App;
