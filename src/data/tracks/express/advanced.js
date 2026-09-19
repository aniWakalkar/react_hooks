import { flow, st } from "../visualHelpers";

export const advanced = {
  projectStructure: {
    visual: flow([
      st("🛣️", ["Route", "Route"], ["Matches the URL and method, then calls the controller.", "URL और method match करके controller को call करता है।"]),
      st("🎛️", ["Controller", "Controller"], ["Reads req, calls the service, and sends the response.", "req पढ़ता है, service को call करता है, और response भेजता है।"]),
      st("⚙️", ["Service", "Service"], ["Business logic. Doesn't know about req and res.", "Business logic। req और res के बारे में कुछ नहीं जानती।"]),
      st("🗃️", ["Model", "Model"], ["Talks to the database (Mongoose model).", "Database से बात करता है (Mongoose model)।"]),
      st("📦", ["Response", "Response"], ["The result goes back up to the client as JSON.", "Result JSON के रूप में वापस client तक जाता है।"], "ok"),
    ]),
    title: { en: "How do you structure an Express project? (Routes, Controllers, Services, Models)", hi: "Express project को कैसे structure करते हैं? (Routes, Controllers, Services, Models)" },
    definition: {
      en: `
A common way is to separate the code by responsibility (a layered / MVC-like structure):

- routes: define the URLs and connect them to controllers. No logic here.
- controllers: handle req and res. Read the input, call a service, send the response.
- services: the business logic. Independent of Express, so it is easy to test and reuse.
- models: database schemas and queries (Mongoose).
- middlewares: auth, validation, error handling, logging.
- config: database connection and environment settings.
- utils: helpers.

Benefits: easy to read, test and change. When a new feature is added, you know exactly where each piece of code goes.
      `,
      hi: `
एक common तरीका है कि code को responsibility के हिसाब से अलग करें (layered / MVC-जैसा structure):

- routes: URLs define करते हैं और उन्हें controllers से जोड़ते हैं। यहां कोई logic नहीं।
- controllers: req और res संभालते हैं। Input पढ़ते हैं, service को call करते हैं, response भेजते हैं।
- services: business logic। Express से independent, इसलिए test और reuse करना आसान।
- models: database schemas और queries (Mongoose)।
- middlewares: auth, validation, error handling, logging।
- config: database connection और environment settings।
- utils: helpers।

फायदे: पढ़ना, test करना और बदलना आसान। नया feature जोड़ते समय पता होता है कि code का हर हिस्सा कहां जाएगा।
      `,
    },
    examples: [
      {
        label: "Folder structure",
        code: `
src/
├── config/
│   └── db.js
├── models/
│   └── user.model.js
├── services/
│   └── user.service.js
├── controllers/
│   └── user.controller.js
├── routes/
│   └── user.routes.js
├── middlewares/
│   ├── auth.js
│   └── errorHandler.js
├── app.js          (express setup, middleware, routes)
└── server.js       (connect DB, app.listen)
        `,
      },
      {
        label: "One feature across the layers",
        code: `
// routes/user.routes.js
router.get("/:id", userController.getUser);

// controllers/user.controller.js
exports.getUser = async (req, res) => {
  const user = await userService.findUser(req.params.id);
  res.json(user);
};

// services/user.service.js
exports.findUser = (id) => User.findById(id);
        `,
      },
    ],
  },
  jwtAuthExpress: {
    visual: flow([
      st("📝", ["Register", "Register"], ["Hash the password with bcrypt and save the user. Never store plain passwords.", "Password को bcrypt से hash करके user save करो। Plain password कभी store मत करो।"]),
      st("🔑", ["Login", "Login"], ["Find the user and compare the password with bcrypt.compare.", "User ढूंढो और bcrypt.compare से password compare करो।"]),
      st("✍️", ["Sign JWT", "JWT sign करो"], ["Create a token with jwt.sign and send it to the client.", "jwt.sign से token बनाकर client को भेजो।"]),
      st("🛡️", ["Protect middleware", "Protect middleware"], ["On protected routes, read the Bearer token and jwt.verify it.", "Protected routes पर Bearer token पढ़कर jwt.verify करो।"]),
      st("✅", ["Route runs", "Route चलता है"], ["The user is attached to req.user and the route handler runs.", "User को req.user में लगाकर route handler चलता है।"], "ok"),
    ]),
    title: { en: "How do you implement JWT authentication in Express?", hi: "Express में JWT authentication कैसे implement करते हैं?" },
    definition: {
      en: `
Steps:
1. Register: hash the password with bcrypt (never store plain passwords) and save the user.
2. Login: find the user by email, compare the password with bcrypt.compare. If it matches, create a token with jwt.sign({ id }, secret, { expiresIn }) and send it.
3. Protect routes: write an auth middleware that reads the Authorization: Bearer <token> header, verifies it with jwt.verify, loads the user, and puts it in req.user. If the token is missing or invalid, respond with 401.
4. Authorization: a second middleware can check req.user.role (for admin-only routes) and respond with 403.

Tips:
- Keep the secret in an environment variable.
- Use a short expiry and a refresh token.
- Never send the password hash back in a response.
      `,
      hi: `
Steps:
1. Register: password को bcrypt से hash करो (plain password कभी store मत करो) और user save करो।
2. Login: email से user ढूंढो, bcrypt.compare से password compare करो। Match हो तो jwt.sign({ id }, secret, { expiresIn }) से token बनाकर भेजो।
3. Routes protect करो: ऐसा auth middleware लिखो जो Authorization: Bearer <token> header पढ़े, jwt.verify से verify करे, user load करे, और req.user में डाले। Token न हो या गलत हो तो 401 दो।
4. Authorization: दूसरा middleware req.user.role check कर सकता है (admin-only routes के लिए) और 403 दे सकता है।

Tips:
- Secret को environment variable में रखो।
- छोटी expiry और refresh token use करो।
- Response में password hash कभी वापस मत भेजो।
      `,
    },
    examples: [
      {
        label: "Register and login",
        code: `
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.post("/register", async (req, res) => {
  const hash = await bcrypt.hash(req.body.password, 10);
  const user = await User.create({ email: req.body.email, password: hash });
  res.status(201).json({ id: user._id });
});

app.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  const ok = user && (await bcrypt.compare(req.body.password, user.password));
  if (!ok) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "15m" });
  res.json({ token });
});
        `,
      },
      {
        label: "Protect middleware and role check",
        code: `
const protect = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Not logged in" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
  } catch {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

const adminOnly = (req, res, next) =>
  req.user.role === "admin" ? next() : res.status(403).json({ message: "Forbidden" });

app.delete("/users/:id", protect, adminOnly, deleteUser);
        `,
      },
    ],
  },
  validation: {
    title: { en: "How do you validate request data in Express?", hi: "Express में request data को validate कैसे करते हैं?" },
    definition: {
      en: `
Never trust data sent by the client. Validate the body, params and query before using them, and reject bad input with 400 (or 422).

Options:
- Joi, Zod or Yup: schema-based validation libraries.
- express-validator: validation as middleware.
- Mongoose schema validation: last line of defence at the database level.

Good practice:
- Validate in a middleware, before the controller runs.
- Return clear error messages listing the invalid fields.
- Validate and sanitise (trim, lowercase email) to also prevent injection attacks.
- Validation on the frontend is only for user experience. The backend validation is what really protects you.
      `,
      hi: `
Client के भेजे data पर कभी भरोसा मत करो। Body, params और query को use करने से पहले validate करो, और गलत input को 400 (या 422) से reject करो।

Options:
- Joi, Zod या Yup: schema-based validation libraries।
- express-validator: middleware के रूप में validation।
- Mongoose schema validation: database level पर आखिरी सुरक्षा।

Good practice:
- Controller चलने से पहले, middleware में validate करो।
- साफ़ error messages दो जिनमें गलत fields की list हो।
- Validate और sanitise (trim, email lowercase) करो, ताकि injection attacks भी रुकें।
- Frontend validation सिर्फ user experience के लिए है। असली सुरक्षा backend validation से मिलती है।
      `,
    },
    examples: [
      {
        label: "Validation middleware with Zod",
        code: `
const { z } = require("zod");

const userSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  age: z.number().int().min(18).optional(),
});

const validate = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ errors: result.error.issues });
  }
  req.body = result.data;
  next();
};

app.post("/users", validate(userSchema), createUser);
        `,
      },
    ],
  },
  fileUpload: {
    title: { en: "How do you upload files in Express? (Multer)", hi: "Express में files कैसे upload करते हैं? (Multer)" },
    definition: {
      en: `
Files are sent with the multipart/form-data content type. express.json() cannot parse it, so we use the Multer middleware.

How it works:
- Multer reads the multipart request and saves the file (to disk, or to memory as a Buffer).
- The file information is available in req.file (single) or req.files (multiple). Other text fields are in req.body.
- upload.single("field") for one file, upload.array("field", max) for many.

Good practice:
- Limit the file size and allowed types (check the mimetype).
- Do not trust the original file name.
- In production, store files in cloud storage (like S3 or Cloudinary) and save only the URL in the database.
      `,
      hi: `
Files multipart/form-data content type से भेजी जाती हैं। express.json() इसे parse नहीं कर सकता, इसलिए Multer middleware use करते हैं।

ये कैसे काम करता है:
- Multer multipart request पढ़कर file save करता है (disk पर, या memory में Buffer के रूप में)।
- File की जानकारी req.file (single) या req.files (multiple) में मिलती है। बाकी text fields req.body में।
- एक file के लिए upload.single("field"), कई के लिए upload.array("field", max)।

Good practice:
- File size और allowed types limit करो (mimetype check करो)।
- Original file name पर भरोसा मत करो।
- Production में files को cloud storage (जैसे S3 या Cloudinary) में रखो और database में सिर्फ URL save करो।
      `,
    },
    examples: [
      {
        label: "Example",
        code: `
const multer = require("multer");

const upload = multer({
  dest: "uploads/",
  limits: { fileSize: 2 * 1024 * 1024 },   // 2 MB
  fileFilter: (req, file, cb) =>
    cb(null, file.mimetype.startsWith("image/")),
});

app.post("/avatar", upload.single("avatar"), (req, res) => {
  res.json({ file: req.file.filename, name: req.body.name });
});
        `,
      },
    ],
  },
};
