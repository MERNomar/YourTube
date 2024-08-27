import axios from "axios";

const copaltURL = "https://api.cobalt.tools/api/json";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const supportedLinks: string[] = ["youtu.be", "www.youtube.com"];

const downloadYoutube = async (url: string, isAudioOnly: boolean) => {
  try {
    console.log(url);
    if (url === "") {
      throw new Error("No Link Provided");
    }
    const urlValidator = new URL(url);
    console.log(urlValidator);

    if (!supportedLinks.includes(urlValidator.hostname)) {
      throw new Error(
        "Currently Only youtube is supported, be tuned for new updates",
      );
    }

    const { data } = await axios.post(
      copaltURL,
      { url, isAudioOnly },
      { headers },
    );
    return data.url;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export { downloadYoutube };
