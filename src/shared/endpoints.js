const endpoint = {
  index: 'api/getappsincategory/?category=cat_newreleases&cc=us&l=english',
  slide: 'api/trailerslideshow/?cc=us&l=english',
  hoverData: (id) => `/apphoverpublic/${id}/?l=english&json=1`,
  search: (query) => `/SearchApps/${query}`,
  getAppdetails: (appids) => `api/appdetails?appids=${appids}&cc=us`,
  getgenrelist: 'api/getgenrelist/',
  getAppsinGenre: (genre) => `api/getappsingenre/?genre=${genre}&cc=us&l=english`,
  getAppsinCat: (cat) => `api/getappsincategory/?category=${cat}&cc=us&l=english`,
};

export default endpoint;
