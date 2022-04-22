class Timer{
    constructor(time, init, pause, callback){
        this.time = time;
        this.init = init;
        this.pause = pause;

        if (callback) {
            this.onstart = callback.onstart;
            this.ontick = callback.ontick;
            this.onstop = callback.onstop;
        }

        this.init.addEventListener('click', this.start);
        this.pause.addEventListener('click', this.stop);
    }

    start = () => {
        if (this.onstart) {
            this.onstart(this.timeleft);
        }

        this.tick()
        this.interval = setInterval(this.tick, 20);
    }

    tick = () => {
        if (this.ontick) {
            this.ontick(this.timeleft);
        }

        if (this.timeleft <= 0) {
            this.stop();
        }else{
            this.timeleft -= 0.02
        }
    }

    stop = () => {
        if (this.onstop) {
            this.onstop();
        }
        clearInterval(this.interval);
    }

    get timeleft() {
        return parseFloat(this.time.value);
    }

    set timeleft(time) {
        this.time.value = time.toFixed(2);
    }
}