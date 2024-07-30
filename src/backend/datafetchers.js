import { fetch } from 'wix-fetch';

// GET call using getJSON
export function getData() {
  console.log("Inside func:")
    fetch("https://api.restful-api.dev/objects/4")
  .then((response) => response.json()).
  then(data => console.log(data))
  .catch((err) => console.log(err));
}