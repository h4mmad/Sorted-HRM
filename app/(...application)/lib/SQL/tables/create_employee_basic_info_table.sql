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

ALTER TABLE employee_basic_info
ALTER COLUMN full_name SET NOT NULL, 
ALTER COLUMN date_of_birth SET NOT NULL,
AlTER COLUMN gender SET NOT NULL,
ALTER COLUMN nationality SET NOT NULL,
ALTER COLUMN phone_number SET NOT NULL,
ALTER COLUMN email SET NOT NULL;

