import Game from "./Game";
import Bullet from "./Bullet";

import { IGame, SharedState } from "../utils/customInterface";

class Ship extends Game {

    private bullets: Bullet[];
    private lastShot: number;

    constructor(data: IGame) {
        super(data);

        this.bullets = [];
        this.lastShot = 0;
    }

    private update(keys: any) {
        //TODO : update() -> Need to complete this methods.
    }

    private renderBullets(state: SharedState): void {
        let index: number = 0;

        for (let bullet of this.bullets) {
            if (bullet.delete) {
                this.bullets.splice(index, 1);
            } else {
                this.bullets[index].update();
                this.bullets[index].render(state);
            }

            index++;
        }
    }

    public render(state: SharedState): void {

        const { width, height, context } = state;

        if (this.position.x > width) {
            this.position.x = 0;
        } else if (this.position.x < 0) {
            this.position.x = width;
        }

        if (this.position.y > height) {
            this.position.y = 0;
        } else if (this.position.y < 0) {
            this.position.y = height;
        }

        this.renderBullets(state);

        context.save();
        context.translate(this.position.x, this.position.y);
        context.strokeStyle = "#FFF";
        context.fillStyle = "#FFF";
        context.lineWidth = 2;

        context.beginPath();
        context.moveTo(0, -25);
        context.lineTo(15, 15);
        context.lineTo(5, 7);
        context.lineTo(-5, 7);
        context.lineTo(-15, 15);
        context.closePath();
        
        context.fill();
        context.stroke();
        context.restore()
    }

}

export default Ship;
