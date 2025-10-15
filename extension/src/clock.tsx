import { Component, render } from 'preact';

interface ClockState {
    time: number;
}

export class Clock extends Component<{}, ClockState> {
    constructor() {
        super();
        this.state = { time: Date.now() };
    }
    private timer?: ReturnType<typeof setInterval>;
    // Lifecycle: Called whenever our component is created
    componentDidMount() {
        // update time every second
        this.timer = setInterval(() => {
            this.setState({ time: Date.now() });
        }, 1000);
    }

    // Lifecycle: Called just before our component will be destroyed
    componentWillUnmount() {
        // stop when not renderable
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    render() {
        let time = new Date(this.state.time).toLocaleTimeString();
        return <span>{time}</span>;
    }
}

render(<Clock />, document.getElementById('app'));
