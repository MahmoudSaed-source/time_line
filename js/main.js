let li_list = document.querySelectorAll(".list li");
let tools = document.querySelector(".tools");


async function Get_Data() {
    try {
        let FileData = await fetch("js/data.json");
        let DataJson = await FileData.json();
        return DataJson
    } catch {
        console.error("error")
    }
}
Get_Data().then((data) => {
    let DivData = '';
    data.forEach(element => {
        DivData += `   <div class="${element.title}">
      <div class="details">
          <div class="tittle">
              <span class="name">${element.title}</span>
               <span class="circle1"></span>
               <span class="circle2"></span>
              <span class="circle3"></span>
          </div>
          <h2>${element.timeframes.weekly.current} hrs</h2>
          <h6>last week ${element.timeframes.weekly.previous} hrs</h6>
      </div>
  </div>`
    });
    tools.innerHTML = DivData;
})




// add or remove class active
li_list.forEach((li) => {
    li.addEventListener("click", (e) => {
        li_list.forEach((elm) => {
            elm.classList.remove("active")
        })
        e.target.classList.add("active");

    })
})

// update data 

li_list.forEach((li) => {
    li.addEventListener("click", (e) => {
        if (e.target.dataset.id == 1) {
            Get_Data().then((data) => {
                let DivData = '';
                data.forEach(element => {
                    DivData += `   <div class="${element.title}">
                  <div class="details">
                      <div class="tittle">
                          <span class="name">${element.title}</span>
                           <span class="circle1"></span>
                           <span class="circle2"></span>
                          <span class="circle3"></span>
                      </div>
                      <h2>${element.timeframes.daily.current} hrs</h2>
                      <h6>last week ${element.timeframes.daily.previous}</h6>
                  </div>
              </div>`
                });
                tools.innerHTML = DivData;
            })
        } else if (e.target.dataset.id == 2) {
            Get_Data().then((data) => {
                let DivData = '';
                data.forEach(element => {
                    DivData += `   <div class="${element.title}">
                  <div class="details">
                      <div class="tittle">
                          <span class="name">${element.title}</span>
                           <span class="circle1"></span>
                           <span class="circle2"></span>
                          <span class="circle3"></span>
                      </div>
                      <h2>${element.timeframes.weekly.current} hrs</h2>
                      <h6>last week ${element.timeframes.weekly.previous}</h6>
                  </div>
              </div>`
                });
                tools.innerHTML = DivData;
            })
        } else if (e.target.dataset.id == 3) {
            Get_Data().then((data) => {
                let DivData = '';
                data.forEach(element => {
                    DivData += `   <div class="${element.title}">
                  <div class="details">
                      <div class="tittle">
                          <span class="name">${element.title}</span>
                           <span class="circle1"></span>
                           <span class="circle2"></span>
                          <span class="circle3"></span>
                      </div>
                      <h2>${element.timeframes.monthly.current} hrs</h2>
                      <h6>last week ${element.timeframes.monthly.previous}</h6>
                  </div>
              </div>`
                });
                tools.innerHTML = DivData;
            }).catch((data) => {
                console.error("error")
            })
        }
    })
})