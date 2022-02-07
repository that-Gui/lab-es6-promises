// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
 /*  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));
 */


// Iteration 1 - using callbacks
function foodPrep1(){
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction("mashedPotatoes", 1, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
      getInstruction("mashedPotatoes", 2, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
        getInstruction("mashedPotatoes", 3, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
          getInstruction("mashedPotatoes", 4, (step5) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
            document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
          }, (error) => console.log(error));
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}

// Iteration 2 - using promises

obtainInstruction('steak', 0)
  .then( (step0) => {document.querySelector("#steak").innerHTML += `<li>${step0}</li>`})
    .then( (step2) => {document.querySelector("#steak").innerHTML += `<li>${step2}</li>`})
    .then( (step3) => {document.querySelector("#steak").innerHTML += `<li>${step3}</li>`})
    .then( (step4) => {document.querySelector("#steak").innerHTML += `<li>${step4}</li>`})
    .then( (step5) => {document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    document.querySelector("#steakImg").removeAttribute("hidden");})
 


// Iteration 3 using async/await
async function foodPrep3() {
  
  try {
    await  getInstruction("broccoli", 0, (step1) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
    });
    await getInstruction("broccoli", 1, (step2) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
    });
    await getInstruction("broccoli", 2, (step3) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
    });
    await getInstruction("broccoli", 3, (step4) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
    });
    await getInstruction("broccoli", 4, (step5) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;
      document.querySelector("#broccoliImg").removeAttribute("hidden");
    });
    
  } catch(error) {
    console.log(error);
  } 
}

// Bonus 2 - Promise all
// ...

foodPrep1();
//foodPrep2();
foodPrep3();