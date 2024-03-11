class MovieFactory {
    constructor(gender, price) {
        if (gender === 'Action') return new MovieAction(gender, 10)
        if (gender === 'Documentary') return new MovieDocumentary(gender, 20)

        return new Movie(gender, price)
    }
}

class Movie {
    constructor(type, price) {
        this.type = type;
        this.price = price;
    }
}

class MovieAction extends Movie {
    constructor(type, price) {
        super(type, price);
    }
}

class MovieDocumentary extends Movie {
    constructor(type, price) {
        super(type, price);
    }
}

export default MovieFactory;