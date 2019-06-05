require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

export function getJobTitles() {
    return fetch(`http://localhost:5002/titles`)
        .then(function (resp) {
            return resp.json()
        })
        .catch(err => {
            console.log(err);
        });
}

export function getAllEmployees() {
    return fetch(`http://localhost:5002/employee`)
        .then(function (resp) {
            return resp.json()
        })
        .catch(err => {
            console.log(err);
        });
}

export function getEmployeebyId(id) {
    return fetch(`http://localhost:5002/employee/${id}`)
        .then(resp => {
            return resp;
        })
        .catch(err => {
            console.log(err);
        });
}

export function createNewEmployee(employee) {
    const { name, titleId, email } = employee;
    return fetch(`http://localhost:5002/employee`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: `{"name": "${name}","title_id": ${titleId},"email": "${email}"}`
    })
        .then(resp => {
            return resp;
        })
        .catch(err => {
            console.log(err);
        });
}

export function updateEmployee(employee) {
    const { id, name, titleId, email } = employee;
    return fetch(`http://localhost:5002/employee/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: `{"name": "${name}","title_id": ${titleId},"email": "${email}"}`
    })
        .then((resp) => {
            return resp;
        })
        .catch(err => {
            console.log(err);
        });
}

export function deleteEmployee(id) {
    return fetch(`http://localhost:5002/employee/${id}`, {
        method: 'DELETE'
    })
        .then((resp) => {
            return resp;
        })
        .catch(err => {
            console.log(err);
        });
}