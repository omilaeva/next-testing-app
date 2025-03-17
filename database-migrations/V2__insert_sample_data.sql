-- Insert into user_roles
INSERT INTO user_roles (id, name) VALUES
  ('1', 'Admin'),
  ('2', 'Manager'),
  ('3', 'Tenant'),
  ('4', 'Technician');

-- Insert into users
INSERT INTO users (id, email, username, password, user_role_id) VALUES
  ('101', 'admin@example.com', 'admin', 'hashed_password_1', '1'),
  ('102', 'manager@example.com', 'manager', 'hashed_password_2', '2'),
  ('103', 'tenant@example.com', 'tenant', 'hashed_password_3', '3'),
  ('104', 'tech@example.com', 'technician', 'hashed_password_4', '4');

-- Insert into properties
INSERT INTO properties (id, name, address) VALUES
  ('201', 'Sunset Apartments', '123 Main St, NY'),
  ('202', 'Greenwood Condos', '456 Oak St, CA');

-- Insert into units
INSERT INTO units (id, name, property_id) VALUES
  ('301', 'Unit 101', '201'),
  ('302', 'Unit 102', '201'),
  ('303', 'Unit 201', '202');

-- Insert into categories
INSERT INTO categories (id, name) VALUES
  ('401', 'Electrical'),
  ('402', 'Plumbing'),
  ('403', 'General Maintenance');

-- Insert into statuses
INSERT INTO statuses (id, name) VALUES
  ('501', 'Open'),
  ('502', 'In Progress'),
  ('503', 'Closed');

-- Insert into admin_access
INSERT INTO admin_access (id, property_id, user_id) VALUES
  ('601', '201', '101'),
  ('602', '202', '102');

-- Insert into user_access
INSERT INTO user_access (id, unit_id, user_id) VALUES
  ('701', '301', '103'),
  ('702', '302', '103'),
  ('703', '303', '103');

-- Insert into vendor_status
INSERT INTO vendor_status (id, name) VALUES
  ('801', 'Active'),
  ('802', 'Inactive');

-- Insert into vendors
INSERT INTO vendors (id, name, category_id, contact_name, phone_number, email, rating, status_id) VALUES
  ('901', 'ABC Electricals', '401', 'John Doe', '555-1234', 'abc@example.com', '4.5', '801'),
  ('902', 'PlumbPro Services', '402', 'Jane Smith', '555-5678', 'plumbpro@example.com', '4.7', '801');

-- Insert into vendor_ratings
INSERT INTO vendor_ratings (id, rating, vendor_id) VALUES
  ('1001', '4.5', '901'),
  ('1002', '4.7', '902');

-- Insert into tickets
INSERT INTO tickets (id, request_type, priority, user_id, title, description, photos, access_instructions, recommended_time, status, assigned_to, created_at, property_id, category_id, status_id) VALUES
  ('1101', 'Repair', 'High', '103', 'Leaking Faucet', 'The kitchen faucet is leaking continuously.', NULL, 'Access granted anytime', '9 AM - 11 AM', 'Open', '104', CURRENT_TIMESTAMP, '201', '402', '501'),
  ('1102', 'Installation', 'Medium', '103', 'New Light Fixture', 'Need to install a new ceiling light.', NULL, 'Call before entering', '2 PM - 4 PM', 'In Progress', '104', CURRENT_TIMESTAMP, '202', '401', '502'),
  ('1103', 'General Maintenance', 'Low', '103', 'AC Filter Change', 'Routine AC filter replacement.', NULL, 'Call before entering', 'Flexible', 'Closed', NULL, CURRENT_TIMESTAMP, '202', '403', '503');
