import React, { Component } from "react";
import styled from "./Notification.module.css"

export class Notification extends Component {
    render() {
        return (
            <p className={styled.notification}>{this.props.message}</p> 
        )
    }
}