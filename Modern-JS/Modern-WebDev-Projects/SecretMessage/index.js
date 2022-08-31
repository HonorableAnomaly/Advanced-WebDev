document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const input = document.querySelector("#message-input");
  const encrypted = btoa(input.value);
  //   const encrypted = Buffer.from(input.value, "base64");

  document.querySelector("#link-input").value = encrypted;
});
