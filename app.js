const gravity = 9.81;
const xPosInitial = 160;
const yPosInitial = 45;
const radians = Math.PI / 180;


class CannonBall {
    time = 0;
    constructor () {
        this.speed = document.getElementById('velocity').value;
        this.angle = document.getElementById('angle').value;
        
        document.getElementById('ball').style.display = 'block';
        document.getElementById('ball').style.left = `${xPosInitial}px`;
        document.getElementById('ball').style.bottom = `${yPosInitial}px`;
        
        this.timer = setInterval(this.simulationStep.bind(this), 50);
    }
    
    simulationStep() {
        this.time += 0.3;

        let xPos = xPosInitial + (this.speed * this.time * Math.cos(this.angle * radians));
        let yPos = yPosInitial + (this.speed * this.time * Math.sin(this.angle * radians)) - ( gravity * Math.pow(this.time,2) / 2);
    
        document.getElementById('ball').style.left = xPos + "px";
        document.getElementById('ball').style.bottom = yPos + 'px';
    
        if (yPos < 50) {
            clearInterval(this.timer);
        } 
    }
}



function move () {
    new CannonBall()
}
