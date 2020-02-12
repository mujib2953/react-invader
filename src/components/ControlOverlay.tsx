import React, { FC, Fragment } from "react";

const ControlOverlay: FC = () => {
    return (
        <Fragment>
            <span className="centerScreen controls">Arrows to move the ships, Space to shoot.</span>
        </Fragment>
    );
}

export default ControlOverlay;
