--  1. Вибрати усіх клієнтів, чиє імя має менше ніж 6 символів.
SELECT *
FROM client
WHERE LENGTH(Firstname) < 6;
--  2. Вибрати львівські відділення банку.
SELECT *
FROM client
WHERE city = 'Lviv';
--  3. Вибрати клієнтів з вищою освітою та посортувати по прізвищу.
SELECT *
FROM client
WHERE Education = 'high'
ORDER BY LastName;
--  4. Виконати сортування у зворотньому порядку над таблицею Application і вивести 5 останніх елементів.
SELECT *
FROM application
ORDER BY idApplication desc
LIMIT 5;
-- 5. Вивести усіх клієнтів, чиє прізвище закінчується на OV чи OVA.
SELECT *
FROM client
WHERE LastName LIKE '%ov' OR LastName LIKE '%ova';
--  6. Вивести клієнтів банку, які обслуговуються київськими відділеннями.
SELECT *
FROM client
         INNER JOIN department d on client.Department_idDepartment = d.idDepartment
WHERE DepartmentCity = 'Kyiv';
--  7. Вивести імена клієнтів та їхні номера паспорту, погрупувавши їх за іменами.
SELECT FirstName, Passport
FROM client
ORDER BY FirstName;
--  8. Вивести дані про клієнтів, які мають кредит більше ніж на 5000 тисяч гривень.
SELECT *
FROM client c
         JOIN application a
              ON c.idClient = a.Client_idClient
WHERE sum > 5000 AND CreditState = 'Not returned' AND Currency = 'Gryvnia';
# 9. Порахувати кількість клієнтів усіх відділень
SELECT COUNT(*)
FROM client
         JOIN department d on client.Department_idDepartment = d.idDepartment;
# та лише львівських відділень.
SELECT COUNT(*)
FROM client
JOIN department d on client.Department_idDepartment = d.idDepartment
WHERE City = 'Lviv';
# 10. Знайти кредити, які мають найбільшу суму для кожного клієнта окремо.
SELECT MAX(Sum) FROM application
INNER JOIN client
GROUP BY Client_idClient;
# 11. Визначити кількість заявок на кредит для кожного клієнта.
SELECT COUNT(idApplication) FROM application
INNER JOIN client
GROUP BY Client_idClient;
# 12. Визначити найбільший та найменший кредити.
SELECT MAX(Sum)
FROM application;
SELECT MIN(Sum)
FROM application;
# 13. Порахувати кількість кредитів для клієнтів,які мають вищу освіту.
SELECT COUNT(*)
FROM application
JOIN client c on application.Client_idClient = c.idClient
WHERE Education = 'high';
# 14. Вивести дані про клієнта, в якого середня сума кредитів найвища.
SELECT MAX(avg_credit) FROM (
SELECT AVG(Sum) as avg_credit FROM application GROUP BY Client_idClient) as salary;
# 15. Вивести відділення, яке видало в кредити найбільше грошей
SELECT DepartmentCity, SUM(application.Sum)
FROM application, department
GROUP BY DepartmentCity
ORDER BY SUM(application.Sum) DESC
LIMIT 2;
# 16. Вивести відділення, яке видало найбільший кредит.
SELECT MAX(Sum), idDepartment, DepartmentCity FROM department
INNER JOIN application
GROUP BY idDepartment;
# 17. Усім клієнтам, які мають вищу освіту, встановити усі їхні кредити у розмірі 6000 грн.
UPDATE client
JOIN application a on client.idClient = a.Client_idClient
SET sum = 6000
    WHERE Education = 'high';
# 18. Усіх клієнтів київських відділень пересилити до Києва.
UPDATE client
INNER JOIN department d on client.Department_idDepartment = d.idDepartment
SET City = 'Kyiv'
    WHERE DepartmentCity = 'Kyiv';
# 19. Видалити усі кредити, які є повернені.
DELETE FROM application
WHERE CreditState = 'Returned';
# 20. Видалити кредити клієнтів, в яких друга літера прізвища є голосною.
DELETE a.* FROM application a
JOIN client ON a.Client_idClient = client.idClient
WHERE LastName LIKE '_a%' OR LastName LIKE '_e%' OR LastName LIKE '_i%'
OR LastName LIKE '_o%' OR LastName LIKE '_u%' OR LastName LIKE '_y%';


# Знайти львівські відділення, які видали кредитів на загальну суму більше ніж 5000
SELECT SUM(Sum) FROM application
JOIN department
WHERE DepartmentCity = 'Lviv' AND Sum > 5000;
#TODO
# Знайти клієнтів, які повністю погасили кредити на суму більше ніж 5000
# Знайти максимальний неповернений кредит.
# Знайти клієнта, сума кредиту якого найменша
# Знайти кредити, сума яких більша за середнє значення усіх кредитів
# Знайти клієнтів, які є з того самого міста, що і клієнт, який взяв найбільшу кількість кредитів*/
# Місто чувака який набрав найбільше кредитів


