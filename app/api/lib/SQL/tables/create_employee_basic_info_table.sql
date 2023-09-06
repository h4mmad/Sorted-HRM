CREATE TABLE employee_basic_info (
  employee_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  picture_url VARCHAR(255),
  full_name VARCHAR(100),
  date_of_birth DATE,
  gender VARCHAR(10),
  nationality VARCHAR(50),
  phone_number VARCHAR(15),
  email VARCHAR(100)
);
