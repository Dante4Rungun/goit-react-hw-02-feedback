import React, { Component } from "react";
import styled from "./Statistics.module.css"
 
export class Statistics extends Component {
    render() {
        return(
            <div className={styled.statistic}>
                <p className={styled.statistic__title}>Statistics</p>
                <p className={styled.statistic__info}>Good: {this.props.good}</p>
                <p className={styled.statistic__info}>Neutral: {this.props.neutral}</p>
                <p className={styled.statistic__info}>Bad: {this.props.bad}</p>
                <p className={styled.statistic__info}>Total: {this.props.total}</p>
                <p className={styled.statistic__info}>Positive feedback: {this.props.positivePercentage}%</p>
            </div>   
        )    
    }
}