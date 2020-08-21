
  
window.onload=()=>{
    const elements = document.querySelectorAll("li");
     const screen = document.querySelectorAll(' p')[0];
     const clear =   document.getElementsByClassName('clear')[0];
     
     elements.forEach(post=>{
         if(post.innerHTML === "="){
             post.addEventListener('click', calculate(post) );
         }else{
             post.addEventListener('click', addtoscreenvalue(post))
         }
     })
 
 function addtoscreenvalue(post) {
     return ()=>{
         if (post.innerHTML === "÷") {
            screen.innerHTML  +=  "/ " ;
   }else if(post.innerHTML === "x"){
               screen.innerHTML += "*";
        } else{
            screen.innerHTML  += post.innerHTML;
        }
   };
  }
 
  clear.addEventListener('click',()=>{
      screen.innerHTML = '';
  })
 
 
   function calculate(post) {
     return  ()=> {
         screen.innerHTML = eval(screen.innerHTML);
     };
   }
 
 }
 
 