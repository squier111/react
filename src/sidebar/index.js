import React from 'react';
import { map, filter} from 'lodash';
import { Route, Link, NavLink, Switch } from 'react-router-dom';



const SidebarItem = ({ side ,  categories , selectCat , todos , getNum  }) => {
    // console.log(getNum(selectCat, todos));
    return (
        <li>
            <Link onClick={ () => selectCat(side.id) }  to={`/items/${side.id}/`}>{ side.name }
                <span className="num">{Object.values(categories).length }</span>
            </Link>
            <Sidebar
                categories={ categories }
                parentId={ side.id }
                selectCat={ selectCat }
                getNum={ getNum }
            />
        </li>
    );
};


export  const Sidebar = (props) => {
    const { categories ,  parentId , selectCat , todos , getNum } = props;
    // const num = todos.length

//    console.log( getNum());

    return (
        <ul className = "sideBar">
            {
                map(categories, sidebaritem => (
                    sidebaritem.parentId === parentId && (
                        <SidebarItem
                            side={ sidebaritem }
                            key={ sidebaritem.id }
                            categories={ categories }
                            selectCat={ selectCat }
                            todos={ todos }
                            getNum={ getNum }
                        />
                    )
                ))
            }
        </ul>
    );
};