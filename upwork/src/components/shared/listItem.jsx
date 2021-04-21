import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import { logout } from "../../store/actions/logoutAction";
import {Link} from 'react-router-dom';

const ListItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch()
  const logoutUser = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    return dispatch(logout())
  }

  return (
    <div>
      <div className="flex justify-between items-center border-b border-navBorder pt-4 cursor-pointer" onClick={()=>setIsOpen(!isOpen)}>
        <div className="flex container mx-auto items-center pb-4">
          {props.list.rightIcon}
          {props.list.title === 'Log out' 
          ? <h4 className="text-sm" onClick={logoutUser}>{props.list.title}</h4>
          : <h4 className="text-sm">{props.list.title}</h4>}
          
        </div>

        {/* has dropdown? */}
        {props.list.list
        ? <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
      : null}

      {/* has another icon? */}
      {props.list.icon
      ? <div className="mb-4">{props.list.icon}</div>
      : null}
      
      </div>
      {/* list */}
      {isOpen ? (
        <ul>
          {props.list.list?.map((item) => (
            <li className="pt-4 ml-4 text-sm">
              <Link to={item.link}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
export default ListItem;
