// Code for displaying the inputted comments. 
window.onclick = function(e) {
    let id = e.target.id;
    if (id === "sent") {
        let textBox = document.getElementById("example");
        let text = textBox.value;
        $("#para").append(text + "<br>");
        $(textBox).val("");
    }
}
// Code to hide/show an image.
$(document).ready(function(){
  $(".toggle").click(function(){
    $("img").toggle();
  })
});
// Code to fade an image in and out when clicked.
$(document).ready(function(){
  $("img").click(function(){
    let img = $("img");
    img.animate({opacity:"0.4"},
    "slow");
    img.animate({opacity:"1.0"},
    "slow");
  })
});
// Code to highlight table background color when hovered over.
$(document).ready(function(){
  $("tr").not(":first").hover(
    function(){
      $(this).css({"background":"black"});
  },
    function(){
      $(this).css({"background":""});
    }
  );
});
// Code to change paragraph background color when clicked.
$(document).ready(function(){
  $("p").click(function(){
    $("p").css("color","white")
    .css("background-color","black");
  });
});

/* jQuery click functions to stringify and push any images or paragraphs
that have been clicked on*/
let laterImg = [];
let laterPara = [];
$(document).ready(function(){
  $("img").click(function(e){
    let copy = e.target.attributes.src.nodeValue;
    console.log(e);
    laterImg.push(copy);
    window.localStorage.setItem("saveImage", JSON.stringify(laterImg));
    let imgArrayLength = laterImg.length;
    alert(`You have ${imgArrayLength} items in your image save basket!`)
  });
  $("p").click(function(e){
    let copy = e.target.innerText;
    laterPara.push(copy);
    window.localStorage.setItem("savePara", JSON.stringify(laterPara));
    console.log(e);
    let paraArrayLength = laterPara.length;
    alert(`You have ${paraArrayLength} items in your paragraph save basket!`)
  });
});