function foodProducer(kind) {
    switch (kind) {
        case 'protein':
            return proteinPattern;
        case 'fat':
            return fatPattern;
        default:
            return carbohydratesPattern;
    }
}

function proteinPattern() {
    return new Protein();
}

function fatPattern() {
    return new Fat();
}

function carbohydratesPattern() {
    return new Carbohydrates();
}

export default foodProducer;