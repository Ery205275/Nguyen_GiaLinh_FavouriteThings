
const buttons = document.querySelectorAll(".btn");
    
let Fthings = {};
    

    
    function getData() {
       
        fetch("./data.json") 
            .then(res => res.json()) 
            .then(data => {

                Fthings = data;
                
            })
        .catch(error => console.error(error));
    }

    function showData(event) {
        console.log("clicked");
        let panel = document.querySelector(".thing_panel");

        if (panel) {
            panel.classList.remove("hidden");
            let containers = panel.children;
            
            containers[1].querySelector("img").src = `images/${Fthings[this.dataset.key].photo}`;
            containers[0].textContent = Fthings[this.dataset.key].name;
            containers[2].textContent = Fthings[this.dataset.key].type;
            containers[3].textContent = Fthings[this.dataset.key].desc;
              }
        else {
            panel.classList.add("hidden");
        }
    };

    buttons.forEach(btn => (btn.addEventListener("click", showData)));

    getData();


    let fadeIn = document.querySelector(".thing_panel");
    document.querySelector(".btn").onclick = function() {
        fadeIn.classList.add("fade");
    };

    
    function PopUp() {
        document.querySelector('.thing_panel').style.display = "block";
      }
      

      document.getElementById('closeBtn').addEventListener("click",()=> 
      document.querySelector('.thing_panel').style.display='none');
    