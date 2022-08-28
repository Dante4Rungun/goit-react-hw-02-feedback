import React, { Component } from "react";
import styled from "./Section.module.css"
import { Statistics } from "components/Statistics/Statistics";
import { FeedbackOption } from "components/FeedbackOptions/FeedbackOptions";
import { Notification } from "components/Notification/Notification";
import PropTypes from 'prop-types';

export class Section extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad:0
    }

    setFeedbackValue = (name) => {
        if (name === "good") {
            this.setState(state => ({
                [name]: state.good + 1
            }))
        }
        if (name === "neutral") {
            this.setState(state => ({
                [name]: state.neutral + 1
            }))
        }
        if (name === "bad") {
            this.setState(state => ({
                [name]: state.bad + 1
            }))
        }
    }

    onLeaveFeedback = event => {
        const { name } = event.target
        this.setFeedbackValue(name)
    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state
        return good + neutral + bad
    }

    countPositiveFeedbackPercentage = () => {
        const { good, neutral, bad } = this.state
        return Math.floor((good/(good+neutral+bad))*100)
    }

    render() {
        const {good, neutral, bad} = this.state
        return (
            <section className={styled.feedback}>
                <p className={styled.feedback__title}>{this.props.title}</p>
                <FeedbackOption options={['good', 'neutral', 'bad']} onLeaveFeedback={this.onLeaveFeedback} />
                {(good + neutral + bad) > 0 ? (
                  <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />  
                ) : (
                  <Notification message = {'No feedback given'} />
                )}
            </section>
        )
    }
}

Section.propTypes = {
    title: PropTypes.string
}