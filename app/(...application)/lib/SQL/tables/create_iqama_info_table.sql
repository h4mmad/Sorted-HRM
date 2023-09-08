CREATE TABLE iqama_info (
  iqama_id VARCHAR(10) PRIMARY KEY,
  employee_id UUID REFERENCES employee_basic_info(employee_id),
  iqama_expiry DATE
);

S