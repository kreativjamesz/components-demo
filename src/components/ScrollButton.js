import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ScrollButton extends Component {
    state = {
        intervalId: 0
    };

    scrollStep = () => {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    };

    scrollToTop = () => {
        let intervalId = setInterval(
            this.scrollStep.bind(this),
            this.props.delayInMs
        );
        this.setState({ intervalId: intervalId });
    };

    render() {
        return (
            <button
                id='scrollUpBtn'
                title='Back to top'
                className='btn btn-purple scroll'
                onClick={() => {
                    this.scrollToTop();
                }}
            >
                <FontAwesomeIcon
                    id='scrollUpIcon'
                    color='#fafafa'
                    size='sm'
                    icon='long-arrow-alt-up'
                />
            </button>
        );
    }
}

export default ScrollButton;
