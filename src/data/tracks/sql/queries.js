import { flow, st } from "../visualHelpers";

export const queries = {
  joins: {
    visual: flow([
      st("🟦", ["INNER JOIN", "INNER JOIN"], ["Only the rows that match in BOTH tables.", "सिर्फ वो rows जो दोनों tables में match करती हैं।"]),
      st("⬅️", ["LEFT JOIN", "LEFT JOIN"], ["All rows from the left table, plus matches from the right (NULL if no match).", "Left table की सारी rows, और right से matches (match न हो तो NULL)।"]),
      st("➡️", ["RIGHT JOIN", "RIGHT JOIN"], ["All rows from the right table, plus matches from the left.", "Right table की सारी rows, और left से matches।"]),
      st("↔️", ["FULL JOIN", "FULL JOIN"], ["All rows from both tables. NULL where there is no match.", "दोनों tables की सारी rows। जहां match नहीं वहां NULL।"]),
      st("✖️", ["CROSS JOIN", "CROSS JOIN"], ["Every row with every row (Cartesian product).", "हर row की हर row के साथ जोड़ी (Cartesian product)।"], "danger"),
    ]),
    title: { en: "What are JOINs in SQL and what are their types?", hi: "SQL में JOINs क्या हैं और इनके types कौन-से हैं?" },
    definition: {
      en: `
A JOIN combines rows from two or more tables based on a related column (usually a foreign key matching a primary key).

Types:
- INNER JOIN: only the matching rows from both tables.
- LEFT (OUTER) JOIN: all rows from the left table, and the matching rows from the right. No match → NULL.
- RIGHT (OUTER) JOIN: all rows from the right table, and the matching rows from the left.
- FULL (OUTER) JOIN: all rows from both tables (MySQL has no FULL JOIN; use LEFT UNION RIGHT).
- CROSS JOIN: every row of one table with every row of the other (Cartesian product).
- SELF JOIN: a table joined with itself (for example employee and manager in one table).

Tip: to find rows with NO match, use LEFT JOIN ... WHERE right.id IS NULL.
      `,
      hi: `
JOIN दो या ज़्यादा tables की rows को एक related column के आधार पर जोड़ता है (आमतौर पर foreign key जो primary key से match हो)।

Types:
- INNER JOIN: सिर्फ दोनों tables की matching rows।
- LEFT (OUTER) JOIN: left table की सारी rows, और right की matching rows। Match नहीं → NULL।
- RIGHT (OUTER) JOIN: right table की सारी rows, और left की matching rows।
- FULL (OUTER) JOIN: दोनों tables की सारी rows (MySQL में FULL JOIN नहीं है; LEFT UNION RIGHT use करो)।
- CROSS JOIN: एक table की हर row दूसरी table की हर row के साथ (Cartesian product)।
- SELF JOIN: table का खुद से join (जैसे एक ही table में employee और manager)।

Tip: जिन rows का कोई match नहीं उन्हें ढूंढने के लिए LEFT JOIN ... WHERE right.id IS NULL use करो।
      `,
    },
    examples: [
      {
        label: "INNER and LEFT JOIN",
        code: `
-- users who placed orders (with the order amount)
SELECT u.name, o.amount
FROM users u
INNER JOIN orders o ON o.user_id = u.id;

-- ALL users, even those with no orders (amount is NULL for them)
SELECT u.name, o.amount
FROM users u
LEFT JOIN orders o ON o.user_id = u.id;

-- users who never ordered
SELECT u.name
FROM users u
LEFT JOIN orders o ON o.user_id = u.id
WHERE o.id IS NULL;
        `,
      },
      {
        label: "SELF JOIN (employee and manager)",
        code: `
SELECT e.name AS employee, m.name AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id;
        `,
      },
    ],
  },
  groupByHaving: {
    title: { en: "What are aggregate functions, GROUP BY and HAVING? What is the difference between WHERE and HAVING?", hi: "Aggregate functions, GROUP BY और HAVING क्या हैं? WHERE और HAVING में क्या फर्क है?" },
    definition: {
      en: `
Aggregate functions calculate one value from many rows:
COUNT(), SUM(), AVG(), MIN(), MAX()

GROUP BY groups rows that have the same value, so an aggregate function is calculated for each group.

HAVING filters the groups after grouping.

WHERE vs HAVING:
- WHERE filters individual rows BEFORE grouping. It cannot use aggregate functions.
- HAVING filters groups AFTER grouping. It can use aggregate functions.

Notes:
- Every column in SELECT that is not inside an aggregate function must be in GROUP BY.
- COUNT(*) counts all rows. COUNT(column) ignores NULLs.
- Order of execution: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT.
      `,
      hi: `
Aggregate functions कई rows से एक value calculate करते हैं:
COUNT(), SUM(), AVG(), MIN(), MAX()

GROUP BY एक जैसी value वाली rows को group करता है, ताकि हर group के लिए aggregate function calculate हो।

HAVING grouping के बाद groups को filter करता है।

WHERE vs HAVING:
- WHERE grouping से पहले अलग-अलग rows को filter करता है। इसमें aggregate functions use नहीं हो सकते।
- HAVING grouping के बाद groups को filter करता है। इसमें aggregate functions use हो सकते हैं।

Notes:
- SELECT का जो column aggregate function के अंदर नहीं है, वो GROUP BY में होना चाहिए।
- COUNT(*) सारी rows गिनता है। COUNT(column) NULLs को छोड़ देता है।
- Execution का order: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT।
      `,
    },
    examples: [
      {
        label: "Customers who spent more than 5000",
        code: `
SELECT user_id, COUNT(*) AS total_orders, SUM(amount) AS total_spent
FROM orders
WHERE status = 'paid'            -- filter rows first
GROUP BY user_id                 -- one group per user
HAVING SUM(amount) > 5000        -- filter the groups
ORDER BY total_spent DESC;
        `,
      },
    ],
  },
  subqueries: {
    title: { en: "What is a subquery? Correlated subquery, IN vs EXISTS, and subquery vs JOIN", hi: "Subquery क्या है? Correlated subquery, IN vs EXISTS, और subquery vs JOIN" },
    definition: {
      en: `
A subquery is a query written inside another query (inside WHERE, FROM or SELECT). The inner query runs first and gives its result to the outer query.

Types:
- Scalar subquery: returns one value.
- Multi-row subquery: returns a list (used with IN, ANY, ALL).
- Correlated subquery: the inner query uses a column from the outer query, so it runs once for every outer row (can be slow).
- Derived table: a subquery in FROM, used like a table.

IN vs EXISTS:
- IN compares against a list of values.
- EXISTS only checks if any row exists, and stops at the first match. It is often faster for large tables.
- NOT IN gives wrong results if the list has a NULL. Prefer NOT EXISTS.

Subquery vs JOIN: a JOIN is usually faster and easier to read when you need columns from both tables. Use a subquery when you only need to filter or compare.
      `,
      hi: `
Subquery एक query है जो दूसरी query के अंदर लिखी जाती है (WHERE, FROM या SELECT में)। Inner query पहले चलती है और अपना result outer query को देती है।

Types:
- Scalar subquery: एक value return करती है।
- Multi-row subquery: list return करती है (IN, ANY, ALL के साथ)।
- Correlated subquery: inner query outer query का column use करती है, इसलिए हर outer row के लिए एक बार चलती है (धीमी हो सकती है)।
- Derived table: FROM में subquery, जिसे table की तरह use करते हैं।

IN vs EXISTS:
- IN values की list से compare करता है।
- EXISTS सिर्फ ये check करता है कि कोई row मौजूद है या नहीं, और पहला match मिलते ही रुक जाता है। बड़ी tables में अक्सर तेज़।
- List में NULL हो तो NOT IN गलत result देता है। NOT EXISTS use करो।

Subquery vs JOIN: जब दोनों tables के columns चाहिए हों तो JOIN आमतौर पर तेज़ और पढ़ने में आसान। जब सिर्फ filter या compare करना हो तब subquery।
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
-- scalar: employees earning more than the average
SELECT name, salary FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);

-- IN: users who have placed an order
SELECT name FROM users WHERE id IN (SELECT user_id FROM orders);

-- EXISTS (correlated)
SELECT name FROM users u
WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);

-- derived table
SELECT AVG(total) FROM (
  SELECT user_id, SUM(amount) AS total FROM orders GROUP BY user_id
) t;
        `,
      },
    ],
  },
  unionSets: {
    title: { en: "What is the difference between UNION and UNION ALL? (also INTERSECT, EXCEPT)", hi: "UNION और UNION ALL में क्या फर्क है? (INTERSECT, EXCEPT भी)" },
    definition: {
      en: `
Set operators combine the results of two SELECT queries. Both queries must return the same number of columns with compatible types.

- UNION: combines the results and removes duplicates (slower, because it sorts/compares).
- UNION ALL: combines the results and keeps duplicates (faster).
- INTERSECT: only the rows that appear in both results.
- EXCEPT (MINUS in Oracle): rows in the first result that are not in the second.

Use UNION ALL when you know there are no duplicates, or you want them.
      `,
      hi: `
Set operators दो SELECT queries के results को मिलाते हैं। दोनों queries को उतने ही columns और compatible types return करने चाहिए।

- UNION: results मिलाता है और duplicates हटाता है (धीमा, क्योंकि sort/compare करता है)।
- UNION ALL: results मिलाता है और duplicates रखता है (तेज़)।
- INTERSECT: सिर्फ वो rows जो दोनों results में हैं।
- EXCEPT (Oracle में MINUS): पहले result की वो rows जो दूसरे में नहीं हैं।

जब पता हो कि duplicates नहीं हैं, या duplicates चाहिए, तो UNION ALL use करो।
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
SELECT email FROM customers
UNION
SELECT email FROM subscribers;        -- unique emails from both

SELECT email FROM customers
UNION ALL
SELECT email FROM subscribers;        -- keeps duplicates

SELECT id FROM a INTERSECT SELECT id FROM b;
SELECT id FROM a EXCEPT SELECT id FROM b;
        `,
      },
    ],
  },
  caseCte: {
    title: { en: "What is CASE and what is a CTE (WITH clause)?", hi: "CASE क्या है और CTE (WITH clause) क्या है?" },
    definition: {
      en: `
CASE is SQL's if-else. It returns a value based on conditions.
CASE WHEN condition THEN value ... ELSE value END

CTE (Common Table Expression) is a temporary named result set defined with WITH, used in the query that follows.
- Makes long queries readable, by splitting them into named steps.
- Can be referenced multiple times in the same query.
- Recursive CTEs can walk through hierarchies (org charts, categories).

It exists only for that one query. A view is a saved query that stays in the database.
      `,
      hi: `
CASE SQL का if-else है। Conditions के आधार पर value return करता है।
CASE WHEN condition THEN value ... ELSE value END

CTE (Common Table Expression) एक temporary named result set है जो WITH से define होता है और अगली query में use होता है।
- लंबी queries को named steps में बांटकर पढ़ने लायक बनाता है।
- उसी query में कई बार refer किया जा सकता है।
- Recursive CTEs hierarchies (org chart, categories) में चल सकते हैं।

ये सिर्फ उसी एक query के लिए रहता है। View एक saved query है जो database में रहती है।
      `,
    },
    examples: [
      {
        label: "CASE and CTE",
        code: `
SELECT name, salary,
  CASE
    WHEN salary >= 100000 THEN 'High'
    WHEN salary >= 50000  THEN 'Medium'
    ELSE 'Low'
  END AS band
FROM employees;

WITH dept_avg AS (
  SELECT dept_id, AVG(salary) AS avg_salary
  FROM employees
  GROUP BY dept_id
)
SELECT e.name, e.salary, d.avg_salary
FROM employees e
JOIN dept_avg d ON d.dept_id = e.dept_id
WHERE e.salary > d.avg_salary;
        `,
      },
    ],
  },
  windowFunctions: {
    title: { en: "What are window functions? (ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD)", hi: "Window functions क्या हैं? (ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD)" },
    definition: {
      en: `
A window function does a calculation across a set of rows related to the current row, WITHOUT collapsing the rows into one (unlike GROUP BY). Written with OVER (PARTITION BY ... ORDER BY ...).

- PARTITION BY: splits the rows into groups (like GROUP BY, but rows are kept).
- ORDER BY: the order inside each group.

Common functions:
- ROW_NUMBER(): a unique sequence number (1, 2, 3, 4)
- RANK(): same rank for ties, then skips numbers (1, 2, 2, 4)
- DENSE_RANK(): same rank for ties, no gaps (1, 2, 2, 3)
- LAG(col) / LEAD(col): the value from the previous / next row
- SUM() OVER: running totals
- NTILE(n): split into n buckets

Great for: top N per group, running totals, ranking, comparing with the previous row.
      `,
      hi: `
Window function current row से related rows के set पर calculation करता है, rows को एक में मिलाए बिना (GROUP BY की तरह नहीं)। OVER (PARTITION BY ... ORDER BY ...) के साथ लिखा जाता है।

- PARTITION BY: rows को groups में बांटता है (GROUP BY जैसा, लेकिन rows बनी रहती हैं)।
- ORDER BY: हर group के अंदर का order।

Common functions:
- ROW_NUMBER(): unique sequence number (1, 2, 3, 4)
- RANK(): ties को same rank, फिर numbers skip (1, 2, 2, 4)
- DENSE_RANK(): ties को same rank, कोई gap नहीं (1, 2, 2, 3)
- LAG(col) / LEAD(col): पिछली / अगली row की value
- SUM() OVER: running totals
- NTILE(n): n buckets में बांटना

इनके लिए बढ़िया: हर group में top N, running totals, ranking, पिछली row से compare करना।
      `,
    },
    examples: [
      {
        label: "Top 2 highest-paid employees in each department",
        code: `
SELECT * FROM (
  SELECT name, dept_id, salary,
         DENSE_RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) AS rnk
  FROM employees
) t
WHERE rnk <= 2;
        `,
      },
      {
        label: "Running total and previous value",
        code: `
SELECT order_date, amount,
       SUM(amount) OVER (ORDER BY order_date) AS running_total,
       LAG(amount) OVER (ORDER BY order_date) AS previous_amount
FROM orders;
        `,
      },
    ],
  },
  secondHighest: {
    title: { en: "How do you find the second (Nth) highest salary?", hi: "दूसरी (Nth) highest salary कैसे निकालते हैं?" },
    definition: {
      en: `
This is a very common interview question. There are several ways:

1. Subquery with MAX: the highest salary that is less than the overall maximum.
2. LIMIT / OFFSET: sort descending and skip the first one. Use DISTINCT to handle ties.
3. DENSE_RANK(): rank the salaries and pick rank = N. This is the best approach for Nth, and it handles ties correctly.
4. Correlated subquery: count how many distinct salaries are higher than this one.

Prefer DENSE_RANK for a general Nth answer, because it works for any N and handles duplicates.
      `,
      hi: `
ये एक बहुत common interview question है। कई तरीके हैं:

1. MAX के साथ subquery: वो सबसे बड़ी salary जो overall maximum से कम है।
2. LIMIT / OFFSET: descending sort करके पहली को skip करो। Ties के लिए DISTINCT use करो।
3. DENSE_RANK(): salaries को rank करके rank = N चुनो। Nth के लिए सबसे अच्छा तरीका, और ties सही handle करता है।
4. Correlated subquery: गिनो कि कितनी distinct salaries इससे ज़्यादा हैं।

General Nth के लिए DENSE_RANK चुनो, क्योंकि ये किसी भी N के लिए काम करता है और duplicates संभालता है।
      `,
    },
    examples: [
      {
        label: "Second highest salary (3 ways)",
        code: `
-- 1. subquery with MAX
SELECT MAX(salary) FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);

-- 2. LIMIT / OFFSET
SELECT DISTINCT salary FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET 1;

-- 3. DENSE_RANK (change 2 to N for the Nth highest)
SELECT salary FROM (
  SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk
  FROM employees
) t
WHERE rnk = 2;
        `,
      },
    ],
  },
  commonQueries: {
    title: { en: "Common SQL interview queries (duplicates, DISTINCT, NULL handling, string and date functions)", hi: "Common SQL interview queries (duplicates, DISTINCT, NULL handling, string और date functions)" },
    definition: {
      en: `
Find duplicates: GROUP BY the column and use HAVING COUNT(*) > 1.

Delete duplicates: keep one row per group (for example the smallest id) and delete the others.

NULL handling:
- NULL means unknown. NULL = NULL is not true. Use IS NULL.
- COALESCE(a, b, c): returns the first non-NULL value.
- IFNULL / ISNULL / NVL: database-specific versions.
- Aggregates like SUM and AVG ignore NULLs.

Common functions (names differ a little between databases):
- String: UPPER, LOWER, LENGTH, TRIM, SUBSTRING, CONCAT, REPLACE
- Date: NOW / CURRENT_DATE, DATE_ADD, DATEDIFF, EXTRACT
- Numeric: ROUND, CEIL, FLOOR, ABS

Change the type: CAST(value AS type).
      `,
      hi: `
Duplicates ढूंढना: column पर GROUP BY करो और HAVING COUNT(*) > 1 use करो।

Duplicates delete करना: हर group की एक row (जैसे सबसे छोटी id) रखो और बाकी delete करो।

NULL handling:
- NULL का मतलब unknown है। NULL = NULL true नहीं होता। IS NULL use करो।
- COALESCE(a, b, c): पहली non-NULL value देता है।
- IFNULL / ISNULL / NVL: database-specific versions।
- SUM और AVG जैसे aggregates NULLs को ignore करते हैं।

Common functions (नाम databases में थोड़े अलग होते हैं):
- String: UPPER, LOWER, LENGTH, TRIM, SUBSTRING, CONCAT, REPLACE
- Date: NOW / CURRENT_DATE, DATE_ADD, DATEDIFF, EXTRACT
- Numeric: ROUND, CEIL, FLOOR, ABS

Type बदलना: CAST(value AS type)।
      `,
    },
    examples: [
      {
        label: "Find and delete duplicates",
        code: `
-- find duplicate emails
SELECT email, COUNT(*) AS times
FROM users
GROUP BY email
HAVING COUNT(*) > 1;

-- delete duplicates, keeping the smallest id (MySQL style)
DELETE u1 FROM users u1
JOIN users u2 ON u1.email = u2.email AND u1.id > u2.id;

-- NULL handling
SELECT name, COALESCE(phone, 'not provided') FROM users;
        `,
      },
    ],
  },
};
