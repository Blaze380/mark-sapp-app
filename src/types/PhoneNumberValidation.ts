interface Format {
    international: string;
    local: string;
}

interface Country {
    code: string;
    name: string;
    prefix: string;
}

export interface PhoneNumberValidation {
    phone: string;
    valid: boolean;
    format: Format;
    country: Country;
    location: string;
    type: string;
    carrier: string;
}