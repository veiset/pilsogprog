import React, { Component } from 'react';
import { firestore } from './firebase';
import moment from 'moment';

class Pizza extends Component {

    updateInterval;

    constructor(props) {
        super(props);

        this.state = {
            pizzaTime: null,
            timeLeftToPizza: null,
        }
    }

    componentDidMount() {
        firestore.collection('pizza').onSnapshot(snapshot => {
            snapshot.forEach(doc => {
                const { meetupDate, pizzaTime } = doc.data();

                const today = moment();
                const meetupMoment = moment(meetupDate.toDate());

                if (meetupMoment.diff(today, 'days') === 0) {
                    const pizzaMoment = moment(pizzaTime.toDate());
                    this.setState({
                        pizzaTime: pizzaMoment,
                        timeLeftToPizza: this.timeLeftToPizza(pizzaMoment)
                    });
                }
            });
        });

        this.updateInterval = setInterval(() => {
            this.setState({ timeLeftToPizza: this.timeLeftToPizza(this.state.pizzaTime) });
        }, 30000);
    }

    componentWillUnmount() {
        clearInterval(this.updateInterval);
    }

    timeLeftToPizza = (pizzaTime) => {
        if (!pizzaTime) {
            return null;
        }
        return pizzaTime.diff(moment());
    };

    render() {
        const { timeLeftToPizza } = this.state;

        if (timeLeftToPizza) {
            const prefix = timeLeftToPizza > 0 ? '🍕 will be here' : '🍕 arrived';
            const affix = timeLeftToPizza > 0 ? ' 👌' : ', you\'re late! 😰';

            const humanReadableDuration = moment.duration(timeLeftToPizza).humanize(true);

            return (
                <h1>{`${prefix} ${humanReadableDuration}${affix}`}</h1>
            );
        }

        return null;
    }
}

export default Pizza;
