'use strict';

const searchForm = document.querySelector('#search-form');
searchForm.addEventListener('submit', async function(evt) {
  evt.preventDefault();
  const code = document.querySelector('input[name=q]').value;
  try {
    const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${code}`);
    const jsonData = await response.json();
    console.log(jsonData);
  } catch (error) {
    console.log(error.message);
  }
});