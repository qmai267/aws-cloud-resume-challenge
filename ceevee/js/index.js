// javascript Code
const counter = document.querySelector(".counter-number");
async function updateCounter() {
  let response = await fetch(
    "https://grftyzblbdaazq5veu4cd4dsly0mesxt.lambda-url.us-east-2.on.aws/"
  );
  let data = await response.json();
  counter.innerHTML = ` Views: ${data}`;
}

updateCounter();
