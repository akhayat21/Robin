-- seeds for clients table
INSERT INTO clients (clientName,contactLastname,contactFirstName,phoneNumber,addressLine,city,state,country,Email,createdAt,updatedAt)
VALUES ('Lukas','Jackyln','Lukas',2047411243,'73 Golf Avenue','Suwanee', 'GA', 'USA', 'LukasJ@gmail.com','2019-04-17 13:39:43','2019-04-17 13:39:43');
INSERT INTO client (clientName,contactLastname,contactFirstName,phoneNumber,addressLine,city,state,country,Email,createdAt,updatedAt)
VALUES ('Marcus','Weldon','Markus',2047481723,'8395 Strawberry St.','Miami', 'FL', 'USA', 'MWeldon23@gmail.com','2019-04-17 13:39:43','2019-04-17 13:39:43');
INSERT INTO client (clientName,contactLastname,contactFirstName,phoneNumber,addressLine,city,state,country,Email,createdAt,updatedAt)
VALUES ('Gerald','Adam','Gerald',2047432354,'839 Fordham Ave.','Fairborn', 'OHL', 'USA', 'Gerald.adam@gmail.com','2019-04-17 13:39:43','2019-04-17 13:39:43');

--seeds for contractors
INSERT INTO contractors (firstName,lastName,email,teamAssignment,adminAccess,createdAt,updatedAt)
VALUES ('Sergej','Nigul','sergej@gmail.com','Team1', 0,'2019-04-17 13:39:43','2019-04-17 13:39:43');
INSERT INTO contractors (firstName,lastName,email,teamAssignment,adminAccess,createdAt,updatedAt)
VALUES ('Allaa','Khayat','admin@gmail.com','Manager', 1,'2019-04-17 13:39:43','2019-04-17 13:39:43');
INSERT INTO contractors (firstName,lastName,email,teamAssignment,adminAccess,createdAt,updatedAt)
VALUES ('Michael','Daniel','MDaniel@gmail.com','Team2', 0,'2019-04-17 13:39:43','2019-04-17 13:39:43');

-- seeds for products
INSERT INTO products (productName,productDescription,quantityinStock,msrp,createdAt,updatedAt)
VALUES ('Thin Mints','Thin minty chocoloate cookies',34,6,'2019-04-17 13:39:43','2019-04-17 13:39:43');
INSERT INTO products (productName,productDescription,quantityinStock,msrp,createdAt,updatedAt)
VALUES ('Samoas','Coconut and chocolate crunch',46,6,'2019-04-17 13:39:43','2019-04-17 13:39:43');
INSERT INTO products (productName,productDescription,quantityinStock,msrp,createdAt,updatedAt)
VALUES ('Tagalongs','Peanut Butter goodness',65,6,'2019-04-17 13:39:43','2019-04-17 13:39:43');
INSERT INTO products (productName,productDescription,quantityinStock,msrp,createdAt,updatedAt)
VALUES ('Do-si-dos','Peanut Butter Sandwhich',98,6,'2019-04-17 13:39:43','2019-04-17 13:39:43');
INSERT INTO products (productName,productDescription,quantityinStock,msrp,createdAt,updatedAt)
VALUES ('Savanah Smiles','Lemon Deliciousness',23,6,'2019-04-17 13:39:43','2019-04-17 13:39:43');

-- seeds for sales
INSERT INTO sales (clientid,productid,quantity,createdAt,updatedAt)
VALUES (1,2,2,'2019-04-17 13:39:43','2019-04-17 13:39:43');
INSERT INTO sales (clientid,productid,quantity,createdAt,updatedAt)
VALUES (2,3,4,'2019-04-17 13:39:43','2019-04-17 13:39:43');
INSERT INTO sales (clientid,productid,quantity,createdAt,updatedAt)
VALUES (2,1,10,'2019-04-17 13:39:43','2019-04-17 13:39:43');
INSERT INTO sales (clientid,productid,quantity,createdAt,updatedAt)
VALUES (2,4,2,'2019-04-17 13:39:43','2019-04-17 13:39:43');












INSERT INTO Users (id,email,password,createdAt,updatedAt)
VALUES (1,'admin@gmail.com','$2a$10$WCV/hqOxVujU1E/Spr3/F.GhqfXiCgYQ.9J.D2V04/DbgZ5AFMVOO','2019-04-17 13:39:43','2019-04-17 13:39:43');


INSERT INTO Users (id,email,password,createdAt,updatedAt)
VALUES (2,'MDaniel@gmail.com','$2a$10$E8ljXHpE2g3uy/KqWukbx.aVs7XCy9KvaHVJNSNQAOMDkd3l2oEY2','2019-04-17 13:39:43','2019-04-17 13:39:43');

 2|MDaniel@gmail.com|$2a$10$E8ljXHpE2g3uy/KqWukbx.aVs7XCy9KvaHVJNSNQAOMDkd3l2oEY2|2019-04-17 13:44:18|2019-04-17 13:44:18|