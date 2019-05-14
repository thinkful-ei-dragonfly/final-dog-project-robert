/* eslint-disable no-undef */
'use strict';

// global $

const getDogs = (function() {


  function getImages(url, input) {
    console.log('do something');
  }


  function handleInput() {
    
    $('#multiple-random-images').onclick('$random-dogs', event => {
      $(event).preventDefault();
      
      console.log('getHere');

      // let inputRandomNum = $('#random-button').val();
      console.log(numInput);
    });

  }

  return {
    handleInput,
  };

})();

$(handleInput());