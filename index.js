let simbolsFrequrnciArray = []
class Node {  
    constructor(value, char, left, right) {  
        this.val  =value; // number of character occurrences  
        this.char  =char; // character to be encoded  
        this.left = left;  
        this.right = right;  
    }  
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

        let node = new Node(tree[0].val + tree[1].val, '') // setando a raiz da arvore 
        
        allNodes.push(tree[0])
        allNodes.push(tree[1])

        node.left = allNodes[ allNodes.length -2 ]
        node.right = allNodes[ allNodes.length - 1 ]

        tree = tree.slice(2)

        tree.push(node)
        


    }

    return tree[0]

}


module.exports = {
    getFrequenciSimbols,
    countFrenquenci,
    getBinaryTree
    
}