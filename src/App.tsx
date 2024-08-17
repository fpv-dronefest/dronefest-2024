import { Outlet } from "react-router";
import "./App.css";

function App() {
  return (
    <main className="relative overflow-x-hidden h-dvh pb-5">
      <div className="m-5 p-0 min-h-[calc(100svh-2.5rem-26px)]">
        <Outlet />
      </div>
    </main>
  );
}

export default App;
