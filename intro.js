// let a=false; // variable define
// console.log(a); // for print
// for(let i=0; i<=10; i++){ // for loop
//     console.log(i);
// }
// for(let i=1; i<=10; i++){
//     if(i%2==0){
//     console.log("even"+ i);
//     }
//     else{
//     console.log("odd","oo sit"+ i);
//     }
// }
// let i=1;
// while(i<10){
//     console.log(i);
//     i++;
// }

// let arr=[1,2,3,4,'this is varis',true,10.5];
// arr[4]="hi"; // for add
// console.log(arr);
// let arr2=[];
// arr2.push("hello") // foe add
// arr2.pop(); // remove
// arr2[4]='hello';
// console.log(arr2);
// arr.length;

// let arr=[4];
// console.log(arr[8]);
// let arr1 = new Array(10);
// console.log(arr1[5]);
// arr1.push("hello");
// console.log(arr1.length);
// let a=10;
// a=20;
// console.log(a);

// const a=[];
//  a[1]="Varis";
//  console.log(a);
//  let arr = [1,2,3,1,5,6,4,4,8,4];
//  for(let i=0; i<=arr.length; i++){
//     console.log(arr[i]);
//  }

// let arr=["Red","Green","White"];
// let str= "";
// for(let i=0; i<arr.length; i++){
// str +=arr[i];
// }
// console.log(str);

// let arr = [[1,2,3],[4,5,6],[7,8,9]];
// let sum=0;
// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr[i].length; j++){
//    sum+=arr[i][j];
//     }
// }
// console.log(sum);

//frequent
// let arr=[3,3,3,4,3,2,4,3,2];
// let max=0;
// let element;
// for(let i=0; i<arr.length; i++){
//     let count=1;
// for(let j=i+1; j>arr.length; j++){
// if(arr[i]==arr[j]){
//     count++;
// }
// }
// if(count>max){
//     max=count;
//     element=arr[i];
// }
// }
// console.log(element);

//flatterned array

// let arr = [[1,2,3],[4,5,6],[7,8,9]];
// let ans=[];
// for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr[i].length; j++){
//        ans.push(arr[i][j]); // ans[(i*arr.length)+j]=arr[i][j];
//         }}
//         console.log(ans);

//brute force
// let arr=[1,2,3,4];
// for(let i=0; i<arr.length; i++){
//     arr[i]+=2;
// }
// console.log(arr);
//optimize solution
// let arr=[1,2,3,4];
// function addTwo(data,index){
//     return data+2;
// }
// arr=arr.map(addTwo);
// console.log(arr);

//map is method on array
// let arr=[1,2,3,4];
// function print(data,index){
// console.log(index,data);
// }
// arr.map(print);

//how to define function
// function abc(a,b){
// console.log("hello");
// }
// abc();

// let arr=[1,2,3,4,5,6,7,8,9];
// let ans=[];
// for(let i=0; i<arr.length; i++){
//     if(arr[i]%2!=0){
// ans.push(arr[i]);
//     }
// }
// console.log(ans);
// function removeEven(data,index){
// if(data%2==0){
//     return false;
// }else{
//     return true;
// }
// }
// let ans=arr.filter(removeEven);
// console.log(ans);

//String
// let abc=1223;
// let str1="VR"+abc;
// let str2='VR';
// let str3=`rana ${abc}`;
// console.log(str1,str2,str3);
// console.log(str1[1]);

// let str1="VarisRana";
// for(let i=5; i<str1.length; i++){
//     console.log(str1[i]);
// }

// converting decimal to binary

// function decimalToBinary(number){
//     let ans=" ";
//     while(number>0){
//         let rem=number%2;
//         ans=rem+ans;
//         number=Math.floor(number/2);//Math,floor ke jagh parseUnt() ka use kr sakte hai
//     }
//     console.log(ans);
// }
// decimalToBinary(parseInt("10"));

// function binaryToDecimal(binary){
//     let ans=0;
//     let power=0;
//   for(let i=binary.length-1; i>=0; i--){
//       let binaryDigit = parseInt(binary[i]);
//       ans+=(Math.pow(2,power) * binaryDigit);
//       power+=1;
//   }
//   console.log(ans);
// }
// binaryToDecimal("1010101010");

//Substring

// let string = "Varis Hemraj Rana";
// console.log(string.substring(3,10));

//.toUpperCase();
//this fucntion converting lower to upeer case

// let string ="Varis Rana";
// console.log(string.toUpperCase());

// Question

// let string="varis rana";
// let ans=string.substring(0,1);
// console.log(ans.toUpperCase());

// Objects

// declare
// let obj ={
//     "hello":1,
//     2:"helloo2",
//     "hello3":"three",

// }
// obj[2]="two";
// console.log(obj["hello3"]);
// console.log(obj[2]);
// obj["five"]=5;
// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// reverse a string

// function reverseString(str) {
//   if (!str || str.length < 2 || typeof str !== "string") {
//     return "Not valid";
//   }
//   const revArray = [];
//   const length = str.length - 1;

//   for (let i = length; i >= 0; i--) {
//     revArray.push(str[i]);
//   }

//   return revArray.join("");
// }

// console.log(reverseString("varis rana is good coder!!"));

