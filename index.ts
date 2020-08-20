// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let studName :String ;
let studSurname:String;
let studAge : number;
let studGrade: number
let oldestStuAge :number

let students = [
  { studName: "Millicent",studSurname: "Ramu", studAge:35,studGrade:8},
  { studName: "Judith",studSurname: "Mbatha", studAge:38,studGrade:10},
  { studName: "Mike",studSurname: "Muke", studAge:16,studGrade:8},
  { studName: "Oscar",studSurname: "Zwake", studAge:14,studGrade:8},
  { studName: "Tyson",studSurname: "Zitha", studAge:18,studGrade:12},
  { studName: "Peter",studSurname: "Mbuli", studAge:24,studGrade:11},
  { studName: "Cyprin",studSurname: "Nale", studAge:25,studGrade:10},
  { studName: "Mutshidzi", studSurname: "Naledzani",studAge:23,studGrade:12},
  { studName: "Orifuna", studSurname: "Ravele",studAge:21,tudGrade:10},
  { studName: "Thendo",studSurname: "Tshiwawa", studAge:25,studGrade:11},
]

function oldestStud (){
if (students[0].studAge>students[1].studAge && students[0].studAge>students[2].studAge && students[0].studAge>students[3].studAge&& students[0].studAge>students[4].studAge&&students[0].studAge>students[5].studAge&& students[0].studAge>students[6].studAge && students[0].studAge>students[7].studAge&&students[0].studAge>students[8].studAge&&students[0].studAge>students[9].studAge){
console.log("The oldest student is : ",students[0].studName,students[0].studSurname ,"Age:",oldestStuAge=students[0].studAge)
}
else  if (students[1].studAge>students[0].studAge&&students[1].studAge>students[2].studAge&&students[1].studAge>students[3].studAge&&students[1].studAge>students[4].studAge&&students[1].studAge>students[5].studAge&&students[1].studAge>students[6].studAge&&students[1].studAge>students[7].studAge&&students[1].studAge>students[8].studAge&&students[1].studAge>students[9].studAge){
console.log("The oldest student is:",students[1].studName ,students[1].studSurname,"Age:",oldestStuAge=students[1].studAge)
}
else  if (students[2].studAge>students[0].studAge&&students[2].studAge>students[1].studAge&&students[2].studAge>students[3].studAge&&students[2].studAge>students[4].studAge&&students[2].studAge>students[5].studAge&&students[2].studAge>students[6].studAge&&students[2].studAge>students[7].studAge&&students[2].studAge>students[8].studAge&&students[2].studAge>students[9].studAge){
console.log("The oldest student is :",students[2].studName ,students[2].studSurname  ,"Age:",oldestStuAge=students[2].studAge)
}
else  if (students[3].studAge>students[0].studAge&&students[3].studAge>students[1].studAge&&students[3].studAge>students[2].studAge&&students[3].studAge>students[4].studAge&&students[3].studAge>students[5].studAge&&students[3].studAge>students[6].studAge&&students[3].studAge>students[7].studAge&&students[3].studAge>students[8].studAge&&students[3].studAge>students[9].studAge){
console.log("The oldest student is :",students[3].studName ,students[3].studSurname ,"Age:",oldestStuAge=students[3].studAge)
}
else  if (students[4].studAge>students[0].studAge&&students[4].studAge>students[1].studAge&&students[4].studAge>students[2].studAge&&students[4].studAge>students[3].studAge&&students[4].studAge>students[5].studAge&&students[4].studAge>students[6].studAge&&students[4].studAge>students[7].studAge&&students[4].studAge>students[8].studAge&&students[4].studAge>students[9].studAge){
console.log("The oldest student is :",students[4].studName ,students[4].studSurname ,"Age",oldestStuAge=students[4].studAge)
}
else  if (students[5].studAge>students[0].studAge&&students[5].studAge>students[1].studAge&&students[5].studAge>students[2].studAge&&students[5].studAge>students[3].studAge&&students[5].studAge>students[4].studAge&&students[5].studAge>students[6].studAge&&students[5].studAge>students[7].studAge&&students[5].studAge>students[8].studAge&&students[5].studAge>students[9].studAge){
console.log("The oldest student is:",students[5].studName ,students[5].studSurname ,"Age:",oldestStuAge=students[5].studAge)
}
else  if (students[6].studAge>students[0].studAge&&students[6].studAge>students[1].studAge&&students[6].studAge>students[2].studAge&&students[6].studAge>students[3].studAge&&students[6].studAge>students[4].studAge&&students[6].studAge>students[5].studAge&&students[6].studAge>students[7].studAge&&students[6].studAge>students[8].studAge&&students[6].studAge>students[9].studAge){
console.log("The oldest student is :",students[6].studName ,students[6].studSurname ,"Age:",oldestStuAge=students[6].studAge)}

else  if (students[7].studAge>students[0].studAge&&students[7].studAge>students[1].studAge&&students[7].studAge>students[2].studAge&&students[7].studAge>students[3].studAge&&students[7].studAge>students[4].studAge&&students[7].studAge>students[5].studAge&&students[7].studAge>students[6].studAge&&students[7].studAge>students[8].studAge&&students[7].studAge>students[9].studAge){
console.log("The oldest student is:",students[7].studName ,students[7].studSurname ,"Age:",oldestStuAge=students[7].studAge)
}
else  if (students[8].studAge>students[0].studAge&&students[8].studAge>students[1].studAge&&students[8].studAge>students[2].studAge&&students[8].studAge>students[3].studAge&&students[8].studAge>students[4].studAge&&students[8].studAge>students[5].studAge&&students[8].studAge>students[6].studAge&&students[8].studAge>students[7].studAge&&students[8].studAge>students[9].studAge){
console.log("The oldest student is :",students[8].studName ,students[8].studSurname ,"Age:",oldestStuAge=students[8].studAge)
}
else{
console.log("The oldest student is : ",students[9].studName ,students[9].studSurname ,"Age:",oldestStuAge=students[9].studAge)
}}

oldestStud();