import React, { FC, Fragment } from "react";

const Title: FC = () => {
    return (
        <Fragment>
            <span className="centerScreen title">React Invader</span>
            <span className="centerScreen pressSpace">Press Enter to start the Game!</span>
        </Fragment>
    );
};

export default Title;
