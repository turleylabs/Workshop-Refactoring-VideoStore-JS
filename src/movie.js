class Movie {

  constructor(title, priceCode) {
    this.title = title;
    this.priceCode = priceCode;
  }

  getPriceCode() {
    return this.priceCode;
  }
  
  getTitle() {
    return this.title;
  };
}

const CHILDRENS_MOVIE = 2;
const REGULAR_MOVIE = 0;
const NEW_RELEASE_MOVIE = 1;

export {Movie, CHILDRENS_MOVIE, REGULAR_MOVIE, NEW_RELEASE_MOVIE};