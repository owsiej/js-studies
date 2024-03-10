const array = [4,90,34,37,56,64,34,5,88,45,3,5,345,34,5,345,34,5,34,5756,7,56,756,34,5,34]

function bubbleSort(arr) {
    for (let i =0; i<arr.length-1; i++) {
        for (let j=1; j<arr.length-i; j++) {
            if (arr[j]<arr[j-1]) {
                let temp = arr[j];
                arr[j]=arr[j-1];
                arr[j-1]=temp;
            }
        }
    }
}
bubbleSort(array);
console.log(array);