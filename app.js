// Chapter 17-20

// // Q1)
var multiDimensionalArray=[[]];

// Q2)
var multiDimensionalArray=[[0,1,2,"3<br>"],[1,0,1,"2<br>"],[2,1,0,"1<br>"]];
document.write(multiDimensionalArray, "<br>");

// Q3)
for(var i=1; i<=10; i++){
    document.write(i,"<br>");
}

// Q4)
var tableNo=+prompt("Enter number to generate table:");
var length=+prompt("Enter length of multiplication table:");
document.write("<br>Multiplication table of "+tableNo+" Length"+length+"<br>")
for(var i=1; i<=length; i++){
document.write("<br>"+tableNo + " x " + i +" = "+ tableNo*i +"<br>");
}

// Q5)
var fruits=["apple", "banana", "mango", "orange", "strawberry"];
document.write("<br>",fruits[0],"<br>",fruits[1],"<br>",fruits[2],"<br>",fruits[3],"<br>",fruits[4],"<br>");
document.write("<br>Element at index 0 is ",fruits[0],"<br>Element at index 1 is ",fruits[1],"<br>Element at index 2 is ",fruits[2],"<br>Element at index 3 is ",fruits[3],"<br>Element at index 4 is ",fruits[4]);

// Q6)

// Counting:
document.write("<br><h2>Counting:</h2>");
for(var i=1; i<=15; i++){
document.write(i,",");
}

// Reverse Counting:
document.write("<br><h2>Reverse Counting:</h2>");
for(var i=10; i>=1; i--){
document.write(i,",");
}

// Even Numbers:
document.write("<br><h2>Even:</h2>");
for(var i=0; i<=20; i++){
    if(i%2==0){
       document.write(i,",");}
}
// Odd Numbers:
document.write("<br><h2>Odd:</h2>");
for(var i=1; i<=20; i++){
    if(i%2!=0){
       document.write(i,",");}
}
// Series Numbers:
document.write("<br><h2>Series:</h2>");
for(var i=1; i<=20; i++){
    if(i%2==0){
       document.write(i,"k, ");}
}

// Q7)
var A=["cake", "apple pie","cookie", "chips", "patties"];
var userInput=prompt("Welcome ABC bakery, What do yu want to order sir/ma'am ?");
var flag=false;
for(var i=0; i< A.length; i++){
if(userInput==A[i]){
    flag=true;
    alert(userInput+ " is available at index "+ i + " in our bakery.");
}
}
if(flag==false){
    alert("We are sorry. " + userInput + " is not available in our bakery.");
}

// Q8)
var A=[24,53,78,91,12];
var largest=A[0];

for(var i=1; i<A.length; i++){
    if(A[i] > largest){
        largest=A[i];
    }
}
document.write("<br><br>Array Items: ", A);
document.write("<br>The largest Number is : ", largest);

// Q9)
var A=[24,53,78,91,12];
var smallest=A[0];

for(var i=1; i<A.length; i++){
    if(A[i] < smallest){
        smallest = A[i];
    }
}
document.write("<br><br>Array Items: ", A);
document.write("<br>The smallest Number is : ", smallest, "<br><br>");

// Q10)
for(var i=1; i<=20; i++){
var table=5*i;
document.write(table,",");
}

// X===================================================================================================X