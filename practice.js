// Write a program that creates an array of 5 integers 
// and then prints each element of the array.
  
// var array=[1,2,3,4,5]
// for(i=0;i<array.length;i++){

// }
// console.log(i);



// Write a program that creates an array of 10 integers,
//  asks the user to input 10 integers, 
// then prints the sum of all the elements in the array


// var array=[1,2,3,4,5,6,7,8,9,10];
// var sum=0;
// for(i=0;i<array.length;i++){
//     sum= sum+array[i];
    
// }
// console.log("sum",sum);

// console.log(array);



// Write a program that creates an array of 7 integers 
// and then prints the largest value in the array.

// var num=[1,2,3,4,5,6,7]
// var min=num[0];

// for(i=0;i<num.length;i++){
//     if(num[i]>min){
//     min=num[i];
//     }
    

// }
// console.log(min);



// Write a program that creates an array of 15 integers and then finds and prints 
// the index of the first occurrence of the value 10 in the array.




// Write a program that creates an array of 20 integers and then 
// calculates and prints the average of all the values in the array.


// var array=[12,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// var sum=0;
// var aver;
// for(i=0;i<array.length;i++){
//     sum=sum+array[i]
// }
//  aver=sum/array.length;
//  console.log(aver);



// Write a program that creates an array of 12 integers and then calculates and prints
//  the product of all the elements in the array.
// var array =[1,2,3,4,5,6,7,8,9,10,11,12];
// var product



//  Write a program that creates an  of 5 strings and then
//  prints each string in reverse order.

//     var str="asmaan"

//     var newstring="";
//     for(i=str.length-1;i>=0;i--){
//         newstring+=str[i];

//     }
//     console.log (newstring);

// using array 

//  var array =["anu","singh","maan"];

//  for(i=0;i<array.length;i++){
//     var str=array[i];
//     var rev="";
//     for(j=str.length-1;j>=0;j--){
//         rev=rev+str[j];

//     }
//     console.log(rev);
//  }




// Write a program that creates an array of 9 integers 
// and then sorts the array in ascending order. 
// The sorted array should then be printed.

// var array=[1,2,3,5,6,98,432,65,45];
// for (i=0;i<array.length;i++){
//     for(j=i+1;j<array.length;j++){
//         if(array[i]>array[j]){
//             var temp=array[i];
//             array[i]=array[j];
//             array[j]=temp;
//         }
//     }

// }
// console.log(array);



// var array=[1,2,3,5,6,98,432,65,45];
// for (i=0;i<array.length;i++){
//     for(j=i+1;j<array.length;j++){
//         if(array[i]<array[j]){
//             var temp=array[i];
//             array[i]=array[j];
//             array[j]=temp;
//         }
//     }

// }
// console.log(array);

var array =[1,2,3,4,54456,56765,34243,89,0];
for(i=0;i<array.length;i++){
    for(j=i+1;j<array.length;j++){
        if(array[i]<array[j]){
            var temp=array[i];
            array[i]=array[j];
            array[j]=temp
        }
        
    }
}console.log(array);



















