import { IGame, Quadrilateral } from "../utils/customInterface";

class Game {

    public position: Quadrilateral;
    private onDie?: () => void;
    public speed: number;
    private radius: number;
    private delete?: boolean;

    constructor(data: IGame) {
        this.position = data.position;
        this.onDie = data.onDie;
        this.speed = data.speed;
        this.radius = data.radius;
        this.delete = data.delete;
    }

    private die(): void {
        this.delete = true;
        if (this.onDie !== undefined) {
            this.onDie();
        }
    }

    private render(width: number, height: number): void {
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
    }
};

export default Game;
