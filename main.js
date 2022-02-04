

// Ex1: DOM Manipulation make band list

addBands(['backstreet girls', 'caty jackson', 'madonna presley', ' Spice monkeys'])





        const list = document.querySelector('ul')
        const listItem = document.createElement('li')

        
        

function addBands(bands) {
    for(let i = 0; i < bands.length; i++){
        const listitem = document.createElement('li')
        const list = document.querySelector('ul')

        list.appendChild(listitem)
        listitem.textContent = bands[i]
        

    }
}

// Ex2: write multiplication table



const unlist = document.querySelector('ul')

const table = document.createElement('table')

unlist.appendChild(table)



const addMultTable = function(a,b) {
for (let i = 0; i < a; i++) { 
const row = document.createElement('tr')
table.appendChild(row)
for (let i2 = 0; i2 < b; i2++) { 
const column = document.createElement('th')
row.appendChild(column)
const digits = `${i}${i2}`
column.textContent = digits


};
  
};

  console.log();

  console.log(a,b);  
}



addMultTable(40,5)



// Extra Ex1: write a function what only prints the multplication of 2 numbers



function calc(a,b) {
console.log(a*b);
}

calc(10,5)


// Extra Ex2: the same but print from main program

function calc(a,b) {
  return (a*b);
  }
  

  console.log(calc(3,7));


  // Extra Ex3: the same but 3 times

  function calc(a,b) {
    return (a*b);
    }
    
  
    console.log(calc(1234,64645));

    console.log(calc(12,64));
    console.log(calc(14,6445));
  

// Extra Ex4: Type of traingle



function triangle(a,b,c) {
  if(a == b == c) return 'Equilateral triangle'
  if(a == b || a == c || b == c) {return 'isosceles Triangle'}else return 'Scalene Triangle'
}


triangle()

console.log(triangle(1,3,2));



// Extra Ex5: replace character
let newarr = []
console.log(swap(['j','a','v','a','s','c','r','i','p','t','']));

function swap(arr){
  for (let i = 0; i < arr.length; i++) { 
   
    newarr = newarr + arr[i].replace('a',1)

  };
  return newarr
}



// Extra Ex6: 2 functions

calcall = function(arr) {
  let sum = 0
  
  console.log(arr.length);
  for (let i = 0; i < arr.length; i++) { 
    sum = sum + arr[i]
    
    
  }
  let sumofall = sum
  let check2 = lowestNr(arr)
  
  function lowestNr(arr2){
    
    sum = 0
for (let i = 0; i < arr2.length; i++) { 
  if(arr2[i] > sum) {sum = arr2[i]}
  
};


  for (let i = 0; i < arr2.length; i++) { 
    if(arr2[i] < sum) {sum = arr2[i]
    }return sum
  };
}

  return `sum of all numbers is ${sumofall} and lowest number is ${check2}`
}
 


console.log(calcall([3,7,5,8222,2,454565456,6]));

//Extra Ex7: add even numbers of array:



loopsy = function(a) {
  let newsum = 0
  for (let i = 0; i < a.length; i++) { 
    if(a[i] % 2 == 0) {newsum = newsum + a[i]}
  };
  return newsum
}

console.log(loopsy([1,4,76,5,717,9000]));
console.log(98 % 2);



// Extra Ex9: write a function by sending a number as parameter



//Extra Ex9: add even number untill final number is reached


evensy = function(a) {

  let arr = []
  for (let i = 0; i < a; i += 2) { 
    arr.push(i)
    
 
  };
  return arr
}





console.log(evensy(20));


//Extra Ex10: show all uneven numbers in between 2 numbers

evensy = function(b,a) {
  let arr = []
  for (let i = b; i < a; i += 2) { 
    arr.push(i)
    
    
  };
  if (a % 2 == 1) arr.push(a)
  return arr
}





console.log(evensy(1,29));





