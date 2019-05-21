"use strict";

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const DOM = {
	resultsContainer: document.querySelector(".js-search_results"),
	searchBtn: document.querySelector(".js-search_btn")
}

DOM.searchBtn.addEventListener("click", e => {
DOM.resultsContainer.innerHTML ="";
  var number1 = document.getElementById("number1").value;
  if(number1==0){
  var dogApiURL = "https://api.thecatapi.com/v12/images/search?limit=10";
  }
  else{
    var dogApiURL = "https://api.thecatapi.com/v1/images/search?limit="+number1;
  }
  console.log("click");
	fetchData(dogApiURL)
		.then(res => {
    })
});

function fetchData(url) {

    const ul = document.getElementById('authors');
    return(
    fetch(url).then(function(response) {
      if(response.ok) {
        return response.json();
      }
      else{
          console.log("error");
      throw new Error('Network response was not ok.');}
    })  .then(function(data) {
        while (ul.lastChild) {
          ul.removeChild(ul.lastChild);
        }
        let authors = data;
        return authors.map(function(author) {
          let li = createNode('li'),
              img = createNode('img'),
              span = createNode('span');
          img.src = author.url;
          append(li, img);
          append(li, span);
          append(ul, li);
          var i= "ok";
          return i;
        })
    }).catch(function(error) {
      processError();
      while (ul.lastChild) {
        ul.removeChild(ul.lastChild);
      }
    })
    );
    };
    
    function processError() {
        DOM.resultsContainer.innerHTML = `<h2>An error occured while fetching the data</h2>`
    }
    
    