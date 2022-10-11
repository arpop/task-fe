import './EmployeeCombo.css';
import React, { useEffect, useState } from "react";
import { Employee } from "./Employee";
import getEmployees from "./employee-service";

const EmployeeCombo = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);
    useEffect(() => {
        getEmployees().then(res => setEmployees(res));
    }, []);

    const renderEmployee = (emp: Employee) => {
        return <option key={emp.id}>{emp.name}</option>
    };

    return (
        <select className={"EmployeeCombo"}>
            {employees.map(emp => renderEmployee(emp))}
        </select>
    );
}

export default EmployeeCombo;