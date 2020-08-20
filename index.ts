// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let studName :String ;
let studAge : number;
let studGender: string;
let studGrade: number
let oldestStuAge :number

let students = [
  { studName: "Millicent", studAge:35,studGender: "Female",studGrade:8},
  { studName: "Judith", studAge:38,studGender: "Female",studGrade:10},
  { studName: "Mike", studAge:16,studGender: "Male",studGrade:8},
  { studName: "Oscar", studAge:14,studGender: "Male",studGrade:8},
  { studName: "Tyson", studAge:18,studGender: "Male",studGrade:12},
  { studName: "Peter", studAge:24,studGender: "Male",studGrade:11},
  { studName: "Cyprin", studAge:25,studGender: "Male",studGrade:10},
  { studName: "Mutshidzi", studAge:23,studGender: "Female",studGrade:12},
  { studName: "Orifuna", studAge:21,studGender: "Female",studGrade:10},
  { studName: "Thendo", studAge:25,studGender: "Female",studGrade:11},
]

function oldestStud (){
if (students[0].studAge>students[1].studAge && students[0].studAge>students[2].studAge && students[0].studAge>students[3].studAge&& students[0].studAge>students[4].studAge&&students[0].studAge>students[5].studAge&& students[0].studAge>students[6].studAge && students[0].studAge>students[7].studAge&&students[0].studAge>students[8].studAge&&students[0].studAge>students[9].studAge){
console.log("The oldest student is : ",students[0].studName ,"Age:",oldestStuAge=students[0].studAge)
}
else  if (students[1].studAge>students[0].studAge&&students[1].studAge>students[2].studAge&&students[1].studAge>students[3].studAge&&students[1].studAge>students[4].studAge&&students[1].studAge>students[5].studAge&&students[1].studAge>students[6].studAge&&students[1].studAge>students[7].studAge&&students[1].studAge>students[8].studAge&&students[1].studAge>students[9].studAge){
console.log("The oldest student is:",students[1].studName ,"Age:",oldestStuAge=students[1].studAge)
}
else  if (students[2].studAge>students[0].studAge&&students[2].studAge>students[1].studAge&&students[2].studAge>students[3].studAge&&students[2].studAge>students[4].studAge&&students[2].studAge>students[5].studAge&&students[2].studAge>students[6].studAge&&students[2].studAge>students[7].studAge&&students[2].studAge>students[8].studAge&&students[2].studAge>students[9].studAge){
console.log("The oldest student is :",students[2].studName ,"Age:",oldestStuAge=students[2].studAge)
}
else  if (students[3].studAge>students[0].studAge&&students[3].studAge>students[1].studAge&&students[3].studAge>students[2].studAge&&students[3].studAge>students[4].studAge&&students[3].studAge>students[5].studAge&&students[3].studAge>students[6].studAge&&students[3].studAge>students[7].studAge&&students[3].studAge>students[8].studAge&&students[3].studAge>students[9].studAge){
console.log("The oldest student is :",students[3].studName ,"Age:",oldestStuAge=students[3].studAge)
}
else  if (students[4].studAge>students[0].studAge&&students[4].studAge>students[1].studAge&&students[4].studAge>students[2].studAge&&students[4].studAge>students[3].studAge&&students[4].studAge>students[5].studAge&&students[4].studAge>students[6].studAge&&students[4].studAge>students[7].studAge&&students[4].studAge>students[8].studAge&&students[4].studAge>students[9].studAge){
console.log("The oldest student is :",students[4].studName ,"Age",oldestStuAge=students[4].studAge)
}
else  if (students[5].studAge>students[0].studAge&&students[5].studAge>students[1].studAge&&students[5].studAge>students[2].studAge&&students[5].studAge>students[3].studAge&&students[5].studAge>students[4].studAge&&students[5].studAge>students[6].studAge&&students[5].studAge>students[7].studAge&&students[5].studAge>students[8].studAge&&students[5].studAge>students[9].studAge){
console.log("The oldest student is:",students[5].studName ,"Age:",oldestStuAge=students[5].studAge)
}
else  if (students[6].studAge>students[0].studAge&&students[6].studAge>students[1].studAge&&students[6].studAge>students[2].studAge&&students[6].studAge>students[3].studAge&&students[6].studAge>students[4].studAge&&students[6].studAge>students[5].studAge&&students[6].studAge>students[7].studAge&&students[6].studAge>students[8].studAge&&students[6].studAge>students[9].studAge){
console.log("The oldest student is :",students[6].studName ,"Age:",oldestStuAge=students[6].studAge)}

else  if (students[7].studAge>students[0].studAge&&students[7].studAge>students[1].studAge&&students[7].studAge>students[2].studAge&&students[7].studAge>students[3].studAge&&students[7].studAge>students[4].studAge&&students[7].studAge>students[5].studAge&&students[7].studAge>students[6].studAge&&students[7].studAge>students[8].studAge&&students[7].studAge>students[9].studAge){
console.log("The oldest student is:",students[7].studName ,"Age:",oldestStuAge=students[7].studAge)
}
else  if (students[8].studAge>students[0].studAge&&students[8].studAge>students[1].studAge&&students[8].studAge>students[2].studAge&&students[8].studAge>students[3].studAge&&students[8].studAge>students[4].studAge&&students[8].studAge>students[5].studAge&&students[8].studAge>students[6].studAge&&students[8].studAge>students[7].studAge&&students[8].studAge>students[9].studAge){
console.log("The oldest student is :",students[8].studName ,"Age:",oldestStuAge=students[8].studAge)
}
else{
console.log("The oldest student is : ",students[9].studName ,"Age:",oldestStuAge=students[9].studAge)
}}

oldestStud();