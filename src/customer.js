import {REGULAR_MOVIE, CHILDRENS_MOVIE, NEW_RELEASE_MOVIE} from './movie';

class Customer {
  constructor(name) {
      this.name = name;
      this.rentals = [];
  }

  addRental(rental) {
    this.rentals.push(rental);
  }

  createStatement() {
      let totalAmount = 0.0;
      let frequentRenterPoints = 0;
      let result = "Rental Record for " + this.name + "\n";
      for (const each of this.rentals) {
          let thisAmount = 0;

          //determine amounts for each line
          switch (each.getMovie().getPriceCode()) {
              case REGULAR_MOVIE:
                  thisAmount += 2;
                  if (each.getDaysRented() > 2)
                      thisAmount += (each.getDaysRented() - 2) * 1.5;
                  break;
              case NEW_RELEASE_MOVIE:
                  thisAmount += each.getDaysRented() * 3;
                  break;
              case CHILDRENS_MOVIE:
                  thisAmount += 1.5;
                  if (each.getDaysRented() > 3)
                      thisAmount += (each.getDaysRented() - 3) * 1.5;
                  break;
          }

          frequentRenterPoints++;
          if ((each.getMovie().getPriceCode() == NEW_RELEASE_MOVIE) &&
                  each.getDaysRented() > 1) frequentRenterPoints++;

          result += "\t" + each.getMovie().getTitle() + "\t" +
                  thisAmount + "\n";
          totalAmount += thisAmount;

      }
      result += "Amount owed is " + totalAmount + "\n";
      result += "You earned " + frequentRenterPoints +
              " frequent renter points";
      return result;
  }

}

export {Customer};