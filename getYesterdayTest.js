  //test getYesterdayDate function -first day of the year -New year
  describe('getYesterdayDate Test -first day of the year -New year', () => {
    it('It should return yesterdays date', () => {
        //arrange
        let y = 2018, m = 1, d = 1;
        //act
        const actualResult = getYesterdayDate(m, d, y);
        //assert
        expect(actualResult).toBe("12/31/2017");
    })
});

  //test getYesterdayDate function -first day of the month
  describe('getYesterdayDate Test -first day of the month', () => {
    it('It should return yesterdays date', () => {
        //arrange
        let y = 2018, m = 12, d = 1;
        //act
        const actualResult = getYesterdayDate(m, d, y);
        //assert
        expect(actualResult).toBe("11/30/2018");
    })
});

  //test getYesterdayDate function -first day of the year -New year
  describe('getYesterdayDate Test', () => {
    it('It should return yesterdays date', () => {
        //arrange
        let y = 2018, m = 10, d = 15;
        //act
        const actualResult = getYesterdayDate(m, d, y);
        //assert
        expect(actualResult).toBe("10/14/2018");
    })
});