let docTitle = document.title;
window.addEventListener("blur", ()=>{
    document.title = "Q nahi ho rhi padhai";
})

window.addEventListener("focus", ()=>{
    document.title = docTitle;
})