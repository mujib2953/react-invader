import React, { FC, Fragment, useState } from "react";

const Gameover: FC = () => {

    // TODO : score need to remove from state and read it from props;
    const [score, setScore] = useState(0);

    return (
        <Fragment>
            <span className="centerScreen title">Game Over!!!</span>
            <span className="centerScreen score">Score : { score }</span>
            <span className="centerScreen pressEnter">Press Enter to continue!!</span>
        </Fragment>
    );
};

export default Gameover;
