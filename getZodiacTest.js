//Test Zodiac -last day of Zodiac Period
describe('getZodiac Test -last day of Zodiac Period', () => {
    it('should return Zodiac of input date', () => {
        // arrange
        let y = 2018, m = 11, d = 23;
        // act
        const actualResult = getZodiac(m, d, y);
        // assert
        expect(actualResult).toBe("Sagittarius");
    })
});

//Test Zodiac -last day of Zodiac Period
describe('getZodiac Test -First day of Zodiac Period', () => {
    it('should return Zodiac of input date', () => {
        // arrange
        let y = 2018, m = 1, d = 20;
        // act
        const actualResult = getZodiac(m, d, y);
        // assert
        expect(actualResult).toBe("Capricorn");
    })
});
