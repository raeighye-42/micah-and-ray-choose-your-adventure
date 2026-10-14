
// changing the link text of the free/regret choice on freeze1.html

const freeRegretLink = document.getElementById("freeRegretLink");
// const restartBtn = document.getElementById("startOverBtn");

let reset = false;

if(document.body.classList.contains("btnChangerPage")){
    freeRegretLink.addEventListener("mouseover", () => {
        setTimeout(() =>{freeRegretLink.textContent = "[REGRET]";}, 50);
    });

    freeRegretLink.addEventListener("mouseleave", () => {
        setTimeout(() =>{freeRegretLink.textContent = "[Free it.]"}, 50);
    });

}

//come back to this code later -MF

// if(document.body.classList.contains("deadEnd")){
//     restartBtn.addEventListener("click", () =>{
//     reset = true;

//     if(reset){
//         console.log("reset is true!");
//         reset = false;
//     }
//     else{
//         return(0);
//     }
// });
// }
