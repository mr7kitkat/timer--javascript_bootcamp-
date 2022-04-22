const timeInput = document.querySelector('#duration');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const circle = document.querySelector('circle');

const perimeter = 2 * Math.PI * parseFloat(circle.getAttribute('r'));
circle.setAttribute('stroke-dasharray', perimeter);

let initTime;
const timer = new Timer(timeInput, start, stop, {
    onstart (startTime) {
        initTime = startTime;
    },
    ontick(timeleft) {
        let rem = perimeter * timeleft / initTime - perimeter;
        console.log(rem)
        circle.setAttribute('stroke-dashoffset', rem);
    },
    onstop() {

    }
});