const hamMenuEl = document.querySelector(".hamburger")

const navMenuEl = document.querySelector(".nav")

const contentEl = document.querySelector(".content")

const hamburgerItems = document.getElementsByTagName("span")


function navResponse(){
    hamMenuEl.addEventListener("click", function(){
        navMenuEl.classList.toggle("open");
        contentEl.classList.toggle("shift");
        traverseSpanTag()
    })
}

navResponse()


function traverseSpanTag(){
    for(let item of hamburgerItems){
        item.classList.toggle("change")
    }
}
