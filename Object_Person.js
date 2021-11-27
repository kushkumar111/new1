function person(FirstName ,LastName,Office_Address){
    this.FirstName=FirstName,
    this.LastName=LastName,
    this.Office_Address=Office_Address
}

var p1 = new person("Mohan","Sohan","Geeta ,Rita");
var p2 = new person("Rohit","Kohli","Ms Dhoni, Raina");
var p3 = new person("Modi ji","Yogi Ji","Lallu,Munna");

console.log(p1);
console.log(p2);
console.log(p3);
