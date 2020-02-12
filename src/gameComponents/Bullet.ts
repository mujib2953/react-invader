import Game from "./Game";
import { IButllet, SharedState } from "../utils/customInterface";

class Bullet extends Game {

    private direction: string;

    constructor(data: IButllet) {
        super({
            position: data.position,
            speed: 5,
            radius: 5,
        });

        this.direction = data.direction;
    }

    public update(): void {
        if (this.direction === "up") {
            this.position.y -= this.speed;
        } else {
            this.position.y += this.speed;
        }
    }

    public render(state: SharedState): void {
        
        const { height, context } = state;
        
        if (this.position.y > height || this.position.y < 0) {
            this.die();
        }

        context.save();
        context.translate(this.position.x, this.position.y);
        context.fillStyle = "#FF0";
        context.lineWidth = 0,5;
        context.beginPath();
        context.arc(0, 0, 2, 0, 2 * Math.PI);
        context.closePath();
        context.fill();
        context.restore();
    }
}

export default Bullet;
