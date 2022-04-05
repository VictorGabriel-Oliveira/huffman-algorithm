let simbolsFrequrnciArray = []
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



module.exports = {
    getFrequenciSimbols,
    countFrenquenci
}