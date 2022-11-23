console.log("040307.js checking in.");
console.log("This page uses the color values for the rainbow located at https://www.krishnamani.in/color-codes-for-rainbow-vibgyor-colours/.")
alert("Click the screen to alert rgba color values. The rgba values are also logged to the console for those curious.");

// RAINBOW
const xdiv = Math.floor(window.innerWidth/6);
let rbRange = [0];
for (let i = 0; i < 5; i++){rbRange.push(rbRange[i]+xdiv)}
rbRange.push(window.innerWidth) 

const red = [148,	75,	0,	0,	255,	255,	255];    
const redDiff = []; 
const redOper = [];
const green	= [0,	0,	0,	255,	255,	127,	0]; 
const greenDiff = [];
const greenOper = [];
const blue = [211,	130,	255,	0,	0,	0,	0]; 
const blueDiff = [];
const blueOper = [];
 
for(let i=0; i < 6; i++) {
    redDiff.push(red[i] - red[i+1])
    if (redDiff[i] > 0) {
        redOper.push('-')
    } else if (redDiff[i] < 0) {
        redOper.push('+')
    } else (redOper.push('na'))
};
for(let i=0; i < 6; i++) {
    greenDiff.push(green[i] - green[i+1])
    if (greenDiff[i] > 0) {
        greenOper.push('-')
    } else if (greenDiff[i] < 0) {
        greenOper.push('+')
    } else (greenOper.push('na'))
};
for(let i=0; i < 6; i++) {
    blueDiff.push(blue[i] - blue[i+1]) 
    if (blueDiff[i] > 0) {
        blueOper.push('-')
    } else if (blueDiff[i] < 0) {
        blueOper.push('+')
    } else (blueOper.push('na'))
}; 

window.addEventListener("mousemove", function(xco) { 
    let ycoord=xco.pageY 
    let alphaDiv = window.innerHeight/1000
    const alpha = ((ycoord/alphaDiv)/1000).toFixed(3) 
    let xcoord = xco.pageX   
    
    if (xcoord >= 0 && xcoord <= 266) {
        let r = Math.ceil(red[0]-Math.floor(xcoord/(266/redDiff[0])));
        let g = 0;
        let b = Math.ceil(blue[0]-Math.floor(xcoord/(266/blueDiff[0])));
 
        newRGBA = `rgba(${r}, ${g}, ${b}, ${alpha})`; 
        console.log(newRGBA);
        const body = document.querySelector('body');
        body.style.backgroundColor = newRGBA;
        
    }
    if (xcoord >= 266 && xcoord <= 532) {
        let r = Math.ceil(red[1]-Math.floor((xcoord-266)/(266/redDiff[1])));
        let g = 0;
        let b = Math.ceil(blue[1]-Math.floor((xcoord-266)/(266/blueDiff[1])));
 
        newRGBA = `rgba(${r}, ${g}, ${b}, ${alpha})`; 
        console.log(newRGBA);
        const body = document.querySelector('body');
        body.style.backgroundColor = newRGBA;
        
    }
    if (xcoord >= 532 && xcoord <= 798) {
        let r = 0;
        let g = Math.ceil(green[2]+Math.floor((xcoord-532)/(266/-greenDiff[2])));
        let b = Math.ceil(blue[2]-Math.floor((xcoord-532)/(266/blueDiff[2])));
        
        newRGBA = `rgba(${r}, ${g}, ${b}, ${alpha})`; 
        console.log(newRGBA);
        const body = document.querySelector('body');
        body.style.backgroundColor = newRGBA;
        
    }
    if (xcoord >= 798 && xcoord <= 1064) {
        let r = Math.ceil(red[3]-((xcoord-798)/(266/redDiff[3])));
        let g = 255;
        let b = 0;

        newRGBA = `rgba(${r}, ${g}, ${b}, ${alpha})`; 
        console.log(newRGBA);
        const body = document.querySelector('body');
        body.style.backgroundColor = newRGBA;
        
    }
    if (xcoord >= 1064 && xcoord <= 1330) {
        let r = 255;
        let g = Math.ceil(green[4]-((xcoord-1064)/(266/greenDiff[4])));
        let b = 0;
 
        newRGBA = `rgba(${r}, ${g}, ${b}, ${alpha})`; 
        console.log(newRGBA);
        const body = document.querySelector('body');
        body.style.backgroundColor = newRGBA;
        
    }
    if (xcoord >= 1330 && xcoord <= 1600) {
        let r = 255;
        let g = Math.ceil(green[5]-((xcoord-1330)/(266/greenDiff[5])));
        let b = 0;
 
        newRGBA = `rgba(${r}, ${g}, ${b}, ${alpha})`; 
        console.log(newRGBA);
        const body = document.querySelector('body');
        body.style.backgroundColor = newRGBA;
    }

})

const body = document.querySelector('body');
body.addEventListener('click', function(){
    alert(body.style.backgroundColor)
})
