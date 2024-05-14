const collapse = document.querySelector(".collapse")

function Menu(){
    if (collapse.style.display == "none"){
        collapse.style.display = "flex"
    }else{
        collapse.style.display = "none"
    }
}
