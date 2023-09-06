CREATE TABLE passport_info (
  passport_number VARCHAR(20),
  employee_id UUID REFERENCES employee_basic_info(employee_id),
  passport_expiry DATE
);

