import { IGame, Quadrilateral, SharedState } from "../utils/customInterface";

class Game {

    public position: Quadrilateral;
    private onDie?: () => void;
    public speed: number;
    private radius: number;
    public delete?: boolean;

    constructor(data: IGame) {
        this.position = data.position;
        this.onDie = data.onDie;
        this.speed = data.speed;
        this.radius = data.radius;
        this.delete = data.delete;
    }

    public die(): void {
        this.delete = true;
        if (this.onDie !== undefined) {
            this.onDie();
        }
    }

    public render(state: SharedState): void {
        if (this.position.x > state.width) {
            this.position.x = 0;
        } else if (this.position.x < 0) {
            this.position.x = state.width;
        }

        if (this.position.y > state.height) {
            this.position.y = 0;
        } else if (this.position.y < 0) {
            this.position.y = state.height;
        }
    }
};

export default Game;
