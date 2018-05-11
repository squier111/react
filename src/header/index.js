import React from 'react';
import { map } from 'lodash';

export const Header = ({todos}) => (
    <div className="header">
   		 <ProgressBar todos ={todos}/>
    </div>
)

const ProgressBar = ({todos}) => {
	let itemsDone = 0;
    map(todos, item => item.done && itemsDone++);
    const percent = itemsDone / Object.values(todos).length * 100;

    return (
	    <div className="progress">
	    	<span style= {{width:percent + "%" }}></span>
	    </div>
    	)
};