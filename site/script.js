function copyText() {
  const text = document.getElementById("text-to-copy").textContent;

  navigator.clipboard.writeText(text);

  document.querySelector(".copy-box button").textContent = "Copied!";

  setTimeout(() => {
    document.querySelector(".copy-box button").textContent = "Copy";
  }, 1500);
}
