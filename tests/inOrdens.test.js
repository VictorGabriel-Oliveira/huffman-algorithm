const { getFrequenciSimbols } = require("../index")

 test('return a list whith frequenci elements', ()=>{
     const response = getFrequenciSimbols("hello world")
    const responseExpexted = [
        { simbol: 'h', frequenci: 1 },
        { simbol: 'e', frequenci: 1 },
        { simbol: 'l', frequenci: 3 },
        { simbol: 'o', frequenci: 2 },
        { simbol: ' ', frequenci: 1 },
        { simbol: 'w', frequenci: 1 },
        { simbol: 'r', frequenci: 1 },
        { simbol: 'd', frequenci: 1 }
      ]
    expect(response).toEqual(responseExpexted)
 })