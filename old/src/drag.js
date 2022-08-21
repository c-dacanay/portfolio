let topz = 0;

function startDrag(e) {
    topz++;
    // determine event object
    if (!e) {
        var e = window.event;
    }

    // IE uses srcElement, others use target
    var targ = e.target ? e.target : e.srcElement;

    if (targ.className != 'drag') {return};
    // calculate event X, Y coordinates
        offsetX = e.clientX;
        offsetY = e.clientY;

    // top z-index
    targ.style.zIndex = topz;
    console.log(targ, targ.style.zIndex, topz)

    // assign default values for top and left properties
    if(!targ.style.left) { targ.style.left='0px'};
    if (!targ.style.top) { targ.style.top='0px'};

    // calculate integer values for top and left
    // properties
    coordX = parseInt(targ.style.left);
    coordY = parseInt(targ.style.top);
    drag = true;

    // move div element
        document.onmousemove=dragDiv;
        document.ondblclick=closeDiv;

}

function dragDiv(e) {
    if (!drag) {return};
    if (!e) { var e= window.event};
    var targ=e.target?e.target:e.srcElement;

    // move div element
    targ.style.left=coordX+e.clientX-offsetX+'px';
    targ.style.top=coordY+e.clientY-offsetY+'px';
    return false;
}

function stopDrag() {
    drag=false;
}

function closeDiv(e) {
    var targ=e.target?e.target:e.srcElement;
    if (targ.className != 'drag') {return};
    targ.style.display = 'none';
}
window.onload = function() {
    document.onmousedown = startDrag;
    document.onmouseup = stopDrag;
}
