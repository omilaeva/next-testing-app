CREATE TABLE user_roles (
  id CHAR(36) PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE users (
  id CHAR(36) PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  username VARCHAR(255) NOT NULL,
  password CHAR(128) NOT NULL,
  user_role_id CHAR(36) REFERENCES user_roles(id) ON DELETE CASCADE
);

CREATE TABLE properties (
  id CHAR(36) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL
);

CREATE TABLE units (
  id CHAR(36) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  property_id CHAR(36) REFERENCES properties(id) ON DELETE CASCADE
);

CREATE TABLE categories (
  id CHAR(36) PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE statuses (
  id CHAR(36) PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE admin_access (
  id CHAR(36) PRIMARY KEY,
  property_id CHAR(36) REFERENCES properties(id) ON DELETE CASCADE,
  user_id CHAR(36) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE user_access (
  id CHAR(36) PRIMARY KEY,
  unit_id CHAR(36) REFERENCES units(id) ON DELETE CASCADE,
  user_id CHAR(36) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE vendor_status (
  id CHAR(36) PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE vendors (
  id CHAR(36) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category_id CHAR(36) REFERENCES categories(id) ON DELETE CASCADE,
  contact_name VARCHAR(255) NOT NULL,
  phone_number VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  rating VARCHAR(255) NOT NULL,
  status_id CHAR(36) REFERENCES vendor_status(id) ON DELETE CASCADE
);

CREATE TABLE vendor_ratings (
  id CHAR(36) PRIMARY KEY,
  rating VARCHAR(255) NOT NULL,
  vendor_id CHAR(36) REFERENCES vendors(id) ON DELETE CASCADE
);

CREATE TABLE tickets (
  id CHAR(36) PRIMARY KEY,
  request_type VARCHAR(255) NOT NULL,
  priority VARCHAR(255) NOT NULL,
  user_id CHAR(36) REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  photos TEXT,
  access_instructions TEXT,
  recommended_time TEXT,
  status VARCHAR(255) NOT NULL,
  assigned_to CHAR(36) REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  property_id CHAR(36) REFERENCES properties(id) ON DELETE CASCADE,
  category_id CHAR(36) REFERENCES categories(id) ON DELETE CASCADE,
  status_id CHAR(36) REFERENCES statuses(id) ON DELETE CASCADE
);
