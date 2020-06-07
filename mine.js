
/*
var x = document.getElementsByClassName("test");

for (var i = 0 ; i < x.length ; i++){
    x[i].addEventListener("click" , function(){
        alert("Hallo");
    })
}

var h1 = document.querySelector("#demo");

h1.addEventListener("click" , function(){
    alert("Hallo");
})

var h1s = document.getElementsByTagName("h1");

for (var i = 0 ; i < h1s.length ; i++){
    h1s[i].addEventListener("click" , function(){
        alert("Hallo " + i);
    })
}

*/
/*
var d = document.getElementById("demo");

d.addEventListener("" , function(e){
    console.log("X: "+e.pageX);
    console.log("Y: "+e.pageY);
})


document.addEventListener("mousemove" , function(e){
    console.log("X: "+e.pageX);
    console.log("Y: "+e.pageY);
})

var image = document.getElementById("test");

document.addEventListener("mousemove" , function(e){
    image.style.left = e.pageX;
    image.style.top = e.pageY;
})

regu. exp.
/^(002)?01(0|1|2|5)[0-9]{8}$/

*/

//variable to catch the images
var imgs = document.getElementsByClassName("item-img");

//variable to catch lightbox-container class to show it
var lightboxContainer = document.querySelector(".lightbox-container");

//variable to catch class of one photo
var imgItem = document.querySelector(".lightbox-item");

//array to carry the images
var imgArray = [];

//variable to catch next
var next = document.getElementById("next");

//variable to catch prev
var prev = document.getElementById("prev");

//variable to catch close
var close = document.getElementById("wClose");

//variable to carry the index of the image
var currentImg = 0;

//for to loop in the images
for(var i = 0 ; i < imgs.length ; i++)
{
    //put the images on the array
    imgArray.push(imgs[i]);
    
    //event to show photo when click on it
    imgs[i].addEventListener("click" , function(e){
        
        //add class to the container class to show the photo
        lightboxContainer.classList.add("show");
        
        //variable to catch photo source
        var imgSrc = e.target.src;
        
        //put the current image on the imgItem
        imgItem.style.backgroundImage = "url("+imgSrc+")";
        
        //get the index of current image
        currentImg = imgArray.indexOf(e.target);
        
    })
}

//function to show the next img
function nextMove(){
    //get the index of the next img and put it on img index
    currentImg++;
    //condition to check if reaches to the last img return first
    if(currentImg == imgArray.length)
    {
        currentImg = 0;
    }
    //show the next img
    imgItem.style.backgroundImage = "url("+imgArray[currentImg].src+")";
}

//event to show the next img (call the nextMove function)
next.addEventListener("click" , function(){
    //call next function
    nextMove();
})

//function to show the prev img
function prevMove(){
    //get the index of the prev img and put it on img index
    currentImg--;
    //condition to check if reaches to the first img go to the final
    if(currentImg < 0)
    {
        currentImg = imgArray.length - 1;
    }
    //show the next img
    imgItem.style.backgroundImage = "url("+imgArray[currentImg].src+")";
}

//event to show the prev img
prev.addEventListener("click" , function(){
    //call prev function
    prevMove();
})

//function to close the img
function closeImg(){
    //remove the class which show the img
    lightboxContainer.classList.remove("show");
}

//event to close the img
close.addEventListener("click" , function(){
    //call close function
    closeImg();
})

//event to close the img when click on the mpty container by mouse
lightboxContainer.addEventListener("click" , function(e){
    //chick if the click on the space not on the img
    if (e.target == lightboxContainer)
    {
        //call close function
        closeImg();
    }
})
//event to use the keyboard to control the img
document.addEventListener("keydown" , function(e){
    //close by Escape key
    if(e.keyCode == 27)
    {
        //call close function
        closeImg();
    }
    
    //get next img by next key
    if(e.keyCode == 39)
    {
        //call next function
        nextMove();
    }
    
    //get prev img by prev key
    if(e.keyCode == 37)
    {
        //call prev function
        prevMove();
    }
    
})



























