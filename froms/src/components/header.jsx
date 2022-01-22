import React from 'react';
import { Link } from 'react-router-dom';
export default class Header extends React.Component{
    render(){
        return(
            <div>
                <h2> react app</h2>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/singup'>sing up</Link></li>
                </ul>
            </div>
        )
    }
}