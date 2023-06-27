import { Index } from "@/components/screens";
import Head from "next/head";

function App() {
  return (
    <main>
      <Head>
        <meta
          name={"viewport"}
          content={"width=device-width, initial-scale=1"}
        />
        <meta charSet={"utf-8"} />
        <title>Color Code Guesser</title>
        <meta
          name={"description"}
          content={
            "Color Code Guesser - This is a simple game of guessing the color code of the displayed color."
          }
        />
      </Head>
      <Index></Index>
    </main>
  );
}

export default App;
