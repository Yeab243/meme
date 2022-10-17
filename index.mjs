const api_endpoint = 'http://alpha-meme-maker.herokuapp.com/'

const response = await fetch(api_endpoint);

const data = await response.json();

console.log(data);
