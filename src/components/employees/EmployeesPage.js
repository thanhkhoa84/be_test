import React from 'React';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import Loader from '../commons/Loader';
import EmployeesList from './EmployeesList';

import { fetchAllEmployees } from '../../actions/employeeActions';

class EmployeesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            pageCount: 0,
            limit: 20,
            offset: 0,
            initialPage: 0
        }

        this.handlePageClick = this.handlePageClick.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        const { search } = this.props.location;
        const pageParams = +search.replace('?p=', '');

        let offset = 0;
        let initialPage = 0;

        if (pageParams) {
            offset = Math.ceil((pageParams - 1) * this.state.limit);
            initialPage = pageParams - 1;
        }

        this.props.fetchAllEmployees().then(
            employees => {
                const total = employees.length;
                this.setState({
                    offset: offset,
                    initialPage: initialPage,
                    pageCount: Math.ceil(total / this.state.limit)
                });
            }
        );
    }

    handlePageClick(data) {
        let selected = data.selected;
        let offset = Math.ceil(selected * this.state.limit);

        this.setState({ offset: offset, page: selected + 1 }, () => {
            this.props.history.push({
                search: `?p=${this.state.page}`
            });
        });
    }

    render() {
        const { isLoading } = this.props;
        if (isLoading) {
            return (<Loader />)
        }
        return (
            <div className="row">
                <div className="clearfix">
                    <h4 className="u-pull-left">Employees List</h4>
                    <Link to="/employee" className="button button-primary u-pull-right">Add New Employee</Link>
                </div>
                <EmployeesList
                    employees={this.props.employees}
                    offset={this.state.offset}
                    page={this.state.page}
                    limit={this.state.limit}
                />

                <ReactPaginate
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={2}
                    onPageChange={this.handlePageClick}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                    initialPage={this.state.initialPage}
                    disableInitialCallback={true}
                    forcePage={this.state.initialPage}
                />
            </div >
        )
    }
}

const mapStateToProps = (state) => ({
    employees: state.employees,
    pageCount: state.pageCount,
    isLoading: state.apiCallsInProgress > 0
})

export default connect(mapStateToProps, { fetchAllEmployees })(EmployeesPage);