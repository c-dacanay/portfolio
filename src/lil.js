function showMobileMenu() {
    let x = document.getElementById("m-navi")
    x.classList.toggle("change")
}


// Playground Code

// Cycle through zines on click
let counter = 0;
function rotateGallery(gallery, length) {
    counter++;
    let x = `./src/images/illo/zines/`+gallery+`/`+counter+`.jpg`;
    document.getElementById(gallery).src = x;
    console.log(x)
    if (counter >= length) {
        counter = 0;
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