CREATE TABLE job_info(
    employee_id UUID REFERENCES employee_basic_info(employee_id),
    designation VARCHAR(50),
    department VARCHAR(50),
    date_of_joining DATE,
    work_status VARCHAR(20)
);