// let num=[1,2,3,4,45,5,45];
// let newnum=num.map(x=>x*2);
// console.log(newnum);

// let evennum=num.filter(x=>x%2==0);
// console.log(evennum);

// let sum=num.reduce((x,y)=>x+y,0);
// console.log(sum);

// let pro=num.reduce((x,y)=>x*y,1);
// console.log(pro);

// const students=[
//     {name:"Alice",score:50},
//     {name:"Bob",score:65},
//     {name:"Charlie",score:80},
//     {name:"David",score:45},
//     {name:"Rahul",score:50},
// ];
// let sum=scores.reduce((x,y)=>x+y,0);
// console.log(sum);
// let sum=students.map(x=>x.score).reduce((x,y)=>x+y,0);
// console.log(sum);
// let sum=students.map(x=>x.score).filter((x)=>x>60).reduce((x,y)=>x+y,0);
// console.log(sum);
// let sum=students.filter((x)=>x.score>60).reduce((x,y)=>x+y.score,0);
// console.log(sum);

// let sum=students.filter((x)=>x.score>60).map((x)=>x.score+10).reduce((x,y)=>x+y,0);
// console.log(sum);

// let num = [12, 3, 3, 4, 4, 4, 4, 98];
// num.forEach((x) => console.log(x*3));

// sayhello=()=>
// {
//     console.log("I am in hello function");
// };
// console.log("Start");
// setTimeout(sayhello,3000);
// console.log("End");

console.log("start");
setTimeout(()=>{
    console.log("first task completed");
    setTimeout(()=>{
        console.log("second task completed");
        setTimeout(() =>{
            console.log("third task completed");
        },3000);
    },2000);
},1000);
console.log("END");