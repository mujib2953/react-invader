import React, { Fragment, FunctionComponent } from "react";
import { connect } from "react-redux";

import { doAddition } from "../store/calculations/actions";

interface AddProps {
    doAddition: (value: number) => void;
}

const Add: FunctionComponent<AddProps> = ({ doAddition }) => {
    return (
        <Fragment>
            test
            <button onClick={() => {
                doAddition(1);
            }}>Add</button>
        </Fragment>
    );
};

export default connect(undefined, { doAddition })(Add);
