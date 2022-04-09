const { getHuffmanCode } = require("../index")

test('return a map whith char : value em binary ', ()=>{
    const map = {
        val: 5,
        char: '',
        left:  {
          val: 2,
          char: '',
          left:  { val: 1, char: 'h', left: undefined, right: undefined },
          right:  { val: 1, char: 'e', left: undefined, right: undefined }
        },
        right: { val: 3, char: 'l', left: undefined, right: undefined }
      }

    const response = getHuffmanCode(map)
    
      expect(response).toEqual({ l: '1', h: '00', e: '01' })
})