let boldBtn = document.getElementById("bold");
let italicsBtn = document.getElementById("italics");
let fontBtn = document.getElementById("fontSize");
let increaseFont = document.getElementById("increase");
let decreaseFont = document.getElementById("decrease");
let doc = document.querySelector(".document");
let currentFont = 11;

boldBtn.addEventListener("click", bold);
italicsBtn.addEventListener("click", italicise);
fontBtn.addEventListener("change", fontSize);

function fontSize(){
    doc.style.fontSize = fontSize.value + "px";
    currentFont = fontBtn.value;
}

function bold(){
    if(boldBtn.style.backgroundColor == "whitesmoke"){
        doc.style.fontWeight = 800;
        boldBtn.style.background = "blue";
        boldBtn.style.color = "whitesmoke";
    }
    else{
        doc.style.fontWeight = 400;
        boldBtn.style.background = "whitesmoke";
        boldBtn.style.color = "black";
    }
}

function italicise(){
    if(italicsBtn.style.backgroundColor == "whitesmoke"){
        doc.style.fontStyle = "italic";
        italicsBtn.style.background = "purple";
        italicsBtn.style.color = "whitesmoke";
    }
    else{
        doc.style.fontStyle = "normal";
        italicsBtn.style.background = "whitesmoke";
        italicsBtn.style.color = "black";
    }
}

