import axios from "axios";

const searchImages = async (term) => {
  const res = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID eKIpSPhh3bPywy68U0I-B0kC0MlumsY_u601L7iGBu8"
    },
    params: {
      query: term
    }
  });

  console.log(res.data.results);
  return res;
};

export default searchImages;
