function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Call the function with at least three city-country pairs
let city1: string = city_country('Lahore', 'Pakistan');
let city2: string = city_country('Paris', 'France');
let city3: string = city_country('New York', 'USA');

console.log(city1);
console.log(city2);
console.log(city3);
