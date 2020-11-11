const { getGift } = require("../../helpers/getGifts");

describe('getGif helper test', () => {
    test('should get 10 elements', async ()=>{
       const gifts=await getGift('chavo');

       expect(gifts.length).toBe(10);
    });

    test('if any category is not passed', async ()=>{
        const gifts=await getGift();
        expect(gifts.length).toBe(10);
     });
})