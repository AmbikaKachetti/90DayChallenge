let array = [10, 6, 5, 1, 2, 7, 3, 8, 4, 9];
for(i=0; i<array.length;i++){
    for(j= i-1; j < array.length;j++){
        if(array[i]>array[j+1]){
            var temp = array[i];
            array[i] = array[j+1];
            array[j+1] = temp;
        }
    }
}
console.log(array);