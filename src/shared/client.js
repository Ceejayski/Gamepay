export default async function getData(endpoint, type = 'api') {
  const cors = 'https://quiet-beyond-94611.herokuapp.com/';
  const url = type === 'api' ? `${cors}https://store.steampowered.com/${endpoint}` : `${cors}https://steamcommunity.com/actions${endpoint}`;
  const res = await fetch(url);
  return res.json();
}
