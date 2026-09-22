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

// ==============================
// Theme Selection
// ==============================

const themeOptions = document.querySelectorAll(".theme-menu a");

// Apply a theme to the page
function applyTheme(theme) {
    if (theme === "light") {
        document.documentElement.setAttribute("data-theme", "light");
    } 
    else if (theme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
    } 
    else if (theme === "auto") {
        document.documentElement.removeAttribute("data-theme");
    }
}

// Handle theme option clicks
themeOptions.forEach(option => {
    option.addEventListener("click", function (event) {
        event.preventDefault();

        const theme = this.textContent.trim();

        if (theme.includes("Light")) {
            localStorage.setItem("theme", "light");
            applyTheme("light");
        } 
        else if (theme.includes("Dark")) {
            localStorage.setItem("theme", "dark");
            applyTheme("dark");
        } 
        else if (theme.includes("Auto")) {
            localStorage.setItem("theme", "auto");
            applyTheme("auto");
        }
    });
});

// ==============================
// Load Saved Theme
// ==============================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    applyTheme("light");
} 
else if (savedTheme === "dark") {
    applyTheme("dark");
} 
else {
    // Default to Auto
    applyTheme("auto");
}
