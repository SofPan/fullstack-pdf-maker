DROP TABLE IF EXISTS entries CASCADE;
DROP TABLE IF EXISTS documents CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS sections CASCADE;

CREATE TABLE sections (
  id SERIAL PRIMARY KEY,
  -- document_id INTEGER REFERENCES documents(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE documents (
  id SERIAL PRIMARY KEY,
  user_id INTEGER UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  hero_img VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE entries (
  id SERIAL PRIMARY KEY,
  document_id INTEGER REFERENCES documents(id) ON DELETE CASCADE,
  section_id INTEGER REFERENCES sections(id),
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255),
  description TEXT,
  cover_img VARCHAR(255),
  rating DECIMAL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);