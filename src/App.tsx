import { useEffect, useState } from "react";
import { downloadYoutube } from "./youtubeDownloader";

function App() {
  const [loading, setLoading] = useState(false);
  const [inputError, setInputError] = useState<{ errorMessage: any }>({
    errorMessage: "",
  });
  const [mediaLink, setMediaLink] = useState("");
  const [isAudioOnly, setIsAudioOnly] = useState(false);

  useEffect(() => {
    console.log(isAudioOnly);
  }, [isAudioOnly]);

  const startDownload = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (mediaLink === "") {
        throw new Error("No Link Provided");
      }
      const urlValidator = new URL(mediaLink);

      if (urlValidator.host !== "www.youtube.com") {
        throw new Error(
          "Currently Only youtube is supported, be tuned for new updates",
        );
      }
      setInputError({ errorMessage: "" });
      setLoading(true);
      const link = await downloadYoutube(mediaLink, isAudioOnly);
      const url = document.createElement("a");
      url.href = link;
      url.setAttribute("download", "");
      console.log(url);
      url.click();
      setLoading(false);
      setMediaLink("");
    } catch (err) {
      setMediaLink("");
      setInputError({ errorMessage: err });
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-[100vh] font-sans appearance-none">
        <div className="m-5">
          <header>
            <img src="/yourTubeLogo.svg" alt="logo" />
          </header>
          <form
            className="flex justify-center"
            onSubmit={(e) => startDownload(e)}
          >
            <div className="relative w-full mr-1">
              <input
                onChange={(e) => setMediaLink(e.target.value)}
                placeholder={inputError.errorMessage}
                value={mediaLink}
                type="text"
                className={`placeholder:text-[#ff00007a]  w-full h-8 pl-20 pr-1 mr-1 font-bold border-2 border-gray-400 border-solid rounded-md outline-none outline-1 focus:outline-gray-400 ${inputError.errorMessage !== "" && "outline-red-600 outline-2"}`}
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
              type="submit"
              disabled={loading ? true : false}
            >
              {loading ? "loading..." : "Download"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default App;
