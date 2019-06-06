import React from 'react';
import { connect } from 'react-redux';

import Loader from '../commons/Loader';
import TitlesList from './TitlesList';

import { fetchTitles } from '../../actions/titlesActions';


class TitlesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        this.props.fetchTitles()
    }

    render() {
        const { titles, isLoading } = this.props;
        if (isLoading) {
            return (<Loader />)
        }
        return (
            <div className="row">
                <h4>Company Titles</h4>
                {this.props.titles && <TitlesList titles={titles} />}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    titles: state.titles,
    isLoading: state.apiCallsInProgress > 0
});


export default connect(mapStateToProps, { fetchTitles })(TitlesPage);