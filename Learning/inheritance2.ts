interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class ClockNew implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}
