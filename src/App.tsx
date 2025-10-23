import "./App.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

import Book from "./components/Book";

function App() {
  return (
    <div className="min-h-screen w-screen bg-[#FAFAFA] flex-col items-center justify-center pt-24 pl-100 pr-100">
      <div className="flex-col items-center justify-center">
        <p className="roboto-serif text-7xl text-center">
          Library of Monte Cristo
        </p>
        <p className="roboto text-3xl opacity-70 text-center">
          150 well-chosen book to create a solid ground knowledge
        </p>
      </div>

      <div className="flex gap-32 pt-24">
        <Book
          name="The Count of Monte Cristo"
          cover="https://m.media-amazon.com/images/I/811iBn28JdL.jpg"
        />

        <Book
          name="The Three Musketeers"
          cover="https://m.media-amazon.com/images/I/71TN3vVsHuL._UF1000,1000_QL80_.jpg"
        />

        <Book
          name="Les Miserables"
          cover="https://m.media-amazon.com/images/I/71L28YvPobL.jpg"
        />
      </div>
    </div>
  );
}

export default App;
