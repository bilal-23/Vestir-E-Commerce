export const validateEmail = (email: string): boolean => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validRegex)) {
        return true;
    } else {
        return false;
    }
}
export const validatePassword = (password: string): boolean => {
    // Minimum eight characters, at least one uppercase letter, one lowercase letter, and one digit
    if (password.length < 8) {
        return false;
    }
    if (password.search(/[a-z]/) < 0) {
        return false;
    }
    if (password.search(/[A-Z]/) < 0) {
        return false;
    }
    return true;
}

export const validateName = (name: string): boolean => {
    if (name.length < 2) {
        return false;
    }
    return true;
}

export const validatePhone = (phone: string): boolean => {
    if (phone.length < 10) {
        return false;
    }
    return true;
}

export const validateAddress = (address: string): boolean => {
    if (address.length < 5) {
        return false;
    }
    return true;
}
export const validateCity = (city: string): boolean => {
    if (city.length < 2) {
        return false;
    }
    return true;
}
export const validateState = (state: string): boolean => {
    const states = [
        'Andhra Pradesh',
        'Arunachal Pradesh',
        'Assam',
        'Bihar',
        'Chhattisgarh',
        'Goa',
        'Gujarat',
        'Haryana',
        'Himachal Pradesh',
        'Jharkhand',
        'Karnataka',
        'Kerala',
        'Madhya Pradesh',
        'Maharashtra',
        'Manipur',
        'Meghalaya',
        'Mizoram',
        'Nagaland',
        'Odisha',
        'Punjab',
        'Rajasthan',
        'Sikkim',
        'Tamil Nadu',
        'Telangana',
        'Tripura',
        'Uttar Pradesh',
        'Uttarakhand',
        'West Bengal',
        'Andaman and Nicobar Islands',
        'Chandigarh',
        'Dadra and Nagar Haveli and Daman and Diu',
        'Lakshadweep',
        'Delhi',
        'Puducherry',
    ]
    return states.includes(state)
}
