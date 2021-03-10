

function zoombig(name_of_thumb){
   name_of_thumb.classList.remove("side_bar_zoom_back");
   name_of_thumb.classList.add("side_bar_zoom");

}




function zoomback(name_of_thumb){

   name_of_thumb.classList.remove("side_bar_zoom");
   name_of_thumb.classList.add("side_bar_zoom_back");


}

function zoommaybe(name_of_thumb){



	if(name_of_thumb.classList.contains("side_bar_zoom")){
        zoomback(name_of_thumb)

	}else{
       zoombig(name_of_thumb)
	}
}

