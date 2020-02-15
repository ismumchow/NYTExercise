$(document).ready(function () {

    var searchVal =""; 
    var numOfResults = 0; 
    var startYear = 0;
    var endYear = 0;

    $('#searchButton').on('click', function () {
        searchVal = $('#searchTerm').val(); 
        numOfResults = $('#numResult').val();
        startYear = $('#startYear').val();
        endYear = $('#endYear').val();

        console.log(searchVal);
        console.log(numOfResults);
        console.log(startYear);
        console.log(endYear);

        if(searchVal === ''|| numOfResults == '') { 
            alert('must complete the necessary inputs');
        }
    }); 

    $('#clearButton').on('click', function () {
         $('#searchTerm').val('');
         $('#numResult').val('');
        $('#startYear').val('');
        $('#endYear').val('') ;
    });













});