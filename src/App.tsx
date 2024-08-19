import { Outlet } from "react-router";
import "./App.css";
import ReloadPrompt from "./ReloadPrompt";

function App() {
  return (
    <main className="relative overflow-x-hidden h-dvh pb-5">
      <div className="m-5 p-0 min-h-[calc(100svh-2.5rem-26px)]">
        <Outlet />
        <ReloadPrompt />
      </div>
    </main>
  );
}

export default App;
