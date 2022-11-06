function vowelCount(str){
    let lrCase = str.toLowerCase()
    let letterSet = [...new Set(lrCase)]//create a unique array of letters
    let vowelSet = letterSet.filter(function(lttr){
        return "aeiou".indexOf(lttr) !== -1 ? true : false;
    })
    console.log(vowelSet)
    let vMap = new Map()
    for (let vowel of vowelSet){
        let vCount = 0
        for (let letz of lrCase){
            letz === vowel ? vCount ++ : false
        }
        //console.log(vowel,vCount)
        vMap.set(vowel,vCount)
    }
    return vMap
    //spread keys into a Map
    //make an object where all keys are vowel set

}