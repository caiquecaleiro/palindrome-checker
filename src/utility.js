export const palindromeChecker = (value) => {
    const formattedValue = value.replace(/[\W_]/g, '').toLowerCase();

    return formattedValue === formattedValue.split('').reverse().join('');
}