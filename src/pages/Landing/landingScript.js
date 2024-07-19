document.addEventListener("DOMContentLoaded", () => {
    const h1 = document.getElementById("header_text");
    console.log(h1);
    const words = h1.textContent.split(" ");
    h1.innerHTML = words
        .map(
            (word, index) =>
                `<span style="animation: fade-in 0.8s ${
                    0.1 * index
                }s forwards cubic-bezier(0.11, 0, 0.5, 0);">${word}</span>`
        )
        .join(" ");
});
