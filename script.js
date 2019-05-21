"use strict";

const DOM = {
	resultsContainer: document.querySelector(".js-search_results"),
	searchBtn: document.querySelector(".js-search_btn")
}

DOM.searchBtn.addEventListener("click", e => {
  var number1 = document.getElementById("number1").value;
  console.log(number1);
  if(number1==0){
  var dogApiURL = "https://api.thecatapi.com/v1/images/search?limit=10"+number1;
  }
  else{
    var dogApiURL = "https://api.thecatapi.com/v1/images/search?limit="+number1;
  }
  console.log("click");
	fetchData(dogApiURL)
		.then(res => {
    }).catch(function(error) {
        processError();
      })
});

