// var firstName = "muhammad"
// var name = "hamza"

// console.log("my name is "+firstName +" "+name)


// // template literals ---> es6 module

// var firstName = "muhammad"
// var name = "hamza"

// console.log(`my name is ${firstName} ${name}`)



// high order function , callBack function 



// function morning(name){
//     return name 
// }


// function greet(name , cb){
// console.log(`my name is , ${cb(name)}`);

// }


// greet('hamza', morning) // high order function --- greet



let std = [{
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThBdSNJrlC-fK1aWuiKZkOAF-pFuJB-_ZnRA&s",
    fullName: "ali qasim",
    fatherName: "sajid",
    batch: "2405a",
    campus: "aptech site"

},
{
    id: 2,
    fullName: "rohan sheikh",
    fatherName: "shakir",
    batch: "2405a",
    campus: "aptech site",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhXAl0AlWLvtuTVkaNMAJa31lX1ofKIumN-g&s"

}, {
    fullName: "m waleed",
    fatherName: "",
    batch: "2405a",
    campus: "aptech site",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYHCwnTVJ3GRACyQUVcbUq0efgOUtnhKhK_A&s"

},
{
    fullName: "m hamza",
    fatherName: "",
    batch: "2405a",
    campus: "aptech site",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwrvjyfPPHpH4-lzE1j-oZ4HNJHb7AnfVbTA&s"

}

]


let name = "ali";
console.log(name);



std.forEach(function (elem, index) {
    // const {fullName : aliQasim , fatherName , batch , campus} = elem

    // console.log(aliQasim,"======>> fullName");


    // console.log(elem, "=====> forEach elem value");

    const div = document.createElement("div");
    div.id = "box";

    div.innerHTML = `<h1>fullName ${elem.fullName}</h1> <h1>fatherName${elem.fatherName}</h1> <img src=${elem.img} />`



    document.querySelector(".container").append(div)
    console.log(div);


    // console.log(elem.fullName, "=====> forEach fullName value");

})





