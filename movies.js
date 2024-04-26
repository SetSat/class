
class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies) {
        return movies.filter((movie) => movie.rating === "PG");
    }
}

let movieC = new Movie("Casino Royale", "Eon Productions", "PG");
console.log(movieC);

let movie1 = new Movie("The Matrix", "Village Roadshow Pictures", "R");
let movie2 = new Movie("Avatar", "20th Century Fox", "PG-13");
let movie3 = new Movie("The Godfather", "Paramount Pictures", "PG");
let movie4 = new Movie("Pulp Fiction", "Miramax Films", "R");
let movie5 = new Movie("Forrest Gump", "Paramount Pictures", "PG-13");
let movie6 = new Movie("The Shawshank Redemption", "Castle Rock Entertainment", "PG");
let movie7 = new Movie("Schindler's List", "Universal Pictures", "R");

let movieArray = [movie1, movie2, movie3, movie4, movie5, movie6, movie7];

const getPGRating = Movie.getPG(movieArray);
console.log(getPGRating);