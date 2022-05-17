/* Code for function that fetches data from the local storage
and displays the images/paragraphs that were clicked on to save for later*/
function displayImages(){
    let content = JSON.parse(window.localStorage.getItem("saveImage"));
    console.log(content);
    content.forEach(x => {
      let tr = document.createElement("tr")
      tr.innerHTML = `<img src="${x}"/>`;
      document.getElementById("displayImage").appendChild(tr);
    });
};
$(document).ready(()=>{
    displayImages();
    displayParagraphs();
})
function displayParagraphs(){
    let content = JSON.parse(window.localStorage.getItem("savePara"));
    console.log(content);
    content.forEach(x => {
      let tr = document.createElement("tr")
      tr.innerHTML = `<p>${x}</p>`;
      document.getElementById("displayParagraphs").appendChild(tr);
    });
};