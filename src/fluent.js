var revealElements = []
var highlightElements = []

var revealHandler = (event) => {
    revealElements.forEach((element) => {
            revealEle(element);
    });
    highlightElements.forEach((element) => {
            spotEle(element);
    });
}

const revealEle = (element) => {
    let rgb = element.classList.contains('light') ? '100,100,100' : '255,255,255';

    let positionInfo = element.getBoundingClientRect();

    let menuWidth = positionInfo.width;
    let menuHeight = positionInfo.height;

    let mousePositionX = event.clientX - positionInfo.left;
    let mousePositionY = event.clientY - positionInfo.top;

    if (mousePositionX > -100 && mousePositionX < menuWidth + 100 && mousePositionY > -100 && mousePositionY < menuHeight + 100) {
        let percentageX = (mousePositionX / menuWidth) * 100;
        let percentageY = (mousePositionY / menuHeight) * 100;

        let intensity = 0.1;

        if (percentageX > 0 && percentageX < 100 && percentageY > 0 && percentageY < 100) {
            intensity = 0.40;
            // element.style.borderColor = "transparent";
            // element.style.borderImage = "radial-gradient(circle at " + percentageX + "% " + percentageY + "%, rgba(" + rgb + "," + intensity + "), rgba(" + rgb + ",0.3) 200px) 1";
            // return;
        }
        else 
        if (mousePositionX > -20 && mousePositionX < menuWidth + 20 && mousePositionY > -20 && mousePositionY < menuHeight + 20) {
            intensity = 0.26;
        }
        else if (mousePositionX > -40 && mousePositionX < menuWidth + 40 && mousePositionY > -40 && mousePositionY < menuHeight + 40) {
            intensity = 0.24;
        }
        else if (mousePositionX > -60 && mousePositionX < menuWidth + 60 && mousePositionY > -60 && mousePositionY < menuHeight + 60) {
            intensity = 0.20;
        }
        else if (mousePositionX > -80 && mousePositionX < menuWidth + 80 && mousePositionY > -80 && mousePositionY < menuHeight + 80) {
            intensity = 0.15;
        }
        else if (mousePositionX > -100 && mousePositionX < menuWidth + 100 && mousePositionY > -100 && mousePositionY < menuHeight + 100) {
            intensity = 0.1;
        }

        
        element.style.borderColor = "transparent";
        element.style.borderImage = "radial-gradient(circle at " + percentageX + "% " + percentageY + "%, rgba(" + rgb + "," + intensity + "), transparent 100px) 1";
    }
    else {
        element.style.borderColor = "transparent";
        element.style.borderImage = "none";
    }
};



//Spot

const spotEle = (element) => {
    let rgb = element.classList.contains('light') ? '150,150,150' : '255,255,255';
    let size = '80';
    let weight = '0.14';
    if (element.classList.contains('highlight-small')){
        size = '60';
        weight = '0.10';
    } else if (element.classList.contains('highlight-large')){
        size = '130';
        weight = '0.16';
    }
    let outerWidth = (el) => {
        let width = el.offsetWidth;
        let style = getComputedStyle(el);
      
        width += parseInt(style.marginLeft) + parseInt(style.marginRight);
        return width;
    }

    let offset = (el) => {
        let rect = el.getBoundingClientRect();

        return {
            top: rect.top + document.body.scrollTop,
            left: rect.left + document.body.scrollLeft
        }
    }

    let mousex = event.clientX;
    let mousey = event.clientY;

    let menuOffset = offset(element);
    let menuWidth = outerWidth(element);
    

    let scrollTop = document.body.scrollTop,
        elementOffset = offset(element).top,
        distance = (elementOffset - scrollTop);

    let mousePositionX = mousex - menuOffset.left;
    let mousePositionY = mousey - distance;

    let menuHeight = element.offsetHeight;
    if (mousePositionX > 0 && mousePositionX < menuWidth && mousePositionY > 0 && mousePositionY < menuHeight) {
        let percentageX = (mousePositionX / menuWidth) * 100;
        let percentageY = (mousePositionY / menuHeight) * 100;
        element.style.backgroundImage = "radial-gradient(circle at " + percentageX + "% " + percentageY + "%, rgba(" + rgb + ", "+weight+"), transparent "+size+"px)";
    }
    else {
        element.style.backgroundImage =  "none";
    }
}

export const reveal = () => {
    revealElements = [...document.getElementsByClassName('reveal')];
    highlightElements = [...document.getElementsByClassName('highlight')];
    document.removeEventListener('mousemove', revealHandler);
    document.addEventListener('mousemove', revealHandler);    
}

