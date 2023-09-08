SELECT employee_basic_info.employee_id, full_name, date_of_birth, iqama_id , iqama_expiry, work_status
FROM employee_basic_info, iqama_info, job_info
WHERE employee_basic_info.employee_id = iqama_info.employee_id