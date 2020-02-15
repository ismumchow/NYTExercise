$(document).ready(function () {

    var searchVal =""; 
    var numOfResults = 0; 
    var startYear = 0;
    var apiKey = "Qb4BXkOy7b5xzY1gIfZjXEft1o0noimG";
   
 

    $('#searchButton').on('click', function () {
        searchVal = $('#searchTerm').val().trim(); 
        numOfResults = $('#numResult').val().trim();
    
        startYear = $('#startYear').val().trim();

        console.log(searchVal);
        console.log(numOfResults);
        console.log(startYear);

        if(searchVal === ''|| numOfResults == '') { 
            alert('must complete the necessary inputs');
        } 
        if (isNaN(numOfResults) || numOfResults < 1 || numOfResults > 10) {
            alert("numer of search results not valid")
        } 
        else {

             var queryURL =
               "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+searchVal+ "&api-key=" +apiKey; 
             

          $.ajax({
            url: queryURL,
            method: "GET"
          }).done(function(response) {

            console.log(response);
             $("#searchContainer").empty();

            for (var i = 0; i < numOfResults; i++) {
              var articleTitle = response.response.docs[i].abstract;

             var articleLink = response.response.docs[i].web_url;
              var author = response.response.docs[i].byline.original; 

              console.log(articleTitle); 
              console.log(articleLink); 
              console.log(author);

              var cardDiv = $("<div>");
              cardDiv.addClass("card");
              var cardHeader = $("<div>"); 
              cardHeader.addClass("card-header text-light"); 
              cardHeader.append("<h5>" + author + "</h5>"); 
              cardDiv.append("<h5>" + articleTitle + "</h5>");
              cardDiv.append("<a href=" + articleLink +"> Link to article</a>");

              cardDiv.addClass('p-3 mb-4 shadow hoverEffect rounded-lg')
              


              cardDiv.append(cardHeader); 
              $('#searchContainer').append(cardDiv)
              

              console.log(i);
              
            }
            //   var youtubeDiv = $("<div>");
            //   var newVid = $("<iframe>");
            //   newVid.attr({
            //     src: "https://www.youtube.com/embed/" + videoId,
            //     width: "420",
            //     height: "315"
            //   });
            //   newVid.addClass("padding");

            //   youtubeDiv.append(newVid);

            //   $("#youtubeContainer").append(youtubeDiv);
            });
          };
         });
    

    $('#clearButton').on('click', function () {
         $('#searchTerm').val('');
         $('#numResult').val('');
        $('#startYear').val('');
    });













});