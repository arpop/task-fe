import getEmployees from "./employee-service";
import fetchMock from "jest-fetch-mock";

test("Test the get employees function", async () => {
    require('jest-fetch-mock').enableMocks();
    fetchMock.mockResponseOnce(JSON.stringify([{ id: 1, name: "Anna" }, { id: 2, name: "Bob" }]));
    let employees = [];
    await getEmployees().then(result => employees = result);
    expect(employees).toHaveLength(2);
});
