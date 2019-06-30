module.exports = {
    generateArray: function (arr, length,  min, max) {
        for (let i = 0; i < length; i++) {
            arr[i] = parseInt(Math.random() * (max-min+1) + min, 10);
        }
    },
    testArray: function (arr) {
        let str = '';
        for (let i = 0; i < arr.length; i++) {
            str += arr[i] + " ";
        }
        console.log(str);
    },
}
