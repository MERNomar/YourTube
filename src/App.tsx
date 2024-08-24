import { useEffect, useState } from "react";
import { downloadYoutube } from "./youtubeDownloader";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
      <div className="h-[100vh] flex flex-col justify-between ">
        <main className="flex items-center justify-center font-sans appearance-none h-96">
          <div className="m-5 mt-[5vh]">
            <header className="mb-5">
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
        </main>
        <footer className="flex items-center justify-between w-full h-10 bg-gray-300">
          <div className="ml-2 text-gray-600">
            Developed by{" "}
            <a
              className="font-bold text-gray-800 hover:underline"
              href="https://www.linkedin.com/in/omar-ahmed-a4ab79244/"
            >
              MERNOmar
            </a>
          </div>
          <div className="flex mr-3">
            <a
              href="https://www.linkedin.com/in/omar-ahmed-a4ab79244/"
              className="w-5 h-5 mr-2 text-lg"
            >
              <FaLinkedin />
            </a>
            <a
              target="_blank"
              href="https://github.com/MERNomar"
              className="w-5 h-5 text-lg"
            >
              <FaGithub />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
export default App;
