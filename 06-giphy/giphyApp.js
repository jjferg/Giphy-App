$(document).ready(function () {
  console.log("hello world")

// array for various gif topics
  var topics = ["sports", "movies", "video games", "music", "art", "poets"];


// FUnction to add buttons dynamically
  function giphButton() {
    $('#giphy-buttons').empty();
    
    for (var j = 0; j < topics.length; j++) {
      var button = $("<button>").text(topics[j]).attr({ 
        type: "button",
        class: "data-name",
        name: "giph-buttons",
        "giph-buttons": topics[j],
        value: "push"
      })
      
 //loging the topics to ensure they are working for each seperate topic
      console.log(topics)
      
      $('#giphy-buttons').append(button)
    }
  }
// start of the AJAX method on click function storing the topics and url in variables
// API key and limit of return included manually
  $('#giphy-buttons').on("click", "button", function () {
    var subTopic = $(this).attr("giph-buttons")
    var giphyUrl = "https://api.giphy.com/v1/gifs/search?q=" + subTopic + "&api_key=uOECU1uQx3wKxy4lKVw9cNiAcce4Cea4&limit=10";
// Pulling the requested url info
    $.ajax({
      url: giphyUrl,
      method: "GET"
// returning of the data from the yrl 
    }).then(function (response) {
      console.log(response)
      var results = response.data;
// This for loop creates the div to hold the image
//creates a P tag to display the the rating and title
//creating a img tag for each gif request, adding the data and appendig it to the div
      for (var i = 0; i < results.length; i++) {
        var giphDiv = $("<div>");
        giphDiv.attr("class","image1")
        var p = $("<p>").text("Rating: " + results[i].rating + " "+ " Title: " + results[i].title);
        var giphImage = $("<img>");
        giphImage.attr("src", results[i].images.fixed_height_still.url)
        giphImage.attr("data-still", results[i].images.fixed_height_still.url)
        giphImage.attr("data-state", "still");
        giphImage.attr("data-animate", results[i].images.fixed_height.url)
        giphImage.attr("class", "image");
        $(giphImage).append(giphImage);
        $("#gifsHere").append(giphImage);
        giphDiv.append(p);
        giphDiv.append(giphImage);
        $("#giphs").prepend(giphDiv);
      }
    })
  });
// function for the user to submit a request and add gif button of there own
  function useradd() {

    $("#giphAdd").on("click", function () {

      var added = $("#addGiph").val().trim();
      topics.push(added)

      // if( action == ""){
      //   return false;
      // }

      giphButton()

      return false;
    })
  }
  



//invoking the user and gif button functions
  useradd();
  giphButton();

  //an event handle that pause the gif when rendered and plays and pauese on click
  $(document).on("click", ".image", function () {
    var state = $(this).attr('data-state');
    if (state == 'still') {
      $(this).attr('src', $(this).data('animate'));
      $(this).attr('data-state', 'animate');
    } else {
      $(this).attr('src', $(this).data('still'));
      $(this).attr('data-state', 'still');
    }

  })
})





