import React from 'react';
import ReactSelect from 'react-select';
import styled from 'styled-components';

const MultiSelect = styled(ReactSelect)`
	&.Select--multi  {
		.Select-value {
			display: inline-flex;
			align-items: center;
		}		
	}

	& .Select-placeholder {
		font-size: smaller;
	}
`;


const options = [
    {value: 'one', label: 'One!'},
    {value: 'two', label: 'Two!', clearableValue: false}
];

function logChange(val) {
    console.log(`Selected: ${JSON.stringify(val)}`);
}

export default props => (
    <MultiSelect
        multi
        {...props}
        options={options}
        componentClass="select"
        onChange={logChange}
        value="one"
    />
);
