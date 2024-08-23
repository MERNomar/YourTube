import { useState } from "react";
import { downloadYoutube } from "./youtubeDownloader";
import Modal from "./components/Modal";

function App() {
  const [link, setLink] = useState("");

  const startDownload = async () => {
    const link = await downloadYoutube(
      "https://www.youtube.com/watch?v=C0DPdy98e4c",
    );
    setLink(link);
  };

  return (
    <>
      <div className="flex justify-center items-center h-[100vh] font-sans appearance-none">
        <div className="m-5">
          <header>
            <img src="/yourTubeLogo.svg" alt="logo" />
          </header>
          <div className="flex justify-center">
            <input
              type="text"
              className="w-full h-8 pl-1 pr-1 mr-1 font-bold border-2 border-gray-400 border-solid rounded-md outline-gray-600 "
            />
            <button
              className="pl-1 pr-1 font-medium transition-colors duration-75 bg-gray-400 rounded-md hover:bg-gray-500"
              onClick={() => startDownload()}
            >
              Download
            </button>
            {link !== "" && <Modal link={link} />}
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
