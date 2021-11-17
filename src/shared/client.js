export default async function getData(endpoint, type = 'api') {
  const url = type === 'api' ? `https://store.steampowered.com/${endpoint}` : `https://steamcommunity.com/actions${endpoint}`;
  const res = await fetch(url);
  return res.json();
}
