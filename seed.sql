DROP TABLE IF EXISTS marathon CASCADE; 
DROP TABLE IF EXISTS posts CASCADE; 
DROP TABLE IF EXISTS post_comments CASCADE;

CREATE TABLE IF NOT EXISTS marathons (
 id SERIAL PRIMARY KEY,
 marathon_name VARCHAR(100),
 city VARCHAR(100),
 country varchar(100),
 estimated_attendance INT);

 CREATE TABLE IF NOT EXISTS posts(
 id SERIAL PRIMARY KEY,
 marathon_id INT,
 username VARCHAR(100),
 content TEXT,
 date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP);

 CREATE TABLE IF NOT EXISTS post_comments(
 id SERIAL PRIMARY KEY,
 post_id INT,
 username VARCHAR(100),
 content TEXT,
 date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP);


-- SEED FILE

INSERT INTO marathons (marathon_name, city, country, estimated_attendance) VALUES
  ('Boston Marathon', 'Boston', 'United States', 30000),
  ('New York City Marathon', 'New York City', 'United States', 50000),
  ('Tokyo Marathon', 'Tokyo', 'Japan', 38000),
  ('London Marathon', 'London', 'United Kingdom', 40000),
  ('Berlin Marathon', 'Berlin', 'Germany', 45000),
  ('Chicago Marathon', 'Chicago', 'United States', 45000),
  ('Paris Marathon', 'Paris', 'France', 60000),
  ('Seoul International Marathon', 'Seoul', 'South Korea', 20000),
  ('Athens Marathon', 'Athens', 'Greece', 20000),
  ('Honolulu Marathon', 'Honolulu', 'United States', 20000),
  ('Dubai Marathon', 'Dubai', 'United Arab Emirates', 25000),
  ('Vienna City Marathon', 'Vienna', 'Austria', 40000),
  ('Stockholm Marathon', 'Stockholm', 'Sweden', 20000),
  ('Cape Town Marathon', 'Cape Town', 'South Africa', 25000),
  ('Sydney Marathon', 'Sydney', 'Australia', 35000),
  ('Rome Marathon', 'Rome', 'Italy', 15000),
  ('Mumbai Marathon', 'Mumbai', 'India', 40000),
  ('Rio de Janeiro Marathon', 'Rio de Janeiro', 'Brazil', 30000),
  ('Lisbon Marathon', 'Lisbon', 'Portugal', 30000),
  ('Dublin Marathon', 'Dublin', 'Ireland', 20000),
  ('Hamburg Marathon', 'Hamburg', 'Germany', 25000),
  ('Amsterdam Marathon', 'Amsterdam', 'Netherlands', 45000),
  ('Barcelona Marathon', 'Barcelona', 'Spain', 30000);

  
INSERT INTO posts (username, marathon_id, content) VALUES
  ('Tim','1','The Boston Marathon was an amazing experience! The atmosphere was electric, and the crowd support was incredible. I''m so proud to have completed it.'),
  ('Joe', '2','Just finished the New York City Marathon, and it was absolutely incredible! The course was challenging but so rewarding. The energy of the city and the cheering spectators kept me going.'),
  ('Manny', '3','Tokyo Marathon was a dream come true! The city was beautiful, and the organization of the event was top-notch. The support from fellow runners and volunteers was heartwarming.'),
  ('Sam', '4','I can''t believe I ran the London Marathon! The route took us through some iconic landmarks, and the cheers from the crowd were motivating. Crossing that finish line was an unforgettable moment.'),
  ('Cordelia', '5', 'The Berlin Marathon was an epic adventure! The flat course and the enthusiastic spectators made for an incredible race day. I''m proud to have achieved a personal best time here.'),
  ('Davina', '6', 'Just completed the Chicago Marathon, and I''m on cloud nine! The course was fast, and the spirit of the city was infectious. It was an experience I''ll cherish forever.'),
  ('Nick', '7', 'Paris Marathon was an absolute delight! The scenic route, the music bands, and the cheering fans made it an unforgettable race. Running through the streets of Paris was a true privilege.');