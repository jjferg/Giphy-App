$(document).ready(function () {
  console.log("hello world")


  var topics = ["sports", "movies", "video games", "music", "art", "poets"];



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


      console.log(topics)

      $('#giphy-buttons').append(button)
    }
  }

  $('#giphy-buttons').on("click", "button", function () {
    var subTopic = $(this).attr("giph-buttons")
    var giphyUrl = "https://api.giphy.com/v1/gifs/search?q=" + subTopic + "&api_key=uOECU1uQx3wKxy4lKVw9cNiAcce4Cea4&limit=10";

    $.ajax({
      url: giphyUrl,
      method: "GET"
    }).then(function (response) {
      var results = response.data;
      for (var i = 0; i < results.length; i++) {
        var giphDiv = $("<div>");
        var p = $("<p>").text("Rating: " + results[i].rating);
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
  




  useradd();
  giphButton();
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





