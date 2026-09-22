function copyCode() {
  const code = document.getElementById("code-to-copy").textContent;

  navigator.clipboard.writeText(code);

  const button = document.querySelector(".copy-button");
  button.textContent = "Copied!";

  setTimeout(() => {
    button.textContent = "Copy";
  }, 1500);
}
