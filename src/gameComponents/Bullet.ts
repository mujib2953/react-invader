import Game from "./Game";
import { IButllet } from "../utils/customInterface";

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

    private update(): void {
        if (this.direction === "up") {
            this.position.y -= this.speed;
        } else {
            this.position.y += this.speed;
        }
    }

    // private render(screen: Screen): void {
        
    // }
}