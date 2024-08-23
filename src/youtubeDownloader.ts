import axios from "axios";

const copaltURL = "https://api.cobalt.tools/api/json";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const downloadYoutube = async (url: string) => {
  try {
    const { data } = await axios.post(copaltURL, { url }, { headers });
    return data.url;
  } catch (err) {
    console.log(err);
  }
};

export { downloadYoutube };
