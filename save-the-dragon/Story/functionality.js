
// changing the link text of the free/regret choice on freeze1.html

//fix button re-sizing after hover event
const freeRegretLink = document.getElementById("freeRegretLink");

freeRegretLink.addEventListener("mouseover", () => {
    setTimeout(() =>{freeRegretLink.textContent = "[REGRET]";}, 50);
});

freeRegretLink.addEventListener("mouseleave", () => {
    setTimeout(() =>{freeRegretLink.textContent = "[Free]"}, 50);
});