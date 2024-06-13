
window.onload = function(){

window.onscroll = function () {

    console.log('ahahah')

        if(window.matchMedia ("(min-width: 500px)").matches){
            var y = document.body.getBoundingClientRect().top;
            page.scrollLeft = -y;
            // var barP = scrollY / begStar;
            // var barPosition = barP * window.innerWidth;

            // var barP2 = (scrollY - begStar) / begStar;
            // var bar2Position = barP2 * window.innerWidth;


            /*document.getElementById('variables').innerHTML = begStar;*/
            // document.getElementById("moveBar").style.marginLeft = barPosition + "px";
            // document.getElementById("moveBar2").style.marginLeft = bar2Position + "px";

            // Looping Scroll
              // Find new locations based on window width
            //   var begEnd = lastEnd - window.innerWidth;
            //   var returnMid = begStar - window.innerWidth;

              //if at 0 position and scroll up
            //   if (window.scrollY == 0) {
            //     window.scrollTo(0,begStar);
            //   }
              //if at beginning of the last pane
            //   else if (window.scrollY == begEnd) {
            //     window.scrollTo(0, returnMid);
            //   }
          }
              // For testing: 
            // document.getElementById('variables').innerHTML = window.scrollY;  

          }
          
// Adjust the body height if the window resizes.
window.onresize = resize;
// Initial resize.
resize();


// Reset window-based vars
function resize() {
            var w = page.scrollWidth;
            document.body.style.height = w + 'px';
            var inwidth = window.innerWidth * window.innerWidth
            // var barwidth = inwidth / begStar;
            // document.getElementById("moveBar").style.width = barwidth + "px";
            // document.getElementById("moveBar2").style.width = barwidth + "px";
          }
}


function copyDivToClipboard() {
 var range = document.createRange();
                   range.selectNode(document.getElementById("emailCopy"));
                    window.getSelection().removeAllRanges(); // clear current selection
                    window.getSelection().addRange(range); // to select text
                    document.execCommand("copy");
                    window.getSelection().removeAllRanges();// to deselect
  var tooltip = document.getElementById("myTooltip");
  var tooltip2 = document.getElementById("myTooltip2");

  tooltip.innerHTML = "🥳 Copied! TTYS! ";
  tooltip2.innerHTML = "🥳 Copied! TTYS! ";
            }


function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  var tooltip2 = document.getElementById("myTooltip2");
  tooltip.innerHTML = "📋 Click to copy";
  tooltip2.innerHTML = "📋 Click to copy";
}

