// Saturday -Test day of the week
describe('getDayOfWeek Test -Beginning of getDay method Sat', () => {
    it('should return day of the week', () => {
        // arrange
        let y = 2018, m = 11, d = 24;
        // act
        const actualResult = getDayOfWeek(m, d, y);
        // assert
        expect(actualResult).toBe("Saturday");
    })
});

// Sunday -Test day of the week
describe('getDayOfWeek Test -End of getDay method Sun', () => {
    it('should return day of the week', () => {
        // arrange
        let y = 2018, m = 11, d = 25;
        // act
        const actualResult = getDayOfWeek(m, d, y);
        // assert
        expect(actualResult).toBe("Sunday");
    })
});
