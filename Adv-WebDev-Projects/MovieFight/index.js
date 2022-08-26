const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "f9f3e425",
      s: searchTerm,
    },
  });

  if (response.data.Error) {
    return [];
  }

  return response.data.Search;
};

const root = document.querySelector(".autocomplete");
root.innerHTML = `
<label><b>Search for a movie</b></label>
<input class="input"></input>
<div class="dropdown>
    <div class="dropdown-menu">
        <div class="dropdown-content results"></div>
    </div>
</div>
`;

const input = document.querySelector("input");
const dropdown = document.querySelector(".dropdown");
const resultsWrapper = document.querySelector(".results");

// First example of using debounce
// const onInput = debounce((event) => {
//   fetchData(event.target.value);
// });

const onInput = async (event) => {
  const movies = await fetchData(event.target.value);
  for (let movie of movies) {
    const div = document.createElement("div");
    div.innerHTML = `
    <img src="${movie.Poster}"/>
    <h1>${movie.Title}</h1>`;
    document.querySelector("#target").appendChild(div);
  }
};

// Add debounce as a wrapper to onInput as a second example
input.addEventListener("input", debounce(onInput, 500));
