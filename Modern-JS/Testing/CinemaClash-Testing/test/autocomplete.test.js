// A helper function that waits for an element to show before testing it
const waitFor = (selector) => {
  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      if (document.querySelector(selector)) {
        clearInterval(interval);
        clearTimeout(timeout);
        resolve();
      }
    }, 30);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      reject();
    }, 2000);
  });
};

// Resets HTML by making a new autocomplete before each seperate test, so we can test in any order
beforeEach(() => {
  document.querySelector("#target").innerHTML = "";

  createAutoComplete({
    root: document.querySelector("#target"),
    fetchData() {
      return [{ Title: "Lord of the Rings" }, { Title: "Star Wars" }, { Title: "Luminous Archive" }];
    },
    renderOption(movie) {
      return movie.Title;
    }
  });
});

// Mocha keyword 'it' to enable the test globally, and first argument is the test name
// Remember to include the script in test.js of this file!

// Test function to see if Mocha is working
it("works!", () => {});

it("Dropdown starts closed", () => {
  const dropdown = document.querySelector(".dropdown");
  expect(dropdown.className).not.to.include("is-active");
});

it("After searching, dropdown opens up", async () => {
  const input = document.querySelector("input");

  input.value = "Lord of the Rings";
  input.dispatchEvent(new Event("input"));

  await waitFor(".dropdown-item");

  const dropdown = document.querySelector(".dropdown");
  expect(dropdown.className).to.include("is-active");
});

it("After searching, displays some results", async () => {
  const input = document.querySelector("input");

  input.value = "Lord of the Rings";
  input.dispatchEvent(new Event("input"));

  await waitFor(".dropdown-item");

  const items = document.querySelectorAll(".dropdown-item");

  expect(items.length).to.equal(3);
});
