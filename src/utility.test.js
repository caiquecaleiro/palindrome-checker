import { palindromeChecker } from './utility';

it('the characters should not read the same backward as forward', () => {
    expect(palindromeChecker('test')).toEqual(false);
    expect(palindromeChecker('123')).toEqual(false);
    expect(palindromeChecker('madam, hannah')).toEqual(false);
});

it('should be a palindrome', () => {
    expect(palindromeChecker('madam')).toEqual(true);
    expect(palindromeChecker('hannah')).toEqual(true);
    expect(palindromeChecker('Was it a car or a cat I saw?')).toEqual(true);
    expect(palindromeChecker('A man, a plan, a canal, Panama!')).toEqual(true);
    expect(palindromeChecker(`No 'x' in Nixon`)).toEqual(true);
});

it('should remove special characters from the sentence', () => {
    expect(palindromeChecker('madam!!!!!')).toEqual(true);
    expect(palindromeChecker(',;~ma|dam     ')).toEqual(true);
});