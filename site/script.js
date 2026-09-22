function copyCode(button) {
    const codeBlock = button.closest(".code-block");
    const code = codeBlock.querySelector("code").textContent;

    navigator.clipboard.writeText(code).then(() => {
        button.textContent = "Copied!";

        setTimeout(() => {
            button.textContent = "Copy";
        }, 1500);
    }).catch(() => {
        button.textContent = "Failed";

        setTimeout(() => {
            button.textContent = "Copy";
        }, 1500);
    });
}
