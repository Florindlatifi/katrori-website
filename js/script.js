
/****Language Switcher ****/


function mainmenu() {
	//Submenu Dropdown Toggle
	if($('.main-menu li.dropdown ul').length){
		$('.main-menu li.dropdown').append('<div class="dropdown-btn"></div>');
		
		//Dropdown Button
		$('.main-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
	}
}


icons=document.getElementsByClassName("far");

 for(i=0;i<icons.length;i++){       
   icons[i].addEventListener("click", function() {
     this.classList.toggle("selected");
   });
 }






