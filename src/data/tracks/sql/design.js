import { flow, st } from "../visualHelpers";

export const design = {
  relationships: {
    title: { en: "What are the types of relationships between tables? (one-to-one, one-to-many, many-to-many)", hi: "Tables के बीच relationships के types कौन-से हैं? (one-to-one, one-to-many, many-to-many)" },
    definition: {
      en: `
One-to-One: one row in table A is linked to at most one row in table B. Example: user and user_profile. Use a foreign key with a UNIQUE constraint.

One-to-Many: one row in table A can be linked to many rows in table B. The most common type. Example: one user has many orders. The foreign key goes on the "many" side (orders.user_id).

Many-to-Many: many rows in A can be linked to many rows in B. Example: students and courses. It needs a junction (join / bridge) table that holds the two foreign keys, for example enrollments(student_id, course_id).

Referential integrity: the foreign key makes sure a row can't point to a parent row that doesn't exist.
      `,
      hi: `
One-to-One: table A की एक row table B की ज़्यादा से ज़्यादा एक row से जुड़ी होती है। Example: user और user_profile। UNIQUE constraint वाली foreign key use करो।

One-to-Many: table A की एक row table B की कई rows से जुड़ सकती है। सबसे common type। Example: एक user के कई orders। Foreign key "many" side पर जाती है (orders.user_id)।

Many-to-Many: A की कई rows B की कई rows से जुड़ सकती हैं। Example: students और courses। इसके लिए junction (join / bridge) table चाहिए जिसमें दोनों foreign keys हों, जैसे enrollments(student_id, course_id)।

Referential integrity: foreign key पक्का करती है कि कोई row ऐसी parent row की तरफ point न करे जो मौजूद ही नहीं।
      `,
    },
    examples: [
      {
        label: "Many-to-many with a junction table",
        code: `
CREATE TABLE students (id INT PRIMARY KEY, name VARCHAR(50));
CREATE TABLE courses  (id INT PRIMARY KEY, title VARCHAR(50));

CREATE TABLE enrollments (
  student_id INT,
  course_id  INT,
  PRIMARY KEY (student_id, course_id),           -- composite key
  FOREIGN KEY (student_id) REFERENCES students(id),
  FOREIGN KEY (course_id)  REFERENCES courses(id)
);
        `,
      },
    ],
  },
  normalization: {
    visual: flow([
      st("📋", ["Unnormalized", "Unnormalized"], ["One big table with repeated data and lists inside cells.", "एक बड़ी table जिसमें repeated data और cells के अंदर lists हैं।"], "danger"),
      st("1️⃣", ["1NF", "1NF"], ["Every cell holds one value. No repeating groups.", "हर cell में एक ही value। कोई repeating groups नहीं।"]),
      st("2️⃣", ["2NF", "2NF"], ["1NF, plus no partial dependency on part of a composite key.", "1NF, और composite key के हिस्से पर कोई partial dependency नहीं।"]),
      st("3️⃣", ["3NF", "3NF"], ["2NF, plus no transitive dependency (non-key depends on non-key).", "2NF, और कोई transitive dependency नहीं (non-key, non-key पर depend न करे)।"], "ok"),
    ]),
    title: { en: "What is Normalization? Explain 1NF, 2NF, 3NF and BCNF. What is denormalization?", hi: "Normalization क्या है? 1NF, 2NF, 3NF और BCNF समझाओ। Denormalization क्या है?" },
    definition: {
      en: `
Normalization is organising tables to reduce data redundancy (repeated data) and avoid update, insert and delete anomalies. Big tables are split into smaller related tables.

1NF (First Normal Form)
- Every column holds a single (atomic) value. No lists or repeating groups in a cell.
- Every row is unique.

2NF (Second Normal Form)
- It is in 1NF.
- No partial dependency: every non-key column depends on the WHOLE primary key (matters when the key is composite).

3NF (Third Normal Form)
- It is in 2NF.
- No transitive dependency: a non-key column must not depend on another non-key column. Example: student_id → dept_id → dept_name. Move dept_name to a departments table.

BCNF (Boyce-Codd Normal Form)
- A stricter 3NF: for every dependency X → Y, X must be a super key.

Easy way to remember (3NF):
Every non-key column depends on "the key, the whole key, and nothing but the key".

Denormalization is deliberately adding redundancy back (duplicating data or pre-joining) to make reads faster, for example in reporting. The trade-off is more storage and the risk of inconsistent data.
      `,
      hi: `
Normalization tables को इस तरह organise करना है कि data redundancy (repeated data) कम हो और update, insert, delete anomalies न हों। बड़ी tables को छोटी related tables में बांटा जाता है।

1NF (First Normal Form)
- हर column में एक single (atomic) value। Cell में कोई list या repeating groups नहीं।
- हर row unique।

2NF (Second Normal Form)
- ये 1NF में हो।
- कोई partial dependency नहीं: हर non-key column POORI primary key पर depend करे (composite key होने पर मायने रखता है)।

3NF (Third Normal Form)
- ये 2NF में हो।
- कोई transitive dependency नहीं: non-key column किसी दूसरे non-key column पर depend न करे। Example: student_id → dept_id → dept_name। dept_name को departments table में ले जाओ।

BCNF (Boyce-Codd Normal Form)
- 3NF का सख्त रूप: हर dependency X → Y में X super key होनी चाहिए।

याद रखने का आसान तरीका (3NF):
हर non-key column "key पर, पूरी key पर, और key के अलावा किसी पर नहीं" depend करता है।

Denormalization जानबूझकर redundancy वापस जोड़ना है (data duplicate करना या pre-join), ताकि reads तेज़ हों, जैसे reporting में। Trade-off: ज़्यादा storage और inconsistent data का खतरा।
      `,
    },
    examples: [
      {
        label: "Before and after normalization",
        code: `
Before (repeats customer data in every order):
orders(order_id, customer_name, customer_city, product, price)

After (3NF):
customers(id, name, city)
products(id, name, price)
orders(id, customer_id, product_id)

Now changing a customer's city is done in ONE place.
        `,
      },
    ],
  },
  indexesSql: {
    title: { en: "What are indexes in SQL? Clustered vs non-clustered index", hi: "SQL में indexes क्या हैं? Clustered vs non-clustered index" },
    definition: {
      en: `
An index is a data structure (usually a B-tree) that lets the database find rows quickly without scanning the whole table, like an index at the back of a book.

Types:
- Clustered index: decides the physical order of the rows in the table. There can be only ONE per table. The primary key is usually the clustered index (in MySQL InnoDB it always is).
- Non-clustered (secondary) index: a separate structure that stores the indexed value plus a pointer to the row. A table can have many.
- Unique index, composite index (several columns; the column order matters), and covering index (contains all the columns a query needs, so the table isn't touched).

Trade-offs:
- Faster SELECT, JOIN, WHERE and ORDER BY.
- Slower INSERT, UPDATE and DELETE (the index must be updated), and extra storage.

Index the columns used in WHERE, JOIN and ORDER BY. Don't index every column or columns with very few distinct values. Functions on an indexed column (WHERE LOWER(email) = ...) can prevent the index from being used.
      `,
      hi: `
Index एक data structure (आमतौर पर B-tree) है जिससे database पूरी table scan किए बिना rows जल्दी ढूंढ लेता है, जैसे किताब के पीछे का index।

Types:
- Clustered index: table में rows का physical order तय करता है। एक table में सिर्फ एक हो सकता है। Primary key आमतौर पर clustered index होती है (MySQL InnoDB में हमेशा)।
- Non-clustered (secondary) index: अलग structure जिसमें indexed value और row का pointer होता है। एक table में कई हो सकते हैं।
- Unique index, composite index (कई columns; column का order मायने रखता है), और covering index (query के सारे columns रखता है, इसलिए table को छूना नहीं पड़ता)।

Trade-offs:
- SELECT, JOIN, WHERE और ORDER BY तेज़।
- INSERT, UPDATE और DELETE धीमे (index भी update करना पड़ता है), और extra storage।

जिन columns पर WHERE, JOIN और ORDER BY होता है उन पर index लगाओ। हर column पर या बहुत कम distinct values वाले columns पर index मत लगाओ। Indexed column पर function (WHERE LOWER(email) = ...) index को use होने से रोक सकता है।
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
CREATE INDEX idx_users_email ON users(email);
CREATE UNIQUE INDEX idx_users_phone ON users(phone);
CREATE INDEX idx_orders_user_date ON orders(user_id, created_at);   -- composite

-- see whether a query uses an index
EXPLAIN SELECT * FROM users WHERE email = 'a@x.com';

DROP INDEX idx_users_email ON users;
        `,
      },
    ],
  },
  transactionsAcid: {
    visual: flow([
      st("▶️", ["BEGIN", "BEGIN"], ["Start the transaction.", "Transaction शुरू करो।"]),
      st("➖", ["Debit A", "A से minus"], ["UPDATE accounts SET balance = balance - 500 WHERE id = A", "UPDATE accounts SET balance = balance - 500 WHERE id = A"]),
      st("➕", ["Credit B", "B में plus"], ["UPDATE accounts SET balance = balance + 500 WHERE id = B", "UPDATE accounts SET balance = balance + 500 WHERE id = B"]),
      st("✅", ["COMMIT", "COMMIT"], ["Both changes are saved together permanently.", "दोनों changes साथ में हमेशा के लिए save होते हैं।"], "ok"),
      st("↩️", ["ROLLBACK", "ROLLBACK"], ["If any step fails, both changes are undone. No money is lost.", "कोई step fail हो तो दोनों changes undo हो जाते हैं। पैसे नहीं खोते।"], "danger"),
    ]),
    title: { en: "What is a Transaction? Explain ACID properties and isolation levels", hi: "Transaction क्या है? ACID properties और isolation levels समझाओ" },
    definition: {
      en: `
A transaction is a group of SQL statements that run as ONE unit of work: either all of them succeed, or none of them are applied.

Commands: BEGIN (START TRANSACTION), COMMIT (save), ROLLBACK (undo), SAVEPOINT.

ACID properties:
- Atomicity: all or nothing. If one step fails, everything is rolled back.
- Consistency: the database moves from one valid state to another, and all rules (constraints) hold.
- Isolation: concurrent transactions don't interfere with each other.
- Durability: once committed, the data survives crashes and power failures.

Concurrency problems:
- Dirty read: reading data that another transaction has not committed yet.
- Non-repeatable read: reading the same row twice and getting different values.
- Phantom read: running the same query twice and getting different sets of rows.

Isolation levels (from weakest to strongest):
- READ UNCOMMITTED: allows dirty reads.
- READ COMMITTED: no dirty reads.
- REPEATABLE READ: also no non-repeatable reads (the default in MySQL).
- SERIALIZABLE: no phantom reads either. Safest but slowest.

Higher isolation = more safety but less concurrency.
      `,
      hi: `
Transaction SQL statements का एक group है जो काम की EK unit की तरह चलता है: या तो सब सफल हों, या कोई भी लागू न हो।

Commands: BEGIN (START TRANSACTION), COMMIT (save), ROLLBACK (undo), SAVEPOINT।

ACID properties:
- Atomicity: सब या कुछ नहीं। एक step fail हो तो सब rollback हो जाता है।
- Consistency: database एक valid state से दूसरी valid state में जाता है, और सारे rules (constraints) बने रहते हैं।
- Isolation: एक साथ चलने वाले transactions एक-दूसरे में दखल नहीं देते।
- Durability: commit होने के बाद data crash और power failure में भी बचा रहता है।

Concurrency problems:
- Dirty read: ऐसा data पढ़ना जो दूसरे transaction ने अभी commit नहीं किया।
- Non-repeatable read: एक ही row दो बार पढ़ने पर अलग values मिलना।
- Phantom read: एक ही query दो बार चलाने पर rows के अलग set मिलना।

Isolation levels (कमज़ोर से मज़बूत):
- READ UNCOMMITTED: dirty reads allow करता है।
- READ COMMITTED: dirty reads नहीं।
- REPEATABLE READ: non-repeatable reads भी नहीं (MySQL में default)।
- SERIALIZABLE: phantom reads भी नहीं। सबसे safe लेकिन सबसे धीमा।

ज़्यादा isolation = ज़्यादा safety लेकिन कम concurrency।
      `,
    },
    examples: [
      {
        label: "Bank transfer",
        code: `
BEGIN;

UPDATE accounts SET balance = balance - 500 WHERE id = 1;
UPDATE accounts SET balance = balance + 500 WHERE id = 2;

COMMIT;      -- both saved together
-- ROLLBACK; -- or undo both if something failed
        `,
      },
    ],
  },
  viewsProcedures: {
    title: { en: "What are Views, Stored Procedures, Functions and Triggers?", hi: "Views, Stored Procedures, Functions और Triggers क्या हैं?" },
    definition: {
      en: `
View
- A saved SELECT query that acts like a virtual table. It doesn't store data (a materialized view does).
- Uses: simplify complex queries, hide columns (security), reuse logic.

Stored Procedure
- A named block of SQL saved in the database, which you run with CALL / EXEC.
- Can take parameters, run many statements and use transactions. It doesn't have to return a value.
- Uses: reusable business logic, fewer round trips, controlled access.

Function (user-defined)
- Always returns a value, and can be used inside a SELECT.

Trigger
- Code that runs AUTOMATICALLY before or after INSERT, UPDATE or DELETE on a table.
- Uses: audit logs, enforcing rules. Use carefully, because they are hidden and can hurt performance.

Procedure vs Function: a procedure is called on its own and may return nothing. A function returns a value and can be used inside queries.
      `,
      hi: `
View
- एक saved SELECT query जो virtual table की तरह काम करती है। ये data store नहीं करती (materialized view करती है)।
- Uses: जटिल queries आसान बनाना, columns छिपाना (security), logic reuse करना।

Stored Procedure
- Database में saved SQL का named block, जिसे CALL / EXEC से चलाते हैं।
- Parameters ले सकता है, कई statements चला सकता है और transactions use कर सकता है। Value return करना ज़रूरी नहीं।
- Uses: reusable business logic, कम round trips, controlled access।

Function (user-defined)
- हमेशा value return करता है, और SELECT के अंदर use हो सकता है।

Trigger
- ऐसा code जो table पर INSERT, UPDATE या DELETE से पहले या बाद अपने आप चलता है।
- Uses: audit logs, rules लागू करना। सावधानी से use करो, क्योंकि ये छिपे रहते हैं और performance बिगाड़ सकते हैं।

Procedure vs Function: procedure अकेले call होती है और कुछ return नहीं भी कर सकती। Function value return करता है और queries के अंदर use हो सकता है।
      `,
    },
    examples: [
      {
        label: "View, procedure and trigger (MySQL style)",
        code: `
CREATE VIEW active_users AS
SELECT id, name, email FROM users WHERE status = 'active';

SELECT * FROM active_users;

DELIMITER //
CREATE PROCEDURE get_user_orders(IN uid INT)
BEGIN
  SELECT * FROM orders WHERE user_id = uid;
END //
DELIMITER ;

CALL get_user_orders(1);

CREATE TRIGGER log_delete
AFTER DELETE ON users
FOR EACH ROW
INSERT INTO audit_log (user_id, action) VALUES (OLD.id, 'deleted');
        `,
      },
    ],
  },
  sqlInjection: {
    title: { en: "What is SQL Injection and how do you prevent it?", hi: "SQL Injection क्या है और इसे कैसे रोकते हैं?" },
    definition: {
      en: `
SQL injection is an attack where a user sends malicious SQL as input, and the application puts it directly into a query string. The attacker can read, change or delete data, or bypass the login.

Example: if the query is built with string concatenation, the input ' OR '1'='1 turns the WHERE condition into something that is always true.

Prevention:
- Use parameterized queries / prepared statements. The input is sent separately from the SQL, so it is always treated as data, never as code. This is the main defence.
- Use an ORM (like Sequelize or Mongoose-style query builders), which parameterizes for you.
- Validate and sanitise the input.
- Give the database user the least privileges needed.
- Don't show raw database error messages to users.
- Never build SQL by joining strings with user input.
      `,
      hi: `
SQL injection एक attack है जिसमें user input के रूप में malicious SQL भेजता है, और application उसे सीधे query string में डाल देती है। Attacker data पढ़, बदल या delete कर सकता है, या login bypass कर सकता है।

Example: अगर query string जोड़कर बनी है, तो input ' OR '1'='1 WHERE condition को ऐसी बना देता है जो हमेशा true हो।

Prevention:
- Parameterized queries / prepared statements use करो। Input SQL से अलग भेजा जाता है, इसलिए वो हमेशा data माना जाता है, code नहीं। यही मुख्य बचाव है।
- ORM use करो (जैसे Sequelize), जो खुद parameterize कर देता है।
- Input को validate और sanitise करो।
- Database user को सिर्फ ज़रूरी minimum privileges दो।
- Users को raw database error messages मत दिखाओ।
- User input को जोड़कर SQL कभी मत बनाओ।
      `,
    },
    examples: [
      {
        label: "Vulnerable vs safe (Node.js)",
        code: `
// VULNERABLE: string concatenation
const sql = "SELECT * FROM users WHERE email = '" + email + "' AND password = '" + pass + "'";
// email = ' OR '1'='1' --   → logs in without a password

// SAFE: parameterized query
db.query("SELECT * FROM users WHERE email = ? AND password = ?", [email, pass]);
        `,
      },
    ],
  },
  optimization: {
    title: { en: "How do you optimize a slow SQL query?", hi: "Slow SQL query को optimize कैसे करते हैं?" },
    definition: {
      en: `
Steps:
1. Measure first: use EXPLAIN (or EXPLAIN ANALYZE) to see the execution plan. Look for full table scans.
2. Add the right indexes on columns used in WHERE, JOIN and ORDER BY.
3. Select only the columns you need. Avoid SELECT *.
4. Filter early with WHERE, and limit results (LIMIT, pagination).
5. Avoid functions on indexed columns in WHERE (WHERE YEAR(date) = 2025 prevents the index). Use a range instead.
6. Prefer JOINs or EXISTS over deeply nested correlated subqueries.
7. Use UNION ALL instead of UNION when duplicates don't matter.
8. Avoid the N+1 query problem (one query per row). Fetch related data with a JOIN or one IN query.
9. Avoid LIKE '%text' (a leading wildcard cannot use a normal index).
10. Cache frequent results, and archive or partition very large tables.
11. Keep statistics up to date, and normalise or denormalise as the workload needs.
      `,
      hi: `
Steps:
1. पहले measure करो: execution plan देखने के लिए EXPLAIN (या EXPLAIN ANALYZE) use करो। Full table scans ढूंढो।
2. WHERE, JOIN और ORDER BY वाले columns पर सही indexes लगाओ।
3. सिर्फ ज़रूरी columns चुनो। SELECT * से बचो।
4. WHERE से जल्दी filter करो, और results limit करो (LIMIT, pagination)।
5. WHERE में indexed columns पर functions मत लगाओ (WHERE YEAR(date) = 2025 index रोक देता है)। इसकी जगह range use करो।
6. गहरी nested correlated subqueries की जगह JOINs या EXISTS चुनो।
7. Duplicates मायने न रखें तो UNION की जगह UNION ALL।
8. N+1 query problem से बचो (हर row के लिए एक query)। Related data JOIN या एक IN query से लाओ।
9. LIKE '%text' से बचो (शुरू का wildcard normal index use नहीं कर सकता)।
10. बार-बार आने वाले results cache करो, और बहुत बड़ी tables को archive या partition करो।
11. Statistics up to date रखो, और workload के हिसाब से normalise या denormalise करो।
      `,
    },
    examples: [
      {
        label: "Before and after",
        code: `
-- Slow: function on the column, SELECT *
SELECT * FROM orders WHERE YEAR(created_at) = 2025;

-- Better: a range that can use an index, only needed columns
SELECT id, amount FROM orders
WHERE created_at >= '2025-01-01' AND created_at < '2026-01-01';

-- Check the plan
EXPLAIN SELECT id, amount FROM orders WHERE created_at >= '2025-01-01';
        `,
      },
    ],
  },
};
