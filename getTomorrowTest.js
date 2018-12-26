//test getTomorrowDate last day of the Month
describe('getTmrwDate Test -last day of the Month', () => {
    it('It should return tomorrow date', () => {
        //arrange
        let y = 2018, m = 11, d = 30;
        //act
        const actualResult = getTmrwDate(m, d, y);
        //assert
        expect(actualResult).toBe("12/1/2018");
    })
});

//test getTomorrowDate last day of the year
describe('getTmrwDate Test -last day of the year', () => {
    it('It should return tomorrow date', () => {
        //arrange
        let y = 2017, m = 12, d = 31;
        //act
        const actualResult = getTmrwDate(m, d, y);
        //assert
        expect(actualResult).toBe("1/1/2018");
    })
});

//test getTomorrowDate last day of the year
describe('getTmrwDate Test', () => {
    it('It should return tomorrow date', () => {
        //arrange
        let y = 2017, m = 10, d = 30;
        //act
        const actualResult = getTmrwDate(m, d, y);
        //assert
        expect(actualResult).toBe("10/31/2017");
    })
});


