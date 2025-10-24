import "./App.css";
import gsap from "gsap";
import bookList from "./assets/book-list.json";
import Book from "./components/Book";

import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface BookInfo {
  name: string;
  cover: string;
}
function App() {
  return (
    <div className="min-h-screen w-screen bg-[#FAFAFA] overflow-hidden">
      <div className="flex-col items-center justify-center pt-24">
        <p className="roboto-serif text-7xl text-center">
          Library of Monte Cristo
        </p>
        <p className="roboto text-3xl opacity-70 text-center">
          150 well-chosen book to create a solid ground knowledge
        </p>
      </div>

      <div className="w-screen min-h-screen flex flex-col justify-start items-center">
        <div className="flex justify-start gap-24 flex-wrap pt-24 max-w-[80%]">
          {bookList.map((book: BookInfo, index: number) => (
            <Book key={index} name={book.name} cover={book.cover} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
