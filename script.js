
let imageovertwo =document.getElementById('imagehover2')
let displayovertwo =document.getElementById('textshow2')
imageovertwo.addEventListener('mouseover',function(){
    displayovertwo.style.display="block";
   
})
imageovertwo.addEventListener('mouseout',function(){
    displayovertwo.style.display="none";

})

let imageoverthree =document.getElementById('imagehover3')
let displayoverthree =document.getElementById('textshow3')
imageoverthree.addEventListener('mouseover',function(){
    displayoverthree.style.display="block";

   
})
imageoverthree.addEventListener('mouseout',function(){
    displayoverthree.style.display="none";

})

let imageoverfour =document.getElementById('imagehover4')
let displayoverfour =document.getElementById('textshow4')
imageoverfour.addEventListener('mouseover',function(){
    displayoverfour.style.display="block";

   
})
imageoverfour.addEventListener('mouseout',function(){
    displayoverfour.style.display="none";

})

let imageoverfive =document.getElementById('imagehover5')
let displayoverfive =document.getElementById('textshow5')
imageoverfive.addEventListener('mouseover',function(){
    displayoverfive.style.display="block";

   
})
imageoverfive.addEventListener('mouseout',function(){
    displayoverfive.style.display="none";

})

let imageoversix =document.getElementById('imagehover6')
let displayoversix =document.getElementById('textshow6')
imageoversix.addEventListener('mouseover',function(){
    displayoversix.style.display="block";

   
})
imageoversix.addEventListener('mouseout',function(){
    displayoversix.style.display="none";

})

let outdoor1 = document.getElementById("outdoorshoot1");
let visible1 = document.querySelector('.visible1');

function showLayer() {
    outdoor1.style.display = "block";
    visible1.style.display = "block";
}

setTimeout(showLayer, 5000);

let outdoor2 = document.getElementById("outdoorshoot2");
let visible2 = document.querySelector('.visible2');

function showLayer2() {
    outdoor2.style.display = "block";
    visible2.style.display = "block";
}

setTimeout(showLayer2, 5000); 

let outdoor3 = document.getElementById("outdoorshoot3");
let visible3 = document.querySelector('.visible3');

function showLayer3() {
    outdoor2.style.display = "block";
    visible2.style.display = "block";
}

setTimeout(showLayer3, 5000); 

// first set of images for footer starts

let image1 = document.querySelector(".footerimage1");
let text1 = document.querySelector(".hoverdisplaytext1");

image1.addEventListener("mouseenter", function(){

    text1.style.display = "block";
});

image1.addEventListener("mouseleave", function(){

    text1.style.display = "none";
});



let image2 = document.querySelector(".footerimage2");
let text2 = document.querySelector(".hoverdisplaytext2");

image2.addEventListener("mouseenter", function(){

    text2.style.display = "block";
});

image2.addEventListener("mouseleave", function(){

    text2.style.display = "none";
});
// first set of images for footer ends

// second set of images for footer starts
let image3 = document.querySelector(".footerimage3");
let text3 = document.querySelector(".hoverdisplaytext3");

image3.addEventListener("mouseenter", function(){

    text3.style.display = "block";
});

image3.addEventListener("mouseleave", function(){

    text3.style.display = "none";
});

let image4 = document.querySelector(".footerimage4");
let text4 = document.querySelector(".hoverdisplaytext4");

image4.addEventListener("mouseenter", function(){

    text4.style.display = "block";
});

image4.addEventListener("mouseleave", function(){

    text4.style.display = "none";
});

// secons set of footer iamge ends
// third set of fooetr image
let image5 = document.querySelector(".footerimage5");
let text5 = document.querySelector(".hoverdisplaytext5");

image5.addEventListener("mouseenter", function(){

    text5.style.display = "block";
});

image5.addEventListener("mouseleave", function(){

    text5.style.display = "none";
});

let image6 = document.querySelector(".footerimage6");
let text6 = document.querySelector(".hoverdisplaytext6");

image6.addEventListener("mouseenter", function(){

    text6.style.display = "block";
});

image6.addEventListener("mouseleave", function(){

    text6.style.display = "none";
});


