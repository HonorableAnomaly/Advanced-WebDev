const btn = document.querySelector("button");

btn.addEventListener("mouseover", function () {
  console.log("YOU TOUCHED ME! AAAGHGHG!!!");
  const height = Math.floor(Math.random() * window.innerHeight);
  const width = Math.floor(Math.random() * window.innerWidth);
  btn.style.top = `${height}px`;
  btn.style.left = `${width}px`;
});

btn.addEventListener("click", function () {
  btn.innerText = "You caught me! That was fun!";
  document.body.style.backgroundColor = "green";
});
