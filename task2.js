const button = document.getElementById('myMin');
const div = document.querySelector('.out2');

button.onclick = function () {
    let myArr = [2, 4, 5, 7, 9, 4, 1, 16];
    let min = Infinity;

    function getMin(Arr) {
        for (let item in Arr) {
            if (Arr[item] < min) {
                min = Arr[item];
            }
        }
        return min;
    };
    let final = getMin(myArr);
    div.innerHTML = ("Результат" + ": " + final);
    console.log(getMin(myArr));
};