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