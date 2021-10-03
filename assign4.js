//We have an array of cities. Assign each city in different individual variable. 
//hint ['LA', 'new york', 'karachi','islamabad']

// const Cities =  ['LA', 'new york', 'karachi','islamabad']
// let [c1,c2,c3,c4] = Cities
// console.log(c1)
// console.log(c2)
// console.log(c3)
// console.log(c4)

//We have a student object. Assign each property in different and individual variable in 
//JS {name:'Marry',age:20,rollNo:2}


// const introduction = {Name:'Marry',age:20,rollNo:2}
// let {Name,age,rollNo}= introduction
// console.log(Name)
// console.log(age)
// console.log(rollNo)


//A function is taking 5 arguments and You have to pass it through an array.
//let arr = [1,2,3,4,5]

// function num(a, b, c , d, e) {
//     console.log(a);
//     console.log(b);
//     console.log(c); 
//     console.log(d); 
//     console.log(e); 
//   }

//   const arr = [1,2,3,4,5]
//   num(...arr);


//Given an array of firstname and an array of last name. First check both array size is equal or not, 
//if equal then make third new array which has first last name concat value
//let firstNames = ['maryam', 'hira', 'faiza', 'aisha']
//let lastNames = ['khan', 'ayub', 'aziz', 'yasin']
//['maryam khan', 'hira ayub', 'faiza aziz', 'aisha yasin']

// let firstNames = ['maryam', 'hira', 'faiza', 'aisha']
// let lastNames = ['khan', 'ayub', 'aziz', 'yasin']

// let FullNames = (firstNames.length == lastNames.length) ? firstNames + " " + lastNames : "missing values"

//Create an arrow function that takes array as an input and make each element double and then return an array 

//  const numbers = [1,2,3,4,5];
//  const double = numbers.map(num => num*num);
//  console.log(double);  

//Create an arrow function that takes a number and return square of a number

// num=(a)=> {
//  return a*a

// }
//  console.log(num(3))

/*question: 
`var authenticated=true;
var allowed = authenticated ? (alert('you r allowed')) : (alert('you are not allowed))
which alert will run
*/

/*
question: ` What is the value of canDrive
        var age = 12;
        var canDrive = age > 18 ? 'yes' : 'no';
        `,
        answers: ['12', '18', 'yes', 'no'],
        which is correct answer
        */

/*
question: `const dog='snickers'
        logdog(dog);
        function logdog(dog){
            console.log(dog)
        }
         function go(){
             const dog='sunny';
             logdog(dog)
         }`,
        answers: ['snickers sunny','sunny snickers','snickers snickers','sunny sunny'] */


//let text = `He's often called "Johnny"`;
// console.log(text)// write the answer here

 
/*function welcomeMsg(name = "Everyone") {
    let msg = "Welcome " + name
    console.log(msg)
}
// welcomeMsg("Faiza")
// welcomeMsg()
I have called funtion twice , share the answer what is printed each time
*/

//make a promise that resolves after 5 sec. Use setTimeOut for resolve.
