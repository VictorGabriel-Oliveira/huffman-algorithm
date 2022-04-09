const { getBinaryString } = require("..")

test('return a binary string', ()=>{
    const map = { l: '1', h: '00', e: '01' }
    const originalString = 'helll'

    const response = getBinaryString(map,originalString)
    
      expect(response).toEqual("0001111")
})