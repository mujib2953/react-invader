import React, { Fragment, FunctionComponent } from "react";
import { connect } from "react-redux";

import { AppState } from "../store/rootReducer";

type ViewProps = {
    value: number;
}

const View: FunctionComponent<ViewProps> = ({ value }) => {
    return (
        <Fragment>
            { value }
        </Fragment>
    );
};

const mapStateToProps = (state: AppState) => ({
    value: state.calci.value,
});

export default connect(mapStateToProps)(View);