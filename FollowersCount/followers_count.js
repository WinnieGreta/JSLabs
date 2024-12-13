let count = 0;

function increaseCount() {
    count++;
    displayCount();
    checkCountValue();
}

function displayCount() {
    document.getElementById("countDisplay").innerHTML = count;
}

function checkCountValue() {
    if (count === 10) {
        alert("10 followers, congrats!");
    } else if (count === 20) {
        alert("20 followers, keep it up!");
    } else if (count === 0) {
        alert("count reset");
    }
}

function reset() {
    count = 0;
    displayCount();
    checkCountValue();
}