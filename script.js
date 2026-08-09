document.getElementById("helloBtn").addEventListener("click", () => {
    alert("Hello, World!");
});

let dots = 1;

setInterval(() => {
    dots++;

    if (dots > 3) {
        dots = 1;
    }

    document.getElementById("loadingText").textContent =
        "Loading" + ".".repeat(dots);

}, 500);