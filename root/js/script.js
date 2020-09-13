const body = document.querySelector("body");
const menuIcon = document.querySelector(".js--menuIcon");
const linksContainer = document.querySelector(".js--linksContainer");


menuIcon.addEventListener("click", () => {
    const hamburger = "hamburger.svg";
    const close = "close.svg";
    
    if (menuIcon.src.endsWith("hamburger.svg")) {
        menuIcon.setAttribute("src", `images/icon-${close}`);
        linksContainer.classList.remove("animate-out");
        linksContainer.classList.remove("hide");
        linksContainer.classList.add("animate");
    } else {
        menuIcon.setAttribute("src", `images/icon-${hamburger}`);
        linksContainer.classList.remove("animate");
        linksContainer.classList.add("animate-out");
    }
});