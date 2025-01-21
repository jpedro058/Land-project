import "../../App.css";
import Search from "../../assets/Search.png";

import { useState } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Suggestions from "../../components/suggestions";

function MainPage() {
  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState("");
  const [response, setResponse] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  async function searchWine() {
    console.log("searching for:", inputValue);
    if (inputValue === "") {
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: inputValue }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch response from backend");
      }

      const data = await response.json();
      console.log("Data from backend:", data);

      // Atualiza o estado com a resposta do backend
      setResponse(data.fullResponse);
      setSearch(data.question);
      setHasSearched(true);
    } catch (error) {
      console.error("Error fetching data from backend:", error);
      setResponse(
        "There was an error processing your request. Please try again."
      );
      setHasSearched(true);
    }
  }

  return (
    <div className="flex-1 min-h-screen">
      <Navbar />

      {!hasSearched ? (
        <div>
          <main className="flex justify-center items-center flex-col bg-[#F5F5F5] h-[calc(100vh-96px)]">
            <div className="text-center">
              <h1 className="text-[72px] font-bold">Everything about wine</h1>
              <h4 className="text-[#757575] text-3xl font-light">
                What would you like to know?
              </h4>
            </div>
            <div className="flex justify-center items-center mt-8 relative">
              <input
                type="text"
                className="border border-[#B3B3B3] text-[#B3B3B3] text-base rounded-full w-[500px] h-12 px-4 py-8"
                placeholder="A question, a curiosity, anything you would like to know"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setSearch(e.target.value);
                    searchWine();
                  }
                }}
              />
              <button
                type="button"
                onClick={searchWine}
                className=" px-4 h-12 rounded-lg absolute right-0"
              >
                <img src={Search} alt="search" />
              </button>
            </div>
          </main>

          <Suggestions />
        </div>
      ) : (
        <div className="">
          <div className="text-center bg-[#F5F5F5] pb-4">
            <h1 className="text-[72px] font-bold">Everything about wine</h1>
            <h4 className="text-[#757575] text-3xl font-light">
              What would you like to know?
            </h4>
          </div>

          <div className="p-16 space-y-8">
            <div className="px-12 space-y-4">
              <h1 className="text-2xl font-semibold">{search}</h1>
              <p className="text-[#757575]">{response}</p>
            </div>

            <div className="space-y-4 relative w-fit px-12 min-w-full">
              <p className="text-zinc-700">What would you like to know?</p>
              <input
                type="text"
                className="border border-[#B3B3B3] text-[#B3B3B3] text-base rounded-xl min-w-full h-12 px-4 py-8
                outline-none
              "
                placeholder="A question, a curiosity, anything you would like to know"
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setSearch(e.target.value);
                    searchWine();
                  }
                }}
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default MainPage;
