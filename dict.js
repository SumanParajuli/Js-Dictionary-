// Prototype
/*
populate the button using javascript to dom.
user clicks that button filled with text.
the button having that text value dissappears. The text value of that button will now be the text value inside the search box.
when user clicks the search button, user will get the relevant meaning of that searched word.
*/


let dictObj = {
    word1: "beginner",
    meaning1 : "a person just starting to learn a skill or take part in an activity.",

    word2 : "excited",
    meaning2 : "very enthusiastic and eager.",

    word3 : "explore",
    meaning3 : "travel through (an unfamiliar area) in order to learn about it.",

    word4: "achieve",
    meaning4 : "successfully bring about or reach (a desired objective or result) by effort, skill, or courage.",

    word5 : "esteemed",
    meaning5 : "held in great respect; admired."

}

const arr = Object.values(dictObj);
// Displays buttons dynamically.
for(let i=0; i<arr.length; i+=2){
    let div = document.getElementById('div');
    div.innerHTML += `<button class="btns" id='${i}'>${arr[i]}</button><span class="spacing"></span>`
}


//Displays the content of button to the searchbar
let searchedMeaning = document.getElementById('searchedMeaning');
for(let i=0; i<arr.length; i+=2){
    let buttons = document.getElementById(`${i}`);
        buttons.addEventListener('click', func1);
            function func1(){
                searchedMeaning.value =   `${arr[i+1]}`
                document.getElementById('searchbox').value = buttons.innerText;
                // buttons.remove(); 
            }
}


const btn = document.getElementById('submit');
btn.addEventListener('click', search);
// Word is even and meaning is odd.
function search(){
    if(dictObj != undefined){
        let result = document.getElementById('result');
        let word = document.getElementById('searchbox').value;
        let meaning = document.getElementById('searchedMeaning').value;
                result.innerHTML = `Results for the word "${word}"
                                    <br>Word: ${word}
                                    <br>Meaning: ${meaning}`;
    }
}

// for(let i=1; i<arr.length; i+=2){
//     let searchedMeaning = document.getElementById('searchedMeaning'); 
//     searchedMeaning.innerText = `Meaning -> ${arr[i]}`;
// }
