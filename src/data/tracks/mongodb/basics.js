export const basics = {
  whatIsMongo: {
    title: { en: "What is MongoDB?", hi: "MongoDB क्या है?" },
    definition: {
      en: `
MongoDB is a NoSQL, document-oriented database. Instead of tables and rows, it stores data as flexible JSON-like documents (stored as BSON) inside collections.

Key points:
- Schema-flexible: documents in the same collection can have different fields.
- Documents can contain nested objects and arrays, so related data can live together.
- Every document has a unique _id (an ObjectId by default).
- Scales horizontally with sharding, and gets high availability with replica sets.
- Supports indexes, aggregation and (multi-document) transactions.

Good for: fast-changing data structures, content, catalogs, real-time apps.
      `,
      hi: `
MongoDB एक NoSQL, document-oriented database है। Tables और rows की जगह ये data को flexible JSON-जैसे documents (BSON में) के रूप में collections में store करता है।

मुख्य बातें:
- Schema-flexible: एक ही collection के documents में अलग-अलग fields हो सकती हैं।
- Documents में nested objects और arrays हो सकते हैं, इसलिए related data साथ रह सकता है।
- हर document का एक unique _id होता है (default में ObjectId)।
- Sharding से horizontally scale होता है, और replica sets से high availability मिलती है।
- Indexes, aggregation और (multi-document) transactions support करता है।

इनके लिए अच्छा: तेज़ी से बदलते data structures, content, catalogs, real-time apps।
      `,
    },
    examples: [
      {
        label: "A document in the users collection",
        code: `
{
  "_id": "665f1c2e9b1e8a0012a3b4c5",
  "name": "Aniket",
  "email": "aniket@example.com",
  "skills": ["React", "Node.js"],
  "address": { "city": "Pune", "pin": 411001 }
}
        `,
      },
    ],
  },
  sqlVsNosql: {
    title: { en: "What is the difference between SQL and NoSQL (MongoDB)?", hi: "SQL और NoSQL (MongoDB) में क्या फर्क है?" },
    definition: {
      en: `
Terms:
- Database → Database
- Table → Collection
- Row → Document
- Column → Field
- JOIN → $lookup or embedding

Differences:
- Schema: SQL has a fixed schema. MongoDB has a flexible schema.
- Data model: SQL is relational (normalised tables). MongoDB is document-based (related data can be embedded).
- Relationships: SQL uses JOINs and foreign keys. MongoDB embeds documents or references by _id.
- Scaling: SQL usually scales vertically. MongoDB is designed to scale horizontally (sharding).
- Query language: SQL uses SQL. MongoDB uses a JSON-like query API.
- Transactions: SQL is strong with ACID transactions. MongoDB supports them too, but relational data with many joins fits SQL better.

Choose SQL for complex relations and strict consistency (banking, accounting). Choose MongoDB for flexible, fast-changing data and easy horizontal scaling.
      `,
      hi: `
Terms:
- Database → Database
- Table → Collection
- Row → Document
- Column → Field
- JOIN → $lookup या embedding

फर्क:
- Schema: SQL में fixed schema। MongoDB में flexible schema।
- Data model: SQL relational है (normalised tables)। MongoDB document-based है (related data embed हो सकता है)।
- Relationships: SQL JOINs और foreign keys use करता है। MongoDB documents embed करता है या _id से reference देता है।
- Scaling: SQL आमतौर पर vertically scale होता है। MongoDB horizontally (sharding) scale होने के लिए बना है।
- Query language: SQL में SQL। MongoDB में JSON-जैसी query API।
- Transactions: SQL ACID transactions में मज़बूत है। MongoDB भी support करता है, लेकिन बहुत JOINs वाला relational data SQL में बेहतर बैठता है।

जटिल relations और strict consistency (banking, accounting) के लिए SQL चुनो। Flexible, तेज़ी से बदलते data और आसान horizontal scaling के लिए MongoDB।
      `,
    },
    examples: [
      {
        label: "Same query in SQL and MongoDB",
        code: `
SQL:
SELECT name, email FROM users WHERE age > 18 ORDER BY name;

MongoDB:
db.users.find({ age: { $gt: 18 } }, { name: 1, email: 1 }).sort({ name: 1 });
        `,
      },
    ],
  },
  crudOperations: {
    title: { en: "What are the CRUD operations in MongoDB?", hi: "MongoDB में CRUD operations कौन-से हैं?" },
    definition: {
      en: `
Create: insertOne, insertMany
Read: find, findOne (with filters, projection, sort, limit, skip)
Update: updateOne, updateMany, replaceOne (use update operators like $set, $inc, $push)
Delete: deleteOne, deleteMany

Useful query operators:
- Comparison: $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin
- Logical: $and, $or, $not
- Array: $push, $pull, $addToSet, $elemMatch

Important: without an update operator like $set, an update replaces the whole document. Always use $set to change specific fields.
      `,
      hi: `
Create: insertOne, insertMany
Read: find, findOne (filters, projection, sort, limit, skip के साथ)
Update: updateOne, updateMany, replaceOne ($set, $inc, $push जैसे update operators के साथ)
Delete: deleteOne, deleteMany

काम के query operators:
- Comparison: $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin
- Logical: $and, $or, $not
- Array: $push, $pull, $addToSet, $elemMatch

ज़रूरी: $set जैसे update operator के बिना update पूरे document को replace कर देता है। Specific fields बदलने के लिए हमेशा $set use करो।
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
db.users.insertOne({ name: "Aniket", age: 24 });

db.users.find({ age: { $gte: 18 } }).sort({ age: -1 }).limit(10);

db.users.updateOne({ name: "Aniket" }, { $set: { age: 25 } });
db.users.updateOne({ name: "Aniket" }, { $push: { skills: "MongoDB" } });

db.users.deleteOne({ name: "Aniket" });
        `,
      },
    ],
  },
  indexes: {
    title: { en: "What are indexes in MongoDB and why are they used?", hi: "MongoDB में indexes क्या हैं और क्यों use होते हैं?" },
    definition: {
      en: `
An index is a special data structure (a B-tree) that stores a small, sorted part of the data, so MongoDB can find documents quickly without scanning the whole collection.

Without an index, MongoDB does a collection scan (COLLSCAN): it checks every document. With an index, it does an index scan (IXSCAN).

Types:
- Single field: { email: 1 }
- Compound: { city: 1, age: -1 } (order matters)
- Unique: no duplicate values (for example, email)
- Text: for text search
- TTL: automatically deletes documents after some time

Trade-off: indexes make reads faster, but use extra storage and make writes (insert/update/delete) a little slower. So only index the fields you query, filter or sort on.

_id is always indexed automatically. Use explain() to see whether a query uses an index.
      `,
      hi: `
Index एक खास data structure (B-tree) है जो data का छोटा, sorted हिस्सा store करता है, ताकि MongoDB पूरी collection scan किए बिना documents जल्दी ढूंढ सके।

Index के बिना MongoDB collection scan (COLLSCAN) करता है: हर document check करता है। Index के साथ index scan (IXSCAN) करता है।

Types:
- Single field: { email: 1 }
- Compound: { city: 1, age: -1 } (order मायने रखता है)
- Unique: duplicate values नहीं (जैसे email)
- Text: text search के लिए
- TTL: कुछ समय बाद documents अपने आप delete करता है

Trade-off: indexes reads तेज़ करते हैं, लेकिन extra storage लेते हैं और writes (insert/update/delete) थोड़े धीमे करते हैं। इसलिए सिर्फ उन्हीं fields पर index लगाओ जिन पर query, filter या sort करते हो।

_id पर index अपने आप होता है। Query index use कर रही है या नहीं, ये explain() से देखो।
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
db.users.createIndex({ email: 1 }, { unique: true });
db.users.createIndex({ city: 1, age: -1 });

db.users.find({ email: "a@x.com" }).explain("executionStats");
// look for IXSCAN (uses index) instead of COLLSCAN
        `,
      },
    ],
  },
  aggregation: {
    title: { en: "What is the Aggregation Pipeline in MongoDB?", hi: "MongoDB में Aggregation Pipeline क्या है?" },
    definition: {
      en: `
The aggregation pipeline processes documents through a series of stages. The output of one stage is the input of the next. It is used for reports, grouping, and calculations.

Common stages:
- $match: filter documents (like WHERE). Put it early so indexes can be used.
- $group: group by a field and calculate (sum, avg, count).
- $sort: sort the results.
- $project: choose or reshape fields.
- $limit / $skip: pagination.
- $lookup: join with another collection.
- $unwind: split an array into separate documents.

Think of it as an assembly line: each stage changes the data and passes it on.
      `,
      hi: `
Aggregation pipeline documents को stages की series से गुज़ारती है। एक stage का output अगले stage का input बनता है। इसे reports, grouping और calculations के लिए use करते हैं।

Common stages:
- $match: documents filter करना (WHERE जैसा)। इसे पहले रखो ताकि indexes use हो सकें।
- $group: किसी field से group करके calculate करना (sum, avg, count)।
- $sort: results sort करना।
- $project: fields चुनना या reshape करना।
- $limit / $skip: pagination।
- $lookup: दूसरी collection से join करना।
- $unwind: array को अलग-अलग documents में तोड़ना।

इसे assembly line समझो: हर stage data बदलकर आगे भेज देता है।
      `,
    },
    examples: [
      {
        label: "Total sales per customer (top 5)",
        code: `
db.orders.aggregate([
  { $match: { status: "paid" } },
  { $group: { _id: "$customerId", total: { $sum: "$amount" }, count: { $sum: 1 } } },
  { $sort: { total: -1 } },
  { $limit: 5 },
]);
        `,
      },
    ],
  },
  embedVsReference: {
    title: { en: "Embedding vs Referencing: how do you model relationships in MongoDB?", hi: "Embedding vs Referencing: MongoDB में relationships कैसे model करते हैं?" },
    definition: {
      en: `
Embedding: store the related data inside the same document.
- Good for one-to-one and one-to-few relations (a user and their addresses).
- Data that is always read together.
- Fast: one query, no join.
- Watch out: the document size limit is 16 MB, and data can be duplicated.

Referencing: store the _id of the related document and look it up when needed.
- Good for one-to-many and many-to-many relations (a user and thousands of orders).
- Data that grows without limit, or is used in many places.
- Avoids duplication, but needs an extra query ($lookup or populate).

Rule of thumb:
Design for how the app reads the data. If you read it together, embed. If it grows large or is shared, reference.
      `,
      hi: `
Embedding: related data को उसी document के अंदर store करना।
- One-to-one और one-to-few relations के लिए अच्छा (user और उसके addresses)।
- ऐसा data जो हमेशा साथ में पढ़ा जाता है।
- तेज़: एक query, कोई join नहीं।
- ध्यान रखो: document size की limit 16 MB है, और data duplicate हो सकता है।

Referencing: related document का _id store करना और ज़रूरत पर उसे ढूंढना।
- One-to-many और many-to-many relations के लिए अच्छा (user और हज़ारों orders)।
- ऐसा data जो बिना limit बढ़ता है, या कई जगह use होता है।
- Duplication से बचाता है, लेकिन extra query ($lookup या populate) चाहिए।

Rule of thumb:
App data को कैसे पढ़ती है, उसके हिसाब से design करो। साथ में पढ़ते हो तो embed करो। बहुत बड़ा हो या shared हो तो reference दो।
      `,
    },
    examples: [
      {
        label: "Embedded vs referenced",
        code: `
// Embedded: addresses live inside the user
{ "_id": 1, "name": "Aniket", "addresses": [{ "city": "Pune" }, { "city": "Mumbai" }] }

// Referenced: orders live in their own collection
{ "_id": 1, "name": "Aniket" }                       // users
{ "_id": 501, "userId": 1, "amount": 900 }           // orders
        `,
      },
    ],
  },
};
