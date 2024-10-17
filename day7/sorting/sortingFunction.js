function Sorting(array){
    for(i=0; i<array.length;i++){
        for(j=i-1; j<array.length;j++){
            if(array[i]>array[j+1]){
                var temp = array[i];
                array[i] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
}
let array1 = [10, 6, 5, 1, 2, 7, 3, 8, 4, 9];
let array2 = [22, 1, 4, 12];
Sorting(array1);
Sorting(array2)
console.log(array1);
console.log(array2);