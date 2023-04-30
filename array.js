// 1  Write a function that takes an array of integers and returns 
// the sum of all the elements in the array.

// var array=[1,2,3,4,5];
// var sum =0;
// function program(array){
// for(i=0;i<array.length;i++){
//     sum=sum+array[i];

// }
// console.log(sum);
// }
// program(array);




// 2 Write a function that takes an array of integers and 
// returns the maximum value in the array.

// var num=[1,2,23,67,234,12345];
// min=num[0];
// function max(num){
// for(i=0;i<num.length;i++){
//     if(num[i]>min){
//         min=num[i];

//     }
// }
// console.log(min);
// }
// max(num);


// 3 Write a function that takes an array of integers and 
// returns the minimum value in the array.

// var num=[0,1,45,67,56,78,98,234567,12345]
// min=num[0]; 
// function min(num){

// for(i=0;i<num.length;i++){
//     if(num[i]<min){
//         min=num[i];
//     }

// }
// console.log(min);
// }
// min(num);



// 4 Write a function that takes an array of integers and returns a new array 
// that contains only the even numbers in the original array.

// var array =[2,24,1,3,4,8];
// var even=[];
// function program(array){
//     for(i=0;i<array.length;i++){
//         if(array[i]%2==0){
//             even.push(array[i]);     
//         }
//     }
//     console.log(even);
// }
// program(array);



// 5 Write a function that takes an array of integers and returns a new array that contains
//  only the odd numbers in the original array.
// var array =[3,5,7,8,9,11];
// var odd=[];
// function program (odd){
//     for(i=0;i<array.length;i++){
//         if(array[i]%2!==0){
//             odd.push(array[i]);
//         }
//     }
//      console.log(odd);

// }
// program(odd);



// 6 Write a function that takes an array of integers and returns
//  the average value of the elements in the array.

// var array=[1,2,3,4,5,6];
// var sum=0;
// var aver;
// function program(array){
//     for(i=0;i<array.length;i++){
//         sum=sum+array[i];
// }
// aver=sum/array.length;
//     console.log(aver);

// }
// program(array);



// 7  Write a function that takes an array of integers and returns the 
// number of elements in the array that are greater than a given value.


// var array =[1,2,3,4,5,6];
// console.log(array.length)
// var num=3;
// var final=[];
// function program (array){
//     for(i=0;i<array.length;i++){
//         if(array[i]>num){
//           final.push(array[i]);
//         }
//     }
//     console.log(final);
// }
// program(array);


// var array =[1,13,14,15];
// var num=1;
// var old=[];
// function program(old){

// for(i=0;i<array.length;i++){
//     if(array[i]>num){
//         old.push(array[i]);

//     }
   
// }
// console.log(old);
// }
// program(old);
  


// 8 Write a function that takes two arrays of integers and returns a new array 
// that contains the elements that appear in both arrays.

// var array1=[1,2,3,4,5,6,7];
// var array2=[3,4,5,6,7];
// var common=[];
// function program(common){
// for(i=0;i<array1.length;i++){
//     for(j=0;j<array2.length;j++){
//        if(array1[i]==array2[j]){
//         common.push(array1[i]);

//        } 
//     }
// }
// console.log(common);
// }
// program(common);



//  9 Write a function that takes an array of integers and returns a new array 
// that contains the elements of the original array in reverse order

// var a=[1,2,3,4,5,6,7];
// var empty=[];
// function reverse(a){
// for(i=a.length-1;i>0;i--){
//     empty.push(a[i])

// }
// console.log(empty);
// }

// reverse(a);



//10. Write a function that takes an array of integers and returns a new arra
// y that contains the cumulative sum of the elements in the original array.

// var array=[10,15,20,25,30];
// var sum=0;
// var cum=[];
// function program(cum){
// for(i=0;i<array.length;i++){
//     sum=sum+array[i];
//     cum.push(sum);
// }
// console.log(cum);
// }
// program(cum);


// Q. Write a function that takes two arrays of integers and returns a new array that
//  contains the sum of both arrays combined. For example : 
// arr1 = [1,2,3,4,5,6,7,8,9],
//  arr2 = [4,5,6,7,8,9,1,2,3].
//  Output = [5,7,9,11,13,15,8,10,12].

// var arr1 = [1,2,3,4,5,6,7,8,9];
// var arr2 = [4,5,6,7,8,9,1,2,3];
// var sum =0;
// var output=[];

// for(i=0;i<arr1.length;i++){
//     sum=arr1[i]+arr2[i];
//     output.push(sum)

    
// }
// console.log(output);


// var arr1 = [1,2,3,4,5,6,7,8,9,10];
// var arr2 = [4,5,6,7,8,9,1,2,3];
// var sum =0;
// var output=[];
// if(arr1==arr2){
//     for(i=0;i<arr1.length;i++){
//         sum=arr1[i]+arr2[i];
//         output.push(sum)
    
        
//     }
//     console.log(output);
    

// }
// else{
//     console.log("not equal array" )
// }




// var array=[34,45,65,23,10,676,34,39]
//  var target=66;
//  var sum=0;
//  var empty=[];
//  for(i=0;i<array.length;i++){

//     if(target==array[i]){
//         sum=sum[i]+1;
//         empty.push(sum);
//         console.log(sum)

//     }
//     else{
//         console.log("not found")
//     }
    
//  }




 var start=5799;
 var end=78659;
 var sum=0;
 for(i=start;i<=end;i+2){
    sum=sum+i;





 }
 console.log(sum);

 













 





