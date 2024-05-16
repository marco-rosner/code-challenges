class Component extends React.Component {
    constructor(props) {
        super(props);
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (prevProps.items.length < this.props.items.length) return 'Bigger'

        return null
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.items.length === this.props.items.length) return false

        return true
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot) {
            this.props.hasMoreItems = true
        }
    }


}