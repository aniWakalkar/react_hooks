import { flow, st } from "../visualHelpers";

export const mongoose = {
  whatIsMongoose: {
    title: { en: "What is Mongoose and why use it with MongoDB?", hi: "Mongoose क्या है और MongoDB के साथ इसे क्यों use करते हैं?" },
    definition: {
      en: `
Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js. It sits between your Node.js code and MongoDB.

MongoDB itself is schema-less. Mongoose adds structure:
- Schemas: define the shape of the documents (fields and types).
- Models: give you ready-made methods for CRUD (find, create, update, delete).
- Validation: built-in and custom rules, checked before saving.
- Middleware (hooks): run code before/after save, remove, etc.
- Population: fetch referenced documents (like a join).
- Virtuals, query helpers, plugins and timestamps.

The MongoDB Node.js driver is the low-level alternative. Mongoose is more convenient and structured.
      `,
      hi: `
Mongoose MongoDB और Node.js के लिए एक ODM (Object Data Modeling) library है। ये आपके Node.js code और MongoDB के बीच बैठती है।

MongoDB खुद schema-less है। Mongoose structure जोड़ता है:
- Schemas: documents का shape (fields और types) तय करते हैं।
- Models: CRUD (find, create, update, delete) के तैयार methods देते हैं।
- Validation: built-in और custom rules, save करने से पहले check होते हैं।
- Middleware (hooks): save, remove आदि से पहले/बाद code चलाते हैं।
- Population: referenced documents ले आता है (join जैसा)।
- Virtuals, query helpers, plugins और timestamps।

MongoDB का Node.js driver low-level विकल्प है। Mongoose ज़्यादा convenient और structured है।
      `,
    },
    examples: [
      {
        label: "Connect to MongoDB",
        code: `
const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}
        `,
      },
    ],
  },
  schemaModel: {
    title: { en: "What are Schema, Model and Document in Mongoose?", hi: "Mongoose में Schema, Model और Document क्या हैं?" },
    definition: {
      en: `
Schema: the blueprint. It defines the fields, their types, defaults and validation rules for a collection.

Model: created from a schema with mongoose.model("User", userSchema). It is a class that represents the collection and gives you the methods to work with it (User.find, User.create, ...). Mongoose uses the model name to pick the collection name (User → users).

Document: one instance of a model. It is one record, and has methods like save() and remove.

Schema → Model → Document
Blueprint → Class → Object
      `,
      hi: `
Schema: blueprint। ये किसी collection के fields, उनके types, defaults और validation rules तय करता है।

Model: schema से mongoose.model("User", userSchema) से बनता है। ये एक class है जो collection को represent करती है और उससे काम करने के methods देती है (User.find, User.create, ...)। Mongoose model के नाम से collection का नाम चुनता है (User → users)।

Document: model का एक instance। ये एक record है, और इसके पास save() और remove जैसे methods होते हैं।

Schema → Model → Document
Blueprint → Class → Object
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    age: { type: Number, min: 0, default: 18 },
    role: { type: String, enum: ["user", "admin"], default: "user" },
  },
  { timestamps: true }            // adds createdAt and updatedAt
);

const User = mongoose.model("User", userSchema);   // model

const user = new User({ name: "Aniket", email: "a@x.com" });   // document
await user.save();
        `,
      },
    ],
  },
  mongooseValidation: {
    title: { en: "How does validation work in Mongoose?", hi: "Mongoose में validation कैसे काम करता है?" },
    definition: {
      en: `
Validation rules are defined in the schema and run automatically before a document is saved (on save() and create()).

Built-in validators:
- required, default
- String: minlength, maxlength, enum, match (regex), trim, lowercase
- Number: min, max
- Custom: validate: { validator: fn, message }

Important points:
- unique is not a validator. It creates a unique index in MongoDB, and a duplicate gives an E11000 error.
- Validation does NOT run on update queries (findByIdAndUpdate, updateOne) by default. Pass { runValidators: true }.
- Handle ValidationError and return 400 to the client.
      `,
      hi: `
Validation rules schema में define होते हैं और document save होने से पहले अपने आप चलते हैं (save() और create() पर)।

Built-in validators:
- required, default
- String: minlength, maxlength, enum, match (regex), trim, lowercase
- Number: min, max
- Custom: validate: { validator: fn, message }

ज़रूरी बातें:
- unique validator नहीं है। ये MongoDB में unique index बनाता है, और duplicate पर E11000 error आता है।
- Update queries (findByIdAndUpdate, updateOne) पर validation default में नहीं चलता। { runValidators: true } पास करो।
- ValidationError को handle करके client को 400 भेजो।
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
const schema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    match: [/^\\S+@\\S+\\.\\S+$/, "Invalid email"],
  },
  age: { type: Number, min: [18, "Must be 18 or older"] },
});

// validators on updates
await User.findByIdAndUpdate(id, { age: 15 }, { new: true, runValidators: true });
        `,
      },
    ],
  },
  populate: {
    visual: flow([
      st("📄", ["Order document", "Order document"], ["It stores only the user's _id in the field user (a reference).", "ये user field में सिर्फ user का _id store करता है (reference)।"]),
      st("🔗", ["ref: User", "ref: User"], ["The schema says: this ObjectId points to the User model.", "Schema बताता है: ये ObjectId User model की तरफ point करता है।"]),
      st("🔎", [".populate('user')", ".populate('user')"], ["Mongoose runs a second query to fetch the referenced user.", "Mongoose दूसरी query चलाकर referenced user ले आता है।"]),
      st("✅", ["Full user inside", "पूरा user अंदर"], ["The _id is replaced with the real user document.", "_id की जगह असली user document आ जाता है।"], "ok"),
    ]),
    title: { en: "What is populate() in Mongoose?", hi: "Mongoose में populate() क्या है?" },
    definition: {
      en: `
populate() replaces a stored reference (an ObjectId) with the actual document from another collection. It works like a JOIN.

Steps:
1. In the schema, mark the field with type: mongoose.Schema.Types.ObjectId and ref: "ModelName".
2. Save the _id of the related document.
3. Call .populate("field") on the query. Mongoose runs an extra query and swaps the id for the document.

Tips:
- Select only the fields you need: .populate("user", "name email").
- populate runs extra queries, so it can be slow on big data. For heavy joins use $lookup in an aggregation.
- Prefer referencing for one-to-many data that grows without limit.
      `,
      hi: `
populate() stored reference (ObjectId) की जगह दूसरी collection का असली document रख देता है। ये JOIN की तरह काम करता है।

Steps:
1. Schema में field को type: mongoose.Schema.Types.ObjectId और ref: "ModelName" के साथ mark करो।
2. Related document का _id save करो।
3. Query पर .populate("field") call करो। Mongoose extra query चलाकर id की जगह document रख देता है।

Tips:
- सिर्फ ज़रूरी fields चुनो: .populate("user", "name email")।
- populate extra queries चलाता है, इसलिए बड़े data पर धीमा हो सकता है। भारी joins के लिए aggregation में $lookup use करो।
- बिना limit बढ़ने वाले one-to-many data के लिए referencing चुनो।
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  amount: Number,
});
const Order = mongoose.model("Order", orderSchema);

const order = await Order.findById(id).populate("user", "name email");
console.log(order.user.name);   // "Aniket" (the full user, not just an id)
        `,
      },
    ],
  },
  mongooseCrud: {
    title: { en: "How do you do CRUD with Mongoose?", hi: "Mongoose से CRUD कैसे करते हैं?" },
    definition: {
      en: `
Create: Model.create(data) or new Model(data).save()
Read: Model.find(filter), Model.findOne(filter), Model.findById(id)
Update: Model.findByIdAndUpdate(id, data, { new: true, runValidators: true }), Model.updateOne(filter, update)
Delete: Model.findByIdAndDelete(id), Model.deleteOne(filter)

Useful query methods (chainable): .select(), .sort(), .limit(), .skip(), .populate(), .lean()

Important points:
- All of these return Promises. Use async/await.
- findByIdAndUpdate returns the OLD document unless you pass { new: true }.
- .lean() returns plain JavaScript objects instead of full Mongoose documents. It is faster for read-only data.
- findById with an invalid id format throws a CastError. Handle it.
      `,
      hi: `
Create: Model.create(data) या new Model(data).save()
Read: Model.find(filter), Model.findOne(filter), Model.findById(id)
Update: Model.findByIdAndUpdate(id, data, { new: true, runValidators: true }), Model.updateOne(filter, update)
Delete: Model.findByIdAndDelete(id), Model.deleteOne(filter)

काम के query methods (chain हो सकते हैं): .select(), .sort(), .limit(), .skip(), .populate(), .lean()

ज़रूरी बातें:
- ये सब Promises return करते हैं। async/await use करो।
- findByIdAndUpdate पुराना document return करता है जब तक आप { new: true } न दो।
- .lean() पूरे Mongoose documents की जगह plain JavaScript objects देता है। Read-only data के लिए तेज़ है।
- गलत format की id से findById करने पर CastError आता है। उसे handle करो।
      `,
    },
    examples: [
      {
        label: "CRUD routes with Mongoose",
        code: `
// Create
app.post("/users", async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
});

// Read (with pagination)
app.get("/users", async (req, res) => {
  const page = Number(req.query.page) || 1;
  const users = await User.find().sort({ createdAt: -1 }).skip((page - 1) * 10).limit(10).lean();
  res.json(users);
});

// Update
app.patch("/users/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!user) return res.status(404).json({ message: "Not found" });
  res.json(user);
});

// Delete
app.delete("/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(204).end();
});
        `,
      },
    ],
  },
  mongooseHooks: {
    title: { en: "What are Mongoose middleware (hooks), virtuals and timestamps?", hi: "Mongoose middleware (hooks), virtuals और timestamps क्या हैं?" },
    definition: {
      en: `
Middleware (hooks): functions that run before (pre) or after (post) an operation such as save, remove or find. A common use is hashing a password before saving.
- Use a normal function, not an arrow function, because you need this (the document).
- Check isModified("password") so you only re-hash when it changed.

Virtuals: fields that are computed and are not stored in the database. Example: fullName from firstName and lastName.

Timestamps: the option { timestamps: true } adds createdAt and updatedAt automatically.

Instance methods and statics: add your own methods to a document (schema.methods) or to the model (schema.statics), for example user.comparePassword().
      `,
      hi: `
Middleware (hooks): ऐसे functions जो save, remove या find जैसे operation से पहले (pre) या बाद (post) चलते हैं। Common use है save से पहले password hash करना।
- Normal function use करो, arrow function नहीं, क्योंकि this (document) चाहिए।
- isModified("password") check करो ताकि सिर्फ बदलने पर ही दोबारा hash हो।

Virtuals: ऐसे fields जो calculate होते हैं और database में store नहीं होते। Example: firstName और lastName से fullName।

Timestamps: { timestamps: true } option createdAt और updatedAt अपने आप जोड़ देता है।

Instance methods और statics: document (schema.methods) या model (schema.statics) में अपने methods जोड़ो, जैसे user.comparePassword()।
      `,
    },
    examples: [
      {
        label: "Hash password before save, virtual and instance method",
        code: `
const bcrypt = require("bcrypt");

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.virtual("fullName").get(function () {
  return this.firstName + " " + this.lastName;
});

userSchema.methods.comparePassword = function (plain) {
  return bcrypt.compare(plain, this.password);
};
        `,
      },
    ],
  },
};
