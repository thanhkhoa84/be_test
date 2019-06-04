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
            employees: [],
            page: 1,
            limit: 20,
            numberPage: 0
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        const { fetchAllEmployees } = this.props;
        fetchAllEmployees();
    }

    render() {
        return (
            <div className="row">
                <div>
                    <h4 className="u-pull-left">Employees List</h4>
                    <Link to="/employee" className="button button-primary u-pull-right">Add New Employee</Link>
                </div>
                <table className="u-full-width">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <EmployeesList
                        employees={this.props.employees}
                    />
                </table>
                <ReactPaginate
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={this.state.numberPage}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={this.state.limit}
                    onPageChange={this.handlePageClick}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    employees: state.employees
})

export default connect(mapStateToProps, { fetchAllEmployees })(EmployeesPage);