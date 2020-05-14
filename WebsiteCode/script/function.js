/******Changing to LightMode/DarkMode******/
function changeMode() {
   var element = document.body;
   var image = document.getElementById('logo');
   
   element.classList.toggle("dark-mode");
   
   if (image.src.match("newlogo")) {
        image.src = "images/logo.png";
    } 
	else {
        image.src = "images/newlogo.png";
    }
}