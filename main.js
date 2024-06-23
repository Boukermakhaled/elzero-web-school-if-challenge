let a;

a < 10 ? console.log(10) 
: a >= 10 && a <= 40 ? console.log("10 to 40") 
: a > 40 ? console.log("bigger than 40") 
: console.log("unknow");
/////

let st="Elzero web school";

if(( st.length * 2).toString() === "34"){
    console.log("good");
}
if( st.charAt(st.indexOf("w")) === "w"){
    console.log("good");
}
if( st.length !== "string"){
    console.log("good");
}
if( typeof(st.length) === "number"){
    console.log("good");
}
if( (st.substring(0,6)).repeat(2) === "ElzeroElzero"){
    console.log("good");
}