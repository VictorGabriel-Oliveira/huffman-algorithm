 const { getBinaryTree} = require('../index')
 test('return binary tree of list ', ()=>{
    const response =getBinaryTree([
        { simbol: 'h', frequenci: 1 },
        { simbol: 'e', frequenci: 1 },
        { simbol: 'l', frequenci: 3 }
      ])
      const responseExpeted = {
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

      expect(response).toEqual(responseExpeted)
})
