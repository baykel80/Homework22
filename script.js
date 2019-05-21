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

function fetchData(url) {
    return(
    fetch(url).then(function(response) {
      if(response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })  .then(function(data) {
        const ul = document.getElementById('authors');
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
    }).catch(function(error) {
      processError();
    })
    })
    );
    };
    
    function processError() {
        DOM.resultsContainer.innerHTML = `<h2>An error occured while fetching the data</h2>`
    }
    
    