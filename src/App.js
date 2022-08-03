import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Planets from "./Planets";

const queryClient = new QueryClient();

export default function App() {
  const [page, setPage] = useState(1);
  return (
    <>
      <button onClick={() => setPage(1)}>page 1</button>
      <button onClick={() => setPage(2)}>page 2</button>
      <button onClick={() => setPage(3)}>page 3</button>
      <QueryClientProvider client={queryClient}>
        <Planets page={page} />
      </QueryClientProvider>
    </>
  );
}
