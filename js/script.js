const row = document.querySelector('.row');

for (let i = 1; i <= 100; i++) {
   const box = document.createElement('div');
   box.className = 'box';
   box.innerHTML = i;
   row.append(box);
   console.log(box);
   if ( !(i % 5) ) {
      box.innerHTML = 'buzz';
      box.classList.add('per5');
   } else if (!(i % 3)) {
      box.innerHTML = 'fizz';
      box.classList.add('per3');
   } 
   if (!(i % 3) && !(i % 5)){
      box.innerHTML = 'fizzbuzz';
      box.classList.add('per3e5');
   }
    
      
   console.log(i);
}