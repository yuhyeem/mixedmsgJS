// data for messages stored in these variables
const sent1 = ["Ayo,", "Look man,", "Listen here,"]
const sent2 = ["keep ya head up", "don't worry about all that", "shrug it off"]
const sent3 = ["and keep it pushing.", "and keep it moving.", "and keep ya chin up."]

// function to generate messages
const genMsg = (array1, array2, array3) => {
    console.log(`${sent1[Math.floor(Math.random() *3)]} ${sent2[Math.floor(Math.random()*3)]} ${sent3[Math.floor(Math.random() *3)]}`)
}
genMsg(sent1, sent2, sent3)