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
  .then( (white) => {document.querySelector("#steak").innerHTML += `<li>${white}</li>`; return obtainInstruction('steak', 1)})
    .then( (pink) => {document.querySelector("#steak").innerHTML += `<li>${pink}</li>` ; return obtainInstruction('steak', 2)})
    .then( (blue) => {document.querySelector("#steak").innerHTML += `<li>${blue}</li>` ; return obtainInstruction('steak', 3)})
    .then( (orange) => {document.querySelector("#steak").innerHTML += `<li>${orange}</li>` ; return obtainInstruction('steak', 4)})
    .then( (yellow) => {document.querySelector("#steak").innerHTML += `<li>${yellow}</li>` ; return obtainInstruction('steak', 5)})
    .then( (bob) => {document.querySelector("#steak").innerHTML += `<li>${bob}</li>` ; return obtainInstruction('steak', 6)})
    .then( (lol) => {document.querySelector("#steak").innerHTML += `<li>${lol}</li>` ; return obtainInstruction('steak', 7)})
    .then( (red) => {document.querySelector("#steak").innerHTML += `<li>${red}</li>` ; document.querySelector("#steakImg").removeAttribute("hidden");})


// Iteration 3 using async/await
async function makeBroccoli() {
  try {
    let el1 = await obtainInstruction('broccoli', 0);
    document.querySelector("#broccoli").innerHTML += `<li>${el1}</li>`;
    /* await obtainInstruction('broccoli', 0){ (el1) => document.querySelector("#broccoli").innerHTML += `<li>${el1}</li>`}; */
    let el2 = await obtainInstruction('broccoli', 1);
    document.querySelector("#broccoli").innerHTML += `<li>${el2}</li>`;
    let el3 = await obtainInstruction('broccoli', 2);
    document.querySelector("#broccoli").innerHTML += `<li>${el3}</li>`;
    let el4 = await obtainInstruction('broccoli', 3);
    document.querySelector("#broccoli").innerHTML += `<li>${el4}</li>`;
    let el5 = await obtainInstruction('broccoli', 4);
    document.querySelector("#broccoli").innerHTML += `<li>${el5}</li>`;
    let el6 = await obtainInstruction('broccoli', 5);
    document.querySelector("#broccoli").innerHTML += `<li>${el6}</li>`;
    let el7 = await obtainInstruction('broccoli', 6);
    document.querySelector("#broccoli").innerHTML += `<li>${el7}</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
    
  } catch (error) {
    console.log('error');
  } 
}

// Bonus 2 - Promise all
// ...

foodPrep1();

makeBroccoli();