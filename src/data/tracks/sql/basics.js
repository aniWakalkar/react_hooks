export const basics = {
  whatIsSql: {
    title: { en: "What is SQL and what is an RDBMS?", hi: "SQL क्या है और RDBMS क्या है?" },
    definition: {
      en: `
SQL stands for Structured Query Language. It is the standard language used to create, read, update and delete data in a relational database.

RDBMS (Relational Database Management System) is the software that stores data in tables (rows and columns) and lets tables be related to each other using keys. Examples: MySQL, PostgreSQL, Oracle, SQL Server, SQLite.

Basic terms:
- Database: a collection of tables
- Table: data in rows and columns
- Row (record / tuple): one entry
- Column (field / attribute): one property of the data
- Schema: the structure of the database

SQL is declarative: you say WHAT data you want, and the database decides HOW to get it.
      `,
      hi: `
SQL का मतलब है Structured Query Language। ये वो standard language है जिससे relational database में data बनाया, पढ़ा, update और delete किया जाता है।

RDBMS (Relational Database Management System) वो software है जो data को tables (rows और columns) में store करता है और tables को keys से आपस में जोड़ने देता है। Examples: MySQL, PostgreSQL, Oracle, SQL Server, SQLite।

Basic terms:
- Database: tables का collection
- Table: rows और columns में data
- Row (record / tuple): एक entry
- Column (field / attribute): data की एक property
- Schema: database का structure

SQL declarative है: आप बताते हो कि कौन-सा data चाहिए (WHAT), और database तय करता है कि उसे कैसे लाना है (HOW)।
      `,
    },
    examples: [
      {
        label: "A table and a simple query",
        code: `
users
+----+---------+-------------------+-----+
| id | name    | email             | age |
+----+---------+-------------------+-----+
|  1 | Aniket  | aniket@example.com|  24 |
|  2 | Rahul   | rahul@example.com |  27 |
+----+---------+-------------------+-----+

SELECT name, email FROM users WHERE age > 25;
        `,
      },
    ],
  },
  sqlCommandTypes: {
    title: { en: "What are the types of SQL commands? (DDL, DML, DQL, DCL, TCL)", hi: "SQL commands के types कौन-से हैं? (DDL, DML, DQL, DCL, TCL)" },
    definition: {
      en: `
DDL (Data Definition Language): defines the structure of the database.
CREATE, ALTER, DROP, TRUNCATE, RENAME

DML (Data Manipulation Language): changes the data inside tables.
INSERT, UPDATE, DELETE

DQL (Data Query Language): reads data.
SELECT

DCL (Data Control Language): controls access and permissions.
GRANT, REVOKE

TCL (Transaction Control Language): manages transactions.
COMMIT, ROLLBACK, SAVEPOINT

Memory trick:
DDL = structure, DML = data change, DQL = data read, DCL = permissions, TCL = transactions.
      `,
      hi: `
DDL (Data Definition Language): database का structure define करती है।
CREATE, ALTER, DROP, TRUNCATE, RENAME

DML (Data Manipulation Language): tables के अंदर का data बदलती है।
INSERT, UPDATE, DELETE

DQL (Data Query Language): data पढ़ती है।
SELECT

DCL (Data Control Language): access और permissions control करती है।
GRANT, REVOKE

TCL (Transaction Control Language): transactions manage करती है।
COMMIT, ROLLBACK, SAVEPOINT

याद रखने की trick:
DDL = structure, DML = data बदलना, DQL = data पढ़ना, DCL = permissions, TCL = transactions।
      `,
    },
    examples: [
      {
        label: "One example of each",
        code: `
CREATE TABLE users (id INT PRIMARY KEY, name VARCHAR(50));   -- DDL
INSERT INTO users VALUES (1, 'Aniket');                      -- DML
SELECT * FROM users;                                         -- DQL
GRANT SELECT ON users TO reader;                             -- DCL
COMMIT;                                                      -- TCL
        `,
      },
    ],
  },
  crud: {
    title: { en: "How do you create tables and do CRUD in SQL? (CREATE, INSERT, SELECT, UPDATE, DELETE)", hi: "SQL में tables कैसे बनाते हैं और CRUD कैसे करते हैं? (CREATE, INSERT, SELECT, UPDATE, DELETE)" },
    definition: {
      en: `
Create table: CREATE TABLE name (column type constraints, ...)
Create (insert): INSERT INTO table (columns) VALUES (values)
Read: SELECT columns FROM table WHERE condition ORDER BY column LIMIT n
Update: UPDATE table SET column = value WHERE condition
Delete: DELETE FROM table WHERE condition

Important: always use WHERE with UPDATE and DELETE. Without it, ALL rows are changed or removed.

Change the structure with ALTER TABLE:
- ADD COLUMN, DROP COLUMN, MODIFY / ALTER COLUMN, RENAME
      `,
      hi: `
Table बनाना: CREATE TABLE name (column type constraints, ...)
Create (insert): INSERT INTO table (columns) VALUES (values)
Read: SELECT columns FROM table WHERE condition ORDER BY column LIMIT n
Update: UPDATE table SET column = value WHERE condition
Delete: DELETE FROM table WHERE condition

ज़रूरी: UPDATE और DELETE के साथ हमेशा WHERE use करो। इसके बिना सारी rows बदल या हट जाती हैं।

Structure बदलने के लिए ALTER TABLE:
- ADD COLUMN, DROP COLUMN, MODIFY / ALTER COLUMN, RENAME
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(100) UNIQUE,
  age INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, email, age) VALUES ('Aniket', 'a@x.com', 24);

SELECT id, name FROM users WHERE age >= 18 ORDER BY name LIMIT 10;

UPDATE users SET age = 25 WHERE id = 1;

DELETE FROM users WHERE id = 1;

ALTER TABLE users ADD COLUMN city VARCHAR(50);
        `,
      },
    ],
  },
  deleteTruncateDrop: {
    title: { en: "What is the difference between DELETE, TRUNCATE and DROP?", hi: "DELETE, TRUNCATE और DROP में क्या फर्क है?" },
    definition: {
      en: `
DELETE (DML)
- Removes rows, and you can filter with WHERE.
- Can be rolled back (inside a transaction).
- Slower, because it logs each row. Triggers fire.

TRUNCATE (DDL)
- Removes ALL rows, no WHERE.
- Faster. Resets the auto-increment counter.
- The table structure stays. Usually cannot be rolled back (it depends on the database).

DROP (DDL)
- Removes the whole table (structure and data) from the database.
- Cannot be undone easily.

Memory trick:
DELETE = remove some or all rows. TRUNCATE = empty the table. DROP = remove the table itself.
      `,
      hi: `
DELETE (DML)
- Rows हटाता है, और WHERE से filter कर सकते हो।
- Rollback हो सकता है (transaction के अंदर)।
- धीमा, क्योंकि हर row log करता है। Triggers चलते हैं।

TRUNCATE (DDL)
- सारी rows हटाता है, WHERE नहीं।
- तेज़। Auto-increment counter reset कर देता है।
- Table का structure रहता है। आमतौर पर rollback नहीं होता (database पर depend करता है)।

DROP (DDL)
- पूरी table (structure और data) database से हटा देता है।
- आसानी से undo नहीं होता।

याद रखने की trick:
DELETE = कुछ या सारी rows हटाओ। TRUNCATE = table खाली करो। DROP = table ही हटा दो।
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
DELETE FROM users WHERE age < 18;   -- some rows
TRUNCATE TABLE users;               -- all rows, table stays
DROP TABLE users;                   -- table is gone
        `,
      },
    ],
  },
  constraintsKeys: {
    title: { en: "What are constraints and keys? (Primary, Foreign, Unique, Not Null, Check, Default)", hi: "Constraints और keys क्या हैं? (Primary, Foreign, Unique, Not Null, Check, Default)" },
    definition: {
      en: `
Constraints are rules on the columns that keep the data correct.

- PRIMARY KEY: uniquely identifies each row. Unique + NOT NULL. One per table.
- FOREIGN KEY: a column that refers to the primary key of another table. It creates the relationship and keeps referential integrity.
- UNIQUE: no duplicate values. Can allow a NULL, and a table can have many.
- NOT NULL: the value cannot be empty.
- CHECK: the value must satisfy a condition (age >= 18).
- DEFAULT: the value used when none is given.

Types of keys:
- Candidate key: any column (or set) that could uniquely identify a row.
- Primary key: the candidate key you chose.
- Composite key: a primary key made of 2 or more columns.
- Alternate key: candidate keys that were not chosen as the primary key.
- Surrogate key: an artificial key (like auto-increment id).

Foreign key actions: ON DELETE CASCADE, SET NULL, RESTRICT.
      `,
      hi: `
Constraints columns पर लगे rules हैं जो data को सही रखते हैं।

- PRIMARY KEY: हर row की unique पहचान। Unique + NOT NULL। एक table में एक।
- FOREIGN KEY: ऐसा column जो दूसरी table की primary key को refer करता है। ये relationship बनाता है और referential integrity रखता है।
- UNIQUE: duplicate values नहीं। NULL allow कर सकता है, और एक table में कई हो सकते हैं।
- NOT NULL: value खाली नहीं हो सकती।
- CHECK: value को condition पूरी करनी होगी (age >= 18)।
- DEFAULT: कोई value न दी जाए तो ये use होती है।

Keys के types:
- Candidate key: कोई भी column (या set) जो row को unique पहचान सके।
- Primary key: चुनी हुई candidate key।
- Composite key: 2 या ज़्यादा columns से बनी primary key।
- Alternate key: वो candidate keys जो primary key नहीं चुनी गईं।
- Surrogate key: कृत्रिम key (जैसे auto-increment id)।

Foreign key actions: ON DELETE CASCADE, SET NULL, RESTRICT।
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
CREATE TABLE orders (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  amount DECIMAL(10,2) CHECK (amount > 0),
  status VARCHAR(20) DEFAULT 'pending',
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
        `,
      },
    ],
  },
  whereOperators: {
    title: { en: "What are the operators and clauses used to filter data? (WHERE, AND/OR, IN, BETWEEN, LIKE, IS NULL)", hi: "Data filter करने के operators और clauses कौन-से हैं? (WHERE, AND/OR, IN, BETWEEN, LIKE, IS NULL)" },
    definition: {
      en: `
WHERE filters rows before they are returned.

Operators:
- Comparison: =, <> (or !=), >, <, >=, <=
- Logical: AND, OR, NOT
- IN (list): matches any value in a list
- BETWEEN a AND b: inclusive range
- LIKE: pattern match. % = any characters, _ = exactly one character
- IS NULL / IS NOT NULL: check for missing values. NULL cannot be compared with =.

Other clauses:
- DISTINCT: remove duplicates
- ORDER BY column ASC|DESC: sort
- LIMIT n OFFSET m: pagination (SQL Server uses TOP or OFFSET FETCH)
- Alias: column AS new_name

Order you write: SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT.
      `,
      hi: `
WHERE rows को return होने से पहले filter करता है।

Operators:
- Comparison: =, <> (या !=), >, <, >=, <=
- Logical: AND, OR, NOT
- IN (list): list की किसी भी value से match
- BETWEEN a AND b: inclusive range
- LIKE: pattern match। % = कितने भी characters, _ = बिल्कुल एक character
- IS NULL / IS NOT NULL: गायब values check करना। NULL की = से तुलना नहीं हो सकती।

दूसरे clauses:
- DISTINCT: duplicates हटाना
- ORDER BY column ASC|DESC: sort करना
- LIMIT n OFFSET m: pagination (SQL Server में TOP या OFFSET FETCH)
- Alias: column AS new_name

लिखने का order: SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT।
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
SELECT DISTINCT city FROM users;

SELECT * FROM users
WHERE age BETWEEN 18 AND 30
  AND city IN ('Pune', 'Mumbai')
  AND name LIKE 'A%'          -- starts with A
  AND email IS NOT NULL
ORDER BY age DESC
LIMIT 10 OFFSET 20;           -- page 3 (10 per page)
        `,
      },
    ],
  },
};
