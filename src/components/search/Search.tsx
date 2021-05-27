import React from "react";
import './Search.scss'

export class Search extends React.Component {
    render() {
        return (
            <div className="search-container">
                <label>
                    <input type="checkbox"/>
                    Red {'>'} 50%
                </label>
                <label>
                    <input type="checkbox"/>
                    Green {'>'} 50%
                </label>
                <label>
                    <input type="checkbox"/>
                    Blue {'>'} 50%
                </label>
                <label>
                    <input type="checkbox"/>
                    Saturation {'>'} 50%
                </label>
            </div>
        )
    }
}
