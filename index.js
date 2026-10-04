// Iteration 1: Names and Input

let hacker1 = "Sam"
let hacker2 = "Brave"

console.log(`Yhe driver's name is ${hacker1}`)
console.log(`Yhe navigators's name is ${hacker2}`)


// Iteration 2: Conditionals

if(hacker1.length < hacker2.length){
    
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} caracters.`)

}else if(hacker1.length > hacker2.length){
    
    console.log(`The driver has the longest name, it has ${hacker1.length} caracters.`)
    
}else{
    
    console.log(`Wow, you both have equally long names, ${hacker1.length} caracters!`)

}


// Iteraton 3: Loops

let chars = "";
let reversed = "";

for(let i = 0; i < hacker1.length; i++){
    
    chars += hacker1[i].toUpperCase() + " ";
}

console.log(chars);

for (let j = hacker1.length-1; j >= 0; j--){
    
    reversed += hacker1[j];
}

console.log(reversed)

let char = "abcdefghijklmnopqrstuvwxyz"

if(char.indexOf(hacker1[0].toLocaleLowerCase()) > char.indexOf(hacker2[0].toLocaleLowerCase())){
   
    console.log("Yo, the navigator goes first, definitely")

}else if(char.indexOf(hacker1[0].toLocaleLowerCase()) < char.indexOf(hacker2[0].toLocaleLowerCase())){
   
    console.log("The driver's name goes first.")
    
}else{
   
    console.log("What?! You both have the same name?")

}

// BONUS 1

const longText = "Proin sit amet lorem venenatis lorem mattis lacinia vitae a est. Suspendisse accumsan lacinia neque et blandit. Suspendisse viverra massa quis ipsum pharetra pellentesque. Nulla facilisi. Quisque quis dolor nec orci consequat feugiat quis ut eros. Duis vehicula et velit a dapibus. Etiam malesuada placerat mauris, quis molestie leo hendrerit mollis. Maecenas vulputate, leo a pellentesque auctor, lectus neque feugiat nisi, quis feugiat magna nunc at orci. Praesent odio arcu, hendrerit vel lorem eu, rhoncus vestibulum nisl. Maecenas commodo ultrices mi, et interdum tellus volutpat ut.

Aliquam vitae suscipit risus, quis egestas risus. Phasellus mauris tellus, imperdiet vel dictum ut, congue in tortor. Sed ornare ipsum lorem. Sed venenatis turpis blandit lorem varius viverra. Aenean ultricies quam orci, eu blandit nulla varius convallis. In et mollis ipsum. Phasellus viverra ultrices ligula, sit amet tincidunt urna cursus sed. Aliquam dignissim semper erat vel feugiat. Praesent in eleifend nisi. Sed egestas a est sed consectetur. Nam tempor semper erat, a consequat lectus commodo non. Proin eros augue, dictum nec mollis non, pharetra elementum urna. Etiam eros odio, molestie at mi at, pellentesque bibendum nibh. In vitae ornare eros.

Pellentesque fringilla erat ex, quis feugiat enim elementum in. Cras nec ex quis urna dignissim vestibulum et non nibh. Aenean facilisis a arcu ultricies tincidunt. Fusce maximus arcu non velit hendrerit tincidunt. Sed pellentesque et nulla accumsan aliquam. Vestibulum et libero et arcu tincidunt sollicitudin quis vitae purus. Pellentesque ultricies erat vitae facilisis posuere. Nullam mollis tincidunt augue in vehicula. Donec at justo sit amet metus fringilla egestas ut maximus lectus. Integer congue, purus suscipit facilisis volutpat, purus magna condimentum nibh, eu tristique urna massa sed tellus. Aliquam lobortis feugiat ante et vehicula. Integer blandit accumsan purus, quis pellentesque ante maximus quis. Morbi sodales sodales dapibus. Nam commodo vulputate mauris et maximus. Duis lorem nibh, iaculis at nisl id, fermentum fringilla ligula."

let wordCount = 0;
let inicioPalabra = "";

if (longText.length > 0){
  wordCount = 1;
}

for (let i = 0; i < longText.length; i++){
  if (longText[i] !== " " && longText[i-1] === "\n" || longText[i] !== "." || longText[i] !== "/n"){
    wordCount++;
  }
}


console.log(wordCount);
