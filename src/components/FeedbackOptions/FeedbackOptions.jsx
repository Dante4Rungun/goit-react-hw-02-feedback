import React, { Component } from "react";
import styled from "./FeedbackOptions.module.css"

export class FeedbackOption extends Component {
    render() {
        return (
            <div className={styled.options}>
                {this.props.options.map(option => (
                    <button key={option} name={option} className={styled.options__push} onClick={this.props.onLeaveFeedback}>
                        {option}
                    </button>
                ))}
            </div>            
        )
    }
}