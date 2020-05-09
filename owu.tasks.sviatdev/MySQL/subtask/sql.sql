USE Subtask;
#---Client---
#1
SELECT * FROM Client;
#2
SELECT * FROM Client
WHERE sex = 'male';
#3
SELECT * FROM Client
WHERE sex = 'female';
#4
SELECT * FROM Client
WHERE age > 18;
#5
SELECT * FROM Client
WHERE age BETWEEN 18 AND 60;
#6
SELECT * FROM Client
WHERE age BETWEEN 18 AND 60
AND sex = 'male';
#7
SELECT * FROM Client
WHERE age < 60
AND sex = 'female';
#8
SELECT * FROM Client
WHERE id BETWEEN 3 AND 15;
#9
SELECT * FROM Client
WHERE email LIKE '%gmail.com';

#---Car---
#1
SELECT * FROM Car;
#2
SELECT * FROM Car
WHERE type = 'Business';
#3
SELECT * FROM Car
WHERE type = 'Sport';
#4
SELECT * FROM Car
WHERE year > 2010;
#5
SELECT * FROM Car
WHERE year BETWEEN 2010 AND 2020;
#6
SELECT * FROM Car
WHERE capacity < 2;
#7
SELECT * FROM Car
WHERE capacity > 2;
#8
SELECT * FROM Car
WHERE capacity BETWEEN 2 AND 3;
#9
SELECT * FROM Car
WHERE horse_power > 100;
#10
SELECT * FROM Car
WHERE horse_power BETWEEN 100 AND 200;
#11
SELECT * FROM Car
WHERE horse_power > 100 AND capacity < 2;
#12
SELECT * FROM Car
WHERE horse_power > 100 AND capacity > 2;
#13
SELECT * FROM Car
WHERE model = 'Bmw' AND capacity > 2;

