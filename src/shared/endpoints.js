const endpoint = {
  index: 'api/featuredcategories?cc=us&l=english',
  slide: 'api/trailerslideshow/?cc=us&l=english',
  hoverData: (id) => `/apphoverpublic/${id}/?l=english&json=1`,
  search: (query) => `/SearchApps/${query}`,
  getAppdetails: (appids) => `api/appdetails?appids=${appids}&cc=us`,
  getgenrelist: 'api/getgenrelist/',
  getAppsinGenre: (genre) => `api/getappsingenre/?genre=${genre}&cc=us&l=english`,
};

export default endpoint;
