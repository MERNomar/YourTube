import { useEffect, useState } from "react";
import { downloadYoutube } from "./youtubeDownloader";
import Modal from "./components/Modal";

function App() {
  const [downloadLink, setDownloadLink] = useState("");
  const [mediaLink, setMediaLink] = useState("");
  const [isAudioOnly, setIsAudioOnly] = useState(false);
  useEffect(() => {
    console.log(isAudioOnly);
  }, [isAudioOnly]);
  const startDownload = async () => {
    const link = await downloadYoutube(mediaLink, isAudioOnly);
    setDownloadLink(link);
  };

  return (
    <>
      <div className="flex justify-center items-center h-[100vh] font-sans appearance-none">
        <div className="m-5">
          <header>
            <img src="/yourTubeLogo.svg" alt="logo" />
          </header>
          <div className="flex justify-center">
            <div className="relative w-full mr-1">
              <input
                onChange={(e) => setMediaLink(e.target.value)}
                value={mediaLink}
                type="text"
                className="w-full h-8 pl-20 pr-1 mr-1 font-bold border-2 border-gray-400 border-solid rounded-md outline-none outline-1 focus:outline-gray-400"
              />
              <select
                className="absolute top-[7%]  left-[5px] border-solid border-2 border-gray-400"
                name="is-audio"
                id="is-audio"
                onChange={(e) => {
                  if (e.target.value === "Video") setIsAudioOnly(false);
                  if (e.target.value === "Audio") setIsAudioOnly(true);
                }}
              >
                <option value={"Video"}>Video</option>
                <option value={"Audio"}>Audio</option>
              </select>
            </div>
            <button
              className="pl-1 pr-1 font-medium transition-colors duration-75 bg-gray-400 rounded-md hover:bg-gray-500"
              onClick={() => startDownload()}
            >
              Download
            </button>
            {downloadLink !== "" && <Modal link={downloadLink} />}
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
