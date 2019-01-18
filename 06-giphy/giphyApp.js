$(document).ready(function () {
    console.log("hello world")

    
    var topics = [ "sports" , "movies" , "video games", "music" , "art" , "poets"];
   
   
   
    for (var j = 0; j < topics.length; j++){
      var button = $("<button>").text(topics[j]).attr
      ({type:"button",class:"data-name",name:"giph-buttons", "giph-buttons":topics[j], value:"push"})
      
      
      console.log(button)
      
      $('#giphy-buttons').prepend(button)
      
    }
   
      $('#giphy-buttons').on("click","button", function (){

      
      

       var subTopic = $(this).attr("giph-buttons")

       var giphyUrl = "https://api.giphy.com/v1/gifs/search?q="
       +
       subTopic
       +
       "&api_key=uOECU1uQx3wKxy4lKVw9cNiAcce4Cea4&limit=10";
       
       $.ajax({
        url: giphyUrl,
        method: "GET"
        })

      .then(function(response){
        console.log(giphyUrl);

        console.log(response);

        var results = response.data;

          for (var i = 0; i < results.length; i++){

          var giphDiv = $("<div>");

          var p = $("<p>").text("Rating: " + results[i].rating);

          var giphImage = $("<img>");

          giphImage.attr({"movement":movement, "still":still, "data-state":still, "src":still, })

          var movement = giphImage.attr("src", 
          results[i].images.fixed_height.url)
          
          var still = ("src", results[i].images.fixed_height_still.url)
          
           giphImage.attr("src", 
          results[i].images.fixed_height.url)

          
          giphDiv.append(p);
          giphDiv.append(giphImage);

          $("#giphs").prepend(giphDiv);
          
          $(document).on("click", ".image", function () {
            var state = $(this).attr('data-state');
            if (state == 'still') {
              $(this).attr('src', $(this).data('animate'));
              $(this).attr('data-state', 'animate');
            } else {
              $(this).attr('src', $(this).data('still'));
              $(this).attr('data-state', 'still');
            }
           });

            

          

          
           



     
          
      
          // }
          }
      })
      // .error(function(error) {
      //   console.log(error);
      // })


    

      
    })
    
  
  

   


    //create an array of subjects or topics
  
//create a for loop for the array

    
 
  })







