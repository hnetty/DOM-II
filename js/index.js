// // Your code goes here

// // 1 -- Double click the link to change its color
// const clickLink = document.querySelector('a');

// function changeLinkColor(event){
//     //debugger;
//     clickLink.style.color = 'orange';
// }

// clickLink.addEventListener('dblclick', changeLinkColor);


// // 2 -- Change the background color when the 'b' key is pressed

// const background = document.querySelector('body');

// function changeBackgroundColor(event){
//     if (event.key === 'b'){
//         background.style.backgroundColor = 'gray';
//     }
// }

// background.addEventListener('keydown', changeBackgroundColor);

// // 3 -- Using mouseover to send an alert

// const forbiddenImg = document.querySelector('img');

// function sendAlert(event){
//     alert("Don't touch the bus!");
// }

// forbiddenImg.addEventListener('mouseover', sendAlert);

// // 4 -- Changing the color of things that have been copied

// const mainContent = document.querySelector('body');

// function changeCopy (event){
//     mainContent.style.color = 'blue';
// }

// mainContent.addEventListener('copy', changeCopy);

// // 5 -- An alert is given when an image is dragged

// const noTouchy = document.querySelectorAll('img');

// function errorMessage(event){
//     alert('I told you not to touch the pictures!');
// }

// noTouchy[1].addEventListener('drag', errorMessage);

// // 6 -- Changing the font when the mouse moves over a paragraph

// const mouseMovement = document.querySelector('p');

// function changeFont (event){
//     mouseMovement.style.fontFamily = 'Times New Roman';
// }

// mouseMovement.addEventListener('mousemove', changeFont);

// // 7 -- Changes the color when the mouse moves away from the anchor tag

// const mouseLeavesArea = document.querySelector('a');

// function changeAnchorColor (event){
//     mouseLeavesArea.style.color = 'red';
// }

// mouseLeavesArea.addEventListener('mouseleave', changeAnchorColor);

// // 8 -- Changes background color while a key is pressed

// const navBGcolor = document.querySelector('a');

// function changeColor (event){
//     if(event.key === 'h'){
//         navBGcolor.style.backgroundColor = 'pink';
//     }
// }

// navBGcolor.addEventListener('keydown', changeColor);

// // 9 -- Changing formats based on sizes

const width = document.querySelector('html');

function windowSize (event){
    if (width < 500)
    document.body.style.backgroundColor = 'red';
}

width.addEventListener('resize', windowSize);