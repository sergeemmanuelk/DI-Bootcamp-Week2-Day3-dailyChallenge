//Write a JavaScript program that recreates the pattern below

for(let i = 0; i <= 6; i++) {
    console.log("*".repeat(i))
}

//Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops)
for(let y=0; y <=6; y++) {
    let line = ""
    for(let z = 0; z < y; z++) {
        line +="*"
    }
    console.log(ligne);
}