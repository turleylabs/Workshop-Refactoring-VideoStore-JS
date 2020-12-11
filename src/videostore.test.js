import product from 'cartesian-product';
import { Customer } from './customer';
import { CHILDRENS_MOVIE, Movie, NEW_RELEASE_MOVIE, REGULAR_MOVIE } from './movie';
import { Rental } from './rental';

test('approve createStatement', () => {
    function doCreateStatement(priceCode, daysRented) {
        const customer = new Customer("Steve");
        customer.addRental(new Rental(new Movie("Star Wars", priceCode), daysRented));
        customer.addRental(new Rental(new Movie("Raiders of the Lost Ark", REGULAR_MOVIE), 1));
        return customer.createStatement();
    }

    const priceCodes = [REGULAR_MOVIE, NEW_RELEASE_MOVIE, CHILDRENS_MOVIE, 3];
    const daysRented = [0,1,2,3,4];
    const params = [priceCodes, daysRented];

    const result = runCombinationSnapshot(params, doCreateStatement);

    expect(result).toMatchSnapshot();
});

function runCombinationSnapshot(params, fn) {
    return product(params).map(combo => [combo, fn(...combo)]);
}

//    
