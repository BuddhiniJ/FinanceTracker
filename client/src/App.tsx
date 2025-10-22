import { useEffect, useState } from "react";
import { api } from "./services/api";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    api.get("/").then(res => setMessage(res.data));
  }, []);

  return (
    <div className="flex h-screen items-center justify-center bg-slate-900 text-white text-2xl">
      {message || "Loading..."}
    </div>
  );
}

export default App;
