let simbolsFrequrnciArray = []
class Node {  
    constructor(value, char, left, right) {  
        this.val  =value; 
        this.char  =char; 
        this.left = left;  
        this.right = right;  
    }  
}
const encode = (text) => {
    const listOfFrequenciAndSImbols = getFrequenciSimbols(text)
    const binaryTree =  getBinaryTree(listOfFrequenciAndSImbols)
    const mapHuffmanCode = getHuffmanCode(binaryTree)

    const huffmancode = getBinaryString(mapHuffmanCode, text)

    return huffmancode

}

const getFrequenciSimbols = (text) => {
    for(let i = 0;i < text.length;i++){
        countFrenquenci(text.charAt(i))
    }

    return simbolsFrequrnciArray
    
}

const countFrenquenci = (simbol) => {
    let element = simbolsFrequrnciArray.find(element => element.simbol == simbol)
    if(element !== undefined || null) {
        return element.frequenci += 1
    }

    return simbolsFrequrnciArray.push({simbol, frequenci: 1})
}


const getBinaryTree = (listOfChar) => {
    let tree = [] 

    for(let char in listOfChar){
        let currentChar = listOfChar[char]

        let node = new Node(currentChar.frequenci, currentChar.simbol)
        tree.push(node)
    }

    let allNodes = []

    while(tree.length !== 1){
        tree.sort((a,b)=>{
            
            return a.val - b.val
        })

        let node = new Node(tree[0].val + tree[1].val, '') 
        
        allNodes.push(tree[0])
        allNodes.push(tree[1])

        node.left = allNodes[ allNodes.length -2 ]
        node.right = allNodes[ allNodes.length - 1 ]

        tree = tree.slice(2)

        tree.push(node)
        


    }

    return tree[0]

}

const getHuffmanCode = (binaryTree) => {
    let code = {}

    const encoded = (node, path) => {
       
        if(!node.length && !node.right) return
        if(node.left && !node.left.left && !node.left.rigth){
            
             code[node.left.char] = path + '0'
        }
        if(node.right &&  !node.right.left && !node.right.right ){
            
           
             code[node.right.char] = path + '1'
        }
        if(node.left){
           
            encoded(node.left, path + '0')
        }
        if(node.right){
           
            encoded(node.right, path + '1')
        }
         code
    }
    encoded(binaryTree,'')
    return code
    
}

const getBinaryString = (map, originalString) => {
    let result = ''
    for(let i = 0; i < originalString.length ; i++ ){
        result += map[originalString[i]]
    }
    return result
}

console.log(encode('hello world'))

module.exports = {
    getFrequenciSimbols,
    countFrenquenci,
    getBinaryTree,
    getHuffmanCode,
    getBinaryString
    
}