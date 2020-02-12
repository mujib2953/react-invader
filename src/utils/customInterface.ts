export interface Screen {
    width: number;
    height: number;
    ratio: number;
};

export interface Quadrilateral {
    x: number;
    y: number;
    height: number;
    width: number;
}

export interface IGame {
    position: Quadrilateral;
    onDie?: () => void;
    speed: number;
    radius: number;
    delete?: boolean;
};

export interface IButllet extends IGame {
    direction: string;
}

export interface SharedState extends Screen {
    context: CanvasRenderingContext2D;
};
