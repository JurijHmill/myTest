const button3 = document.getElementById('myGetEven');
const div3 = document.querySelector('.out3');

button3.onclick = function () {
    let myArr = [2, 4, 5, 7, 9, 4, 1, 16];

    function getEven(Arr) {
        let EvenArr = []
        for (let item in Arr) {
            if (Arr[item] % 2 == 0) {
                EvenArr.push(Arr[item]);
            }
        }
        return EvenArr;
    };
    let final = getEven(myArr);
    div3.innerHTML = ("Результат" + ": " + "[" + final.join(', ') + "]");
};