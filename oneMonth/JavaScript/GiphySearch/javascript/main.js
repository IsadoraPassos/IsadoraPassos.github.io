
var go = document.querySelector(".js-go");
var enter = document.querySelector(".js-userinput");

go.addEventListener('click', function(){
    var input = document.querySelector("input").value;
    pushToDom(input);
});

enter.addEventListener('keyup', function(e){
    var input = document.querySelector("input").value;

    if(e.which == 13){
        pushToDom(input);
    }
});

//GIF API
var url = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=n2JNLGq91FG2f12JgLxE2dP2psVkGVk2";
// AJAX Request
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open( 'GET', url );
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener('load', function(e){
    var data = e.target.response;
    pushToDom(data);
});


function pushToDom(input){
    var response = JSON.parse(input);

    var imageUrls = response.data;

    imageUrls.forEach(function(image){

        var src = image.images.fixed_height.url;
        
        var container = document.querySelector(".js-container");
        container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";
    
      });

}