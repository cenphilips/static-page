let submit_btn = document.getElementById("submit")
submit_btn.addEventListener("click", function(event){
    event.preventDefault()
    let gmsg = document.getElementById("gmsg")
    gmsg.innerText = "form validation"

})