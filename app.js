 let userName = prompt("Enter your name");
 console.log(userName);
 

let userGender = prompt("Enter your gender: \nMale or Female");
let userAge = prompt("Enter your age")
if (userAge <= 0){
    alert("your age must be more than 0")
};

let skipWelcomeMassage = confirm("skip welcoming massage?")
if (skipWelcomeMassage == false)
    {
    if (userGender==="male" || userGender==="Male"){
        alert("Hello "+"Mr. "+ userName )
    } else if (userGender==="female" || userGender==="Female"){
        alert("Hello "+"Ms. "+ userName )
    }else {
        alert("Hello " + userName)
    };
};

let arr =[];
// im
let likeReading = prompt("Do you like reading \nYes or No")
if (likeReading==="yes" || likeReading==="Yes"){
  arr.push(likeReading);
} else if (likeReading==="no" || likeReading==="No"){
    arr.push(likeReading);
} else {
    arr.push("invalid");

};

let sleepEarly  = prompt("Do you sleep early?  \nYes or No")
if (sleepEarly ==="yes" || sleepEarly ==="Yes"){
  arr.push(likeReading);
} else if (sleepEarly ==="no" || sleepEarly ==="No"){
    arr.push(sleepEarly);
} else {
    arr.push("invalid");

};
let loveJs = prompt("Do you love Js?  \nYes or No")
if (loveJs ==="yes" || loveJs ==="Yes"){
  arr.push(loveJs);
} else if (loveJs ==="no" || loveJs==="No"){
    arr.push(loveJs);
} else {
    arr.push("invalid");

};
for(let i = 0;i <=arr.length;i++){
    console.log(arr[i]);
};


//trails
//  let likeReading = confirm("Do you like reading?");
// let sleepEarly = confirm("Do you usually sleep early?")
// let loveJs = confirm("Do you love Js?")
// alert(arr[0], arr[1],arr[2])
// console.log(arr);
