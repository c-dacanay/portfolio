console.log('hewwo')

const cover = {
    home: "./src/home.gif",
    omm: "./src/omm.gif",
    code: "./src/code.png",
    book: "./src/books.png"
}

const projects = document.getElementsByClassName('projects');
let object = document.getElementById('object');
const root = document.documentElement;
 
console.log(object);
// projects.forEach(el => console.log(el))

// change object
function switchCover(coverid) {
    console.log = cover[coverid]
    object.style.backgroundImage = `url (${cover[coverid]})`
}

// move object
document.addEventListener('mousemove', evt => {
    let x = evt.clientX / innerWidth;
    let y = evt.clientY / innerHeight;
 
    root.style.setProperty('--mouse-x', x);
    root.style.setProperty('--mouse-y', y);
});