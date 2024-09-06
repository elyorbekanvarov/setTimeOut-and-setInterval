let timeoutId;
function startTimer() {
    timeoutId = setTimeout(() => window.alert("Hello"), 3000);
    console.log("STARTER");
}
function clearTimer() {
    clearTimeout(timeoutId);
    console.log("CLEARED");
}
let counter = 0;
const countInterval = setInterval(count, 1000);
setInterval(count, 1000);
function count() {
    console.log(counter++);
    if (counter > 5) {
        clearInterval(countInterval);
    }
}