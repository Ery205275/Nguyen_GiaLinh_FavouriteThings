
// const buttons = document.querySelectorAll(".btn");
// let theThing = document.querySelector('#thing_panel');
// // theShow = document.querySelector('#show-thing').content;
// let Fthings = {};
//   function getData() {
       
//   fetch('./data.json')
//   .then(res =>res.json())
//   .then(data => {
//       console.log(data);

//       Fthings = data;
//   })
//   .catch(error => console.error(error));
//     }

//     function showData(data){
//       //get all the keys(names) from data object and use that to iterate through data
//       // debugger;
      
//       const things = Object.keys(data);// Object.keys create array

//       things.forEach(thing => {
//           //copy the template's contents
//           let panel = document.querySelector("#thing_panel")
//           // get a ref to template's elements
//           let containers = panel.firstElementChild.children;
// //grab the iamge from the object and set it as the source
//           containers[0].querySelector('img').src= `images/${Fthings[thing].biopic}`;

//           containers[1].textContent = Fthings[thing].name;
//           containers[2].textContent = Fthings[thing].role;
//           containers[3].textContent = Fthings[thing].nickname;

//          theThing.appendChild(panel);
//       })
// }
// buttons.forEach(btn => (btn.addEventListener("click", showData)));
// getData();

//     let fadeIn = document.querySelector("#thing_panel");
//     document.querySelector(".btn").onclick = function() {
//         fadeIn.classList.add("fade");
//     };
// //button
const buttons = document.querySelectorAll(".btn");
    
let things = {};
    

    
    function getData() {
       
        fetch("./data.json") 
            .then(res => res.json()) 
            .then(data => {

                things = data;
                
            })
        .catch(error => console.error(error));
    }

    function buildData(event) {
        console.log("clicked");
        let panel = document.querySelector(".thing_panel");

        if (panel) {
            panel.classList.remove("hidden");
            let containers = panel.children;
            
            containers[1].querySelector("img").src = `images/${things[this.dataset.key].photo}`;
            containers[0].textContent = things[this.dataset.key].name;
            containers[2].textContent = things[this.dataset.key].type;
            containers[3].textContent = things[this.dataset.key].desc;
              }
        else {
            panel.classList.add("hidden");
        }
    };

    buttons.forEach(btn => (btn.addEventListener("click", buildData)));

    getData();


    let fadeIn = document.querySelector(".thing_panel");
    document.querySelector(".btn").onclick = function() {
        fadeIn.classList.add("fade");
    };
  