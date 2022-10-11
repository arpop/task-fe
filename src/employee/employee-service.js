export default function getEmployees() {
    return fetch("tasks/employee", {
        method: "GET",
        headers: {
            "accept": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    })
        .then(res => res.json());
};