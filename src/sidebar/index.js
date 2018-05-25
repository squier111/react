import React from 'react';
import { map, filter, compact} from 'lodash';
import { Route, Link, Switch } from 'react-router-dom';



const SidebarItem = ({ side ,  categories , selectCat , todos , menuElemNumber, numberSeporator , createListNumber  }) => {
    	const {id, name, parentId} = side;
    	    const counter = (
        		(parentId === null)
            ? filter(categories, (item) => item.parentId === id)
            : filter(todos, ({ categoryId }) => categoryId === id)
    		);
    	return (
		    <li>
		        <Link onClick={ () => selectCat(side.id) }   to={`/items/${side.id}/`}>{menuElemNumber} { side.name }
		        	<span className="num">{counter.length}</span>
		        </Link>
		        <Sidebar categories={ categories }
		              	 parentId={ id }
		              	todos={ todos }
		              	numberSeporator={ numberSeporator }
		              	createListNumber={ createListNumber }
		                menuElemNumber = {menuElemNumber+= `${numberSeporator}0`}
		                selectCat={ selectCat }
		                />
		    </li>
    	)
};



export  const Sidebar = (props) => {
    const { categories ,  parentId , selectCat , todos ,  createListNumber , numberSeporator ='.'  } = props;
    let menuElemNumber = "0";



    let categoryElements = compact(map(categories, sidebaritem=>{
            if( sidebaritem.parentId === parentId){
                menuElemNumber = createListNumber(menuElemNumber, numberSeporator);

                return( <SidebarItem side={ sidebaritem }
                                 key={ sidebaritem.id }
                                 categories={ categories }
                                 createListNumber={createListNumber}
                                  menuElemNumber = {menuElemNumber }
                                 numberSeporator={numberSeporator}
                                 selectCat={ selectCat }
                                 todos={ todos }/>)
            }
         }));

    return categoryElements.length > 0?<div id = "sideBar"> <ul className = "sideBar">{categoryElements}</ul></div> : null;

};