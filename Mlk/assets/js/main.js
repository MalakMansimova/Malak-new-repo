function Person(name,surname,age){
    this.name=name
    this.surname=surname
    this.age=age
};
const Person1=new Person("Sabina","Qurbanova",20);
const Person2=new Person("Nigar","Abbaszada",20);
const Person3=new Person("Narmin","Mammadova",19);
const Person4=new Person("Yetar","Mammadova",18);

let object=[Person1,Person2,Person3,Person4];

let table=document.querySelector("table");
let row=document.createElement("tr");
table.appendChild(row);

for(let i in object[0]){
    let cell=document.createElement("td");
    cell.textContent=i;
    row.appendChild(cell);

}
for( let person of object)
{
    let row=document.createElement("tr");
    table.appendChild(row);
    for(let i in person){
        let cell= document.createElement("td");
        cell.textContent=person[i];
        row.appendChild(cell);
    }
}

