'use strict';

const searchForm = document.querySelector('#search-form');
const resultsDiv = document.querySelector('#results');

searchForm.addEventListener('submit', async function(evt) {
  evt.preventDefault();

  const code = document.querySelector('input[name=q]').value;
  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${code}`);
    const shows = await response.json();
    resultsDiv.innerHTML = ''; // Clear previous results

    shows.forEach((tvShow) => {
      const article = document.createElement('article');
      const heading = document.createElement('h2');
      const name = document.createTextNode(tvShow.show.name);
      heading.appendChild(name);
      article.appendChild(heading);

      const link = document.createElement('a');
      link.href = tvShow.show.url;
      link.target = '_blank';

      const image = document.createElement('img');
      image.src = tvShow.show.image?.medium;
      image.alt = tvShow.show.name;
      link.appendChild(image);
      article.appendChild(link);

      const summary = document.createElement('div');
      summary.innerHTML = tvShow.show.summary;
      article.appendChild(summary);
      resultsDiv.appendChild(article);
    });

  } catch (error) {
    console.log(error.message);
  }
});
