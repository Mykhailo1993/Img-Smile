
setInterval(() => {
    let img = document.getElementsByTagName("img");
    let arrayImg = findImg(img);
    let reverseImg = reverseArr(arrayImg);
    console.log();
    let resultArr = removeUndefined(reverseImg);

    let idList = document.querySelector(".idList");
    resultArr.forEach(element => {
        idList.appendChild(element);
    });
}, 1000);





function findImg(arr) {
    let elementsImg = [];
    for (let i = 0; i < arr.length; i++) {
        elementsImg.push(arr[i]);
    }
    return elementsImg;
}

function reverseArr(arr) {
    let newArr = [];
    for (let i = arr.length; i > -1; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}


function removeUndefined(arr) {
    let localArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== undefined) {
            localArr.push(arr[i]);
        }
    }
    return localArr;
}
