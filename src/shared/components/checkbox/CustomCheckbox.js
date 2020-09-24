

import Checkbox from '@material-ui/core/Checkbox';
import React from 'react'

function CustomCheckbox(props) {
    return (
        <Checkbox {...props} label={props.label}
            labelStyle={{ color: props.color }}
            iconStyle={{ fill: props.color }}
            inputStyle={{ color: props.color }}
            style={{ color: props.color }} {...props} />
    );
}
export default CustomCheckbox;
