import React from 'React';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import EmployeesList from './EmployeesList';
import ReactPaginate from 'react-paginate';

import { fetchAllEmployees } from '../../actions/employeeActions';

class EmployeesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            page: 1,
            pageCount: 0,
            limit: 20,
            offset: 0
        }

        this.handlePageClick = this.handlePageClick.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        this.props.fetchAllEmployees().then(
            employees => {
                const total = employees.length;
                this.setState({
                    pageCount: Math.ceil(total / this.state.limit),
                });
            }
        );
    }

    handlePageClick(data) {
        let selected = data.selected;
        let offset = Math.ceil(selected * this.state.limit);

        this.setState({ offset: offset });
    }

    render() {
        return (
            <div className="row">
                <div>
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
                />
            </div >
        )
    }
}

const mapStateToProps = (state) => ({
    employees: state.employees,
    pageCount: state.pageCount
})

export default connect(mapStateToProps, { fetchAllEmployees })(EmployeesPage);