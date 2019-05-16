/* eslint-disable no-undef */
'use strict';

// global $

const getDogs = (function() {

  const RANDOM_DOGS_URL = 'https://dog.ceo/api/breeds/image/random/';

  function generateMultipleHTML(imageArr) {
    let html = '';
    for (let i = 0; i < imageArr.length; i++) {
      console.log(imageArr[i]);
      html += `<img src="${imageArr[i]}">`;
    }
    
    $('.results').html(html);
    
  }

  function generateSingleHTML(breedURLImage) {
    
    $('.results').html(`<img src="${breedURLImage}">`);
    
  }


  function getRandImages(input) {

    return fetch(RANDOM_DOGS_URL + input)
      .then( response => {
        
        if (!response.ok) {
          throw new Error('Fetch error requesting image data from server');
        }
        
        return response.json();
      })
      .catch(error => console.log(error.message));


  }




  function getSingleBreedImage(breed) {

    return fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then( response => {
        
        if (!response.ok) {
          throw new Error('Fetch error requesting image data from server');
        }
        
        return response.json();
      })
      .catch(error => console.log(error.message));
  }

  function handleInput() {
    
    $('#multiple-random-images').on('submit', event => {
      event.preventDefault();
      let input = event.currentTarget.number.value;
      if (input === '') {
        input = 3;
      }
      getRandImages(input)
        .then(data => generateMultipleHTML(data.message))
        .catch(error => console.log(error.message));


    });

    // Handle single Breed image
    $('#single-breed-image').on('submit', event => {
      event.preventDefault();
      let input = event.currentTarget.breed.value;
      getSingleBreedImage(input)
        .then(data => generateSingleHTML(data.message))
        .catch(error => console.log(error.message));

    }
    );
  }
  return {
    handleInput: handleInput,
  };

})();

$(getDogs.handleInput());
