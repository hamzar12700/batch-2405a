// by value << --------------


// let name = "Ali Qasim";

// let name2 = name;


// name2 = "waleed"

// console.log(name2);





// console.log(name);


//  by reference

let std = {
    firstName : "Muhammad",
    lastName : "Hamza",
    batch : "2405a",
    campus : "aptech site center",
    hobbies : ['coding','cricket','music'],
    skills : ['mern stack','next js'],
}




let std2 = {...std};

let std3 = {...std}

std3.lastName = "waleed"



std2.lastName = "Ahad"

console.log(std3, "=====>> std3");

console.log(std2 ,"======>> std2");
console.log(std ,"=====>> original object");


