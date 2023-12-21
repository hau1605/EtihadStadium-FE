export function parseTicketTypeValue(value) {
    switch (value) {
        case 'adult':
            return 'adult';
        case 'under_16':
            return 'under16';
        case 'student':
            return 'student';
        case 'senior':
            return 'senior';
        case 'under_5':
            return 'under5';
    }
}

export function parseTicketPriceFerType(value, price) {
    switch (value) {
        case 'adult':
            return price;
        case 'under_16':
            return 0.6*price;
        case 'student':
            return 0.68*price;
        case 'senior':
            return 0.68*price;
        case 'under_5':
            return 0;
    }
}