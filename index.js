function growSandBar(){
    let sandBar = document.getElementById('sandBar');
    let clock = new Date();
    let thisMinute = clock.getMinutes();
    let thisHour = clock.getHours();
    let hourHeightChange = (thisHour * 4.1667); //100% / 24 parts 
    let minuteHeightChange = (thisMinute * .069445); //100% / (24 hours * 60 min)
    sandBar.style.height = `${hourHeightChange+minuteHeightChange}%`;
    };
growSandBar();
setInterval(growSandBar, 1000);
(function makePixelGrid(){
    const pixelBoard = document.getElementById('pixelBoard');
    for(let i = 0; i < 1100; i++){
        const span = document.createElement('span');
        span.id = 'sandPixel';
        pixelBoard.appendChild(span);
    }
})();
class Pixel {
    constructor(pixelSpeed) {
        this.pixelStart = Math.floor(Math.random() * 8) + 7;;
        this.intervalSpeed = pixelSpeed;
    }
    dropPixel() {
        const psuedoThis = this;
        //Back to start of animation
        this.pixelStart > 1100 ? this.pixelStart = Math.floor(Math.random() * 8) + 7 :
        //Turn pixel on
        $(document).ready(function(){
            $(`span:nth-child(${psuedoThis.pixelStart})`).css("background-color", "lightsalmon"); 
            });
            //Turn pixel off 7 spots back
        $(document).ready(function(){
            $(`span:nth-child(${psuedoThis.pixelStart - 7})`).css("background-color", "black"); 
            });
        this.pixelStart += 7;   
    };
    runAnimation() {
        const psuedoThis = this;
        setInterval(() => {psuedoThis.dropPixel();}, psuedoThis.intervalSpeed);
    };
};
(function createPixels(){
    const pixelArr = [
        new Pixel(100),
        new Pixel(110),
        new Pixel(120),
        new Pixel(130),
        new Pixel(140),
        new Pixel(160),
        new Pixel(170),
        new Pixel(180),
        new Pixel(190),
        new Pixel(200),
        new Pixel(240),
        new Pixel(260),
        new Pixel(300)
    ]
    for (let i = 0; i < pixelArr.length; i++) {
        pixelArr[i].runAnimation();
    }
})();
