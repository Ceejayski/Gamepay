const endpoint = {
  index: 'getappsincategory/?category=cat_newreleases&cc=us&l=english',
  search: (query) => `/SearchApps/${query}`,
  getAppdetails: (appids) => `/appdetails?appids=${appids}&cc=us`,
  getgenrelist: '/getgenrelist/',
  getAppsinGenre: (genre) => `/getappsingenre/?genre=${genre}&cc=us&l=english`,
};

export default endpoint;
