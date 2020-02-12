interface PressedKeys {
    left: number;
    right: number;
    up: number;
    down: number;
    space: number;
    enter: number;
};

const KEYS = {
    LEFT: 37,
    RIGHT: 39,
    UP: 38,
    DOWN: 40,
    A: 65,
    D: 68,
    W: 87,
    S: 83,
    SPACE: 32,
    ENTER: 13,
};

export class InputManager {

    private pressedKeys: PressedKeys;

    constructor() {
        this.pressedKeys = {
            left: 0,
            right: 0,
            up: 0,
            down: 0,
            space: 0,
            enter: 0,
        };
    }

    public bindKey(): void {
        window.addEventListener("keyup", this.handleKey, false);
        window.addEventListener("keydown", this.handleKey, true);
    }

    public unbindKey(): void {
        window.removeEventListener("keyup", this.handleKey, false);
        window.removeEventListener("keydown", this.handleKey, true);
    }

    private handleKey({ keyCode }: KeyboardEvent) {
        switch (keyCode) {
            case KEYS.W:
            case KEYS.UP:
                this.pressedKeys.up = 1;
                break;
            case KEYS.A:
            case KEYS.LEFT:
                this.pressedKeys.left = 1;
                break;
            case KEYS.S:
            case KEYS.DOWN:
                this.pressedKeys.down = 1;
                break;
            case KEYS.D:
            case KEYS.RIGHT:
                this.pressedKeys.right = 1;
                break;
        }
    }
};