import { useState } from "react";
import { downloadYoutube } from "./youtubeDownloader";
import DownloadModal from "./DownloadModal";

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
      <div className="flex justify-center items-center h-[100vh] font-sans">
        <div className="">
          <header>
            <img src="/yourTubeLogo.svg" alt="logo" />
          </header>
          <div className="flex justify-center">
            <input type="text" className="w-full border font-bold h-2" />
            <button
              className="bg-white ml-2 p-1"
              onClick={() => startDownload()}
            >
              Download
            </button>
            {link !== "" && <DownloadModal link={link} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
