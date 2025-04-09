export const validateInput = (input) => {
    const regex = /^[A-Z][a-z]*$/;
    if (!regex.test(input)) {
        return "Ім'я повинно починатися з великої літери та містити лише літери латиниці"
    }
    return '';
}