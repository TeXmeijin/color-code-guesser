import { Index } from "@/components/screens";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Color Code Guesser",
  description:
    "This is a simple game of guessing the color code of the displayed color.",
};

function App() {
  return (
    <main>
      <Index></Index>
    </main>
  );
}

export default App;
