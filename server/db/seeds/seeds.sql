INSERT INTO users (email, password_hash, created_at)
VALUES ('x@y.com', '123', NOW());

INSERT INTO documents (user_id, title, description, hero_img, created_at)
VALUES(1, 'New Books This Week', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam semper tellus vel erat porttitor tristique. Donec a accumsan ipsum. Cras nibh elit, placerat ut lorem at, molestie pulvinar massa. Donec nec erat rhoncus, ornare lacus.', 'https://picsum.photos/1200/1800', NOW());

INSERT INTO sections (name, created_at)
VALUES 
('General Fiction', NOW()),
('Non-Fiction', NOW()),
('SciFi & Fantasy', NOW()),
('Romance', NOW()),
('Horror & Mystery', NOW()),
('Biography', NOW()),
('Kids', NOW());

INSERT INTO entries (document_id, section_id, title, author, description, cover_img, rating, created_at)
VALUES
(1, 1, 'General Fiction Title', 'Jim Jones', 
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam semper tellus vel erat porttitor tristique. Donec a accumsan ipsum. Cras nibh elit, placerat ut lorem at, molestie pulvinar massa. Donec nec erat rhoncus, ornare lacus.',
'https://picsum.photos/500/700',
4.5,
NOW()),
(1, 1, 'General Fiction Title 2', 'Allie Kat', 
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam semper tellus vel erat porttitor tristique. Donec a accumsan ipsum. Cras nibh elit, placerat ut lorem at, molestie pulvinar massa. Donec nec erat rhoncus, ornare lacus.',
'https://picsum.photos/500/700',
2.0,
NOW());