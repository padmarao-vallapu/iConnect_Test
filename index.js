let List1 =['Arjun', 'Adwait', 'Swapnil','Amit', 'Vishal', 'Adnan']
let List2 =[ 'Adwait','Laxman','Amit','Adnan','Nitin','Gaurav']
let n = List1.length

let res1 = [] // array for Unique values of List1
let res2 = [] // array for Unique values of List2
let res3 = [] // array for common values of both List1 and List2

for (let i= 0 ; i < n; i++){
    
    let a = List1[i]
    let b = List2[i]
    
    if (List2.indexOf(a) === -1){  // Finding Unique values of List1
        res1.push(a)
    }
    
    if( List1.indexOf(b) === -1){  // Finding Unique values of List2
        res2.push(b)
    }
    
    else{                          // Finding common values of both List1 and List2
        res3.push(b)
    }
}

console.log(res1)
console.log(res2)
console.log(res3)
