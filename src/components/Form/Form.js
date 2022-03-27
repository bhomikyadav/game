import React from 'react';
import './Form.css'
import {Link} from "react-router-dom";

function Form() {
    return (
        <div className="form">
            <form>
                <label>Username</label>
                <input type="text" />
                <label>Room Code</label>
                <input type="number"/>
                <label>Room Type</label>
                <select>
                    <option value="" hidden>Room type</option>
                    <option>Editor</option>
                    <option>Document</option>
                </select>
                <button><Link to="join">Join</Link></button>
                <p>Don't have a room? Create <a href="#">New Room</a></p>
            </form>
        </div>
    )
}

export default Form
