let count1 = 0;
let count2 = 0;
const counter1 = document.getElementById('counter1');
const incrementBtn1 = document.getElementById('increment1');
const decrementBtn1 = document.getElementById('decrement1');

const counter2 = document.getElementById('counter2');
const incrementBtn2 = document.getElementById('increment2');
const decrementBtn2 = document.getElementById('decrement2');

const words1 = ["Hello", "World", "Banana", "Monkey", "Counter"];
const words2 = ["Apple", "Orange", "Grape", "Lemon", "Peach"];
let wordIndex1 = 0;
let wordIndex2 = 0;
const word1 = document.getElementById('word1');
const word2 = document.getElementById('word2');

incrementBtn1.addEventListener('click', () => {
    count1++;
    counter1.textContent = count1;
    wordIndex1 = (wordIndex1 + 1) % words1.length;
    word1.textContent = words1[wordIndex1];
});

decrementBtn1.addEventListener('click', () => {
    count1--;
    counter1.textContent = count1;
});

incrementBtn2.addEventListener('click', () => {
    count2++;
    counter2.textContent = count2;
    wordIndex2 = (wordIndex2 + 1) % words2.length;
    word2.textContent = words2[wordIndex2];
});

decrementBtn2.addEventListener('click', () => {
    count2--;
    counter2.textContent = count2;
}); 