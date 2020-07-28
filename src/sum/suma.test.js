const sum = require('./suma');

test('2.5 + 3 = 5.5', ()=>{
    expect(sum(2.5,3)).toBe(5.5)
})