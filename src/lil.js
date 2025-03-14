
console.log("wanderer, there is no road, the road is made by walking - antonio machado")

//Scroll
// window.onload = function () {
//     console.log('I\'m here');
//     const backBtn = document.querySelector(".end");
  
//       backBtn.addEventListener("click", () => {
//         page.scrollTo({
//           left: 1,
//           top: 1,
//           behavior: 'smooth'
//         });
//       });
    
//     window.onscroll = function () {
//       console.log(document.body.getBoundingClientRect())
//       if (window.matchMedia("(min-width: 500px)").matches) {
//         console.log('hi')
//         let y = document.body.getBoundingClientRect().top;
//         page.scrollLeft = -y;
//       }
  
//     };
  
//     window.onresize = resize;
//     resize();
  
//     function resize() {
//       const w = page.scrollWidth;
//       document.body.style.height = `${w}px`;
  
//     }
//   };
  


//Mobile Menu
var ct = 0;
function showMobileMenu() {
    let x = document.getElementById("m-navi")
    x.classList.toggle("change")
}

// Cycle through zines on click
function rotateGallery(gallery, length) {
    ct++;
    let x = `./src/images/illo/zines/`+gallery+`/`+ct+`.jpg`;
    document.getElementById(gallery).src = x;
    if (ct >= length) {
        ct = 0;
    }
}

// Toggle playgrounds on smaller screens
function switchPlayground(playground) {
    let codepg = document.getElementById('code-playground')
    let illopg = document.getElementById('illo-playground')
    if (playground === 1) {
        codepg.classList.remove('m-hide');
        illopg.classList.add('m-hide');
    } else {
        illopg.classList.remove('m-hide');
        codepg.classList.add('m-hide');
    }
}

//Filter buttons on playground
let funBtn = document.getElementsByClassName("btn")
let playProjects = document.getElementsByClassName("playproj")

window.onload = function () {
for (let i = 0; i < funBtn.length; i++) {
    const el = funBtn[i];
    el.addEventListener("click", () => {
        toggleProjects(el.id)
        console.log(el.id)
    })
    
}
}

function toggleProjects(id) {
    console.log(playProjects)
    for (let i = 0; i < playProjects.length; i++) {
        let project = playProjects[i]
        project.style.display="block"
        if (id === "all") {
            //do nothing
        } else {
        if (project.classList.contains(id) ) {
            console.log('got one', id)
            } else {
            project.style.display = "none"
            console.log(project)
            }
    }
    }

}


// funBtn.addEventListener("click", () => {
//     console.log(id)
// })

// funBtn.forEach(element => {
//     element.addEventListener("click", () => {
//         console.log(element.id)
//     })
    
// });