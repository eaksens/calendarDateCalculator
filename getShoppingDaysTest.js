

describe('getShoppingDays Test', () => {
    it('should return Shopping Days before Christmas', () => {
        // arrange
        let y = 2018, m = 11, d = 24;
        // act
        const actualResult = getShoppingDays(y, m, d);
        // assert
        expect(actualResult).toBe(25);
    })
});
