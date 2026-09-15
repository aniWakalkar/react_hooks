export const pythonFrameworks = {
  whatIsFramework: {
    title: { en: "What is a framework?", hi: "फ्रेमवर्क क्या है?" },
    definition: {
      en: `
In simple words: a framework is a ready house. You fill the rooms. A library is a toolbox you call when you want.

In a web framework you get: URL routing, request/response, often HTML or JSON, sometimes a database layer.

Why: you do not rebuild login, routing, and security from zero every time.
      `,
      hi: `
सरल भाषा: फ्रेमवर्क तैयार घर है। तुम कमरे भरते हो। लाइब्रेरी टूलबॉक्स है जिसे जब चाहो बुलाओ।

वेब फ्रेमवर्क में मिलता है: URL रूटिंग, रिक्वेस्ट/रेस्पॉन्स, अक्सर HTML या JSON, कभी डेटाबेस परत।

क्यों: हर बार लॉगिन, रूटिंग, सुरक्षा शून्य से मत बनाओ।
      `,
    },
    words: [
      { term: "Framework", en: "It calls your code (inversion of control).", hi: "यह तुम्हारा कोड चलाता है (कंट्रोल उल्टा)।" },
      { term: "Library", en: "You call it from your code.", hi: "तुम अपने कोड से इसे चलाते हो।" },
      { term: "Routing", en: "Map a URL like /users to a function.", hi: "URL जैसे /users को फंक्शन से जोड़ना।" },
    ],
    examples: [
      {
        label: "✅ Library vs framework idea",
        code: `
# library: you call it
result = sorted([3, 1, 2])

# framework: it calls your function when a URL hits
# @app.get("/hello")  → framework runs hello()
        `,
      },
    ],
  },

  django: {
    title: { en: "Django – full web framework", hi: "जैंगो – पूरा वेब फ्रेमवर्क" },
    definition: {
      en: `
In simple words: Django is a “batteries included” web framework. One project can have admin panel, ORM (talk to SQL), auth, forms, and templates.

How it works (MVT):
1. URL → a view function (or class)
2. View uses models (database tables as Python classes)
3. View returns HTML from a template, or JSON

Why: big sites, CMS, dashboards, when you want structure and speed of development.

Heavier than Flask. Follows Django’s way of doing things (opinionated).
      `,
      hi: `
सरल भाषा: जैंगो “बैटरी शामिल” वेब फ्रेमवर्क है। एक प्रोजेक्ट में एडमिन, ORM (SQL से बात), ऑथ, फॉर्म, टेम्पलेट।

कैसे (MVT):
1. URL → व्यू फंक्शन (या क्लास)
2. व्यू मॉडल इस्तेमाल करे (टेबल = पायथन क्लास)
3. व्यू टेम्पलेट से HTML या JSON लौटाए

क्यों: बड़ी साइट, CMS, डैशबोर्ड, जब ढाँचा और तेज़ डेवलपमेंट चाहिए।

फ्लास्क से भारी। जैंगो का अपना तरीका (opinionated)।
      `,
    },
    words: [
      { term: "ORM", en: "Object-Relational Mapper: write Python, it talks SQL.", hi: "ऑब्जेक्ट-रिलेशनल मैपर: पायथन लिखो, यह SQL बोले।" },
      { term: "MVT", en: "Model, View, Template — Django’s split of work.", hi: "मॉडल, व्यू, टेम्पलेट — जैंगो का काम बाँटना।" },
      { term: "Admin", en: "Auto UI to edit database rows.", hi: "डेटाबेस पंक्तियाँ एडिट करने का ऑटो UI।" },
      { term: "Opinionated", en: "The tool prefers one style. Less debate, less freedom.", hi: "औज़ार एक स्टाइल पसंद करता है। कम बहस, कम आज़ादी।" },
    ],
    examples: [
      {
        label: "✅ Idea",
        code: `
# urls.py maps path to view
# models.py: class Book(models.Model): title = ...
# views.py reads Book.objects.all() and renders template
        `,
      },
    ],
  },

  flask: {
    title: { en: "Flask – micro framework", hi: "फ्लास्क – माइक्रो फ्रेमवर्क" },
    definition: {
      en: `
In simple words: Flask is small. You add only what you need (login, database) as extensions.

How it works: a Python file with @app.route("/hello") functions. A request comes in, that function runs, it returns text/HTML/JSON.

Why: APIs, small apps, learning HTTP, when Django feels too big.

You must choose extra libraries yourself. That is freedom and extra work.
      `,
      hi: `
सरल भाषा: फ्लास्क छोटा है। जो चाहिए वही जोड़ो (लॉगिन, डेटाबेस) एक्सटेंशन से।

कैसे: पायथन फाइल में @app.route("/hello") फंक्शन। रिक्वेस्ट आए, फंक्शन चले, टेक्स्ट/HTML/JSON लौटे।

क्यों: API, छोटे ऐप, HTTP सीखना, जब जैंगो बड़ा लगे।

अतिरिक्त लाइब्रेरी खुद चुनो। यह आज़ादी भी है, काम भी।
      `,
    },
    words: [
      { term: "Micro", en: "Core is tiny. Features come as plugins.", hi: "कोर बहुत छोटा। फीचर प्लगइन से।" },
      { term: "WSGI", en: "The old Python web server interface Flask uses.", hi: "पुराना पायथन वेब सर्वर इंटरफेस जिसे फ्लास्क चलाता है।" },
      { term: "Extension", en: "Add-on package, like Flask-SQLAlchemy.", hi: "ऐड-ऑन पैकेज, जैसे Flask-SQLAlchemy।" },
    ],
    examples: [
      {
        label: "✅ Mini app",
        code: `
from flask import Flask
app = Flask(__name__)

@app.route("/")
def home():
    return {"ok": True}
        `,
      },
    ],
  },

  fastapi: {
    title: { en: "FastAPI – modern APIs", hi: "फास्टएपीआई – आधुनिक API" },
    definition: {
      en: `
In simple words: FastAPI is built for JSON APIs. It is fast to run (async) and fast to write (type hints).

How it works:
- You type function arguments (int, models)
- Pydantic checks the data
- OpenAPI docs appear automatically at /docs

Why: microservices, ML model serving, when you want validation + docs for free.

Uses ASGI (async). Great with uvicorn.
      `,
      hi: `
सरल भाषा: फास्टएपीआई JSON API के लिए बना है। चलना तेज़ (async), लिखना तेज़ (टाइप हिंट)।

कैसे:
- फंक्शन आर्ग्युमेंट टाइप करो (int, मॉडल)
- Pydantic डेटा जाँचे
- /docs पर OpenAPI डॉक्स अपने आप

क्यों: माइक्रोसर्विस, ML मॉडल सर्व करना, जब वैलिडेशन + डॉक्स मुफ्त चाहिए।

ASGI (async)। uvicorn के साथ अच्छा।
      `,
    },
    words: [
      { term: "Async", en: "Wait on network without blocking the whole server.", hi: "पूरा सर्वर रोके बिना नेटवर्क का इंतज़ार।" },
      { term: "Pydantic", en: "Library that checks data shapes with Python types.", hi: "पायथन टाइप से डेटा आकार जाँचने वाली लाइब्रेरी।" },
      { term: "OpenAPI / Swagger", en: "Standard docs page for your API.", hi: "API का स्टैंडर्ड डॉक्स पेज।" },
      { term: "ASGI", en: "Async server interface (newer than WSGI).", hi: "असिंक सर्वर इंटरफेस (WSGI से नया)।" },
    ],
    examples: [
      {
        label: "✅ Mini API",
        code: `
from fastapi import FastAPI
app = FastAPI()

@app.get("/items/{item_id}")
def read_item(item_id: int):
    return {"id": item_id}
        `,
      },
    ],
  },

  pydantic: {
    title: { en: "Pydantic – FastAPI validation", hi: "पिडैंटिक – फास्टएपीआई वैलिडेशन" },
    definition: {
      en: `
In simple words: the validation module FastAPI uses is Pydantic (package name: pydantic).

You describe data with a class (BaseModel) and Python types: str, int, list[str], Optional[email].

What it does:
1. Parsing — JSON/text becomes Python types. "21" can become int 21 if you ask for int.
2. Data type validation — if age should be int and the client sends "hello", Pydantic rejects it.
3. Extra rules — min length, email format, default values.
4. FastAPI uses this on query params, path params, and JSON body. Bad data → HTTP 422, not a crash in your code.

Why: you do not write 20 if-not-int checks. The model is the contract.

Pydantic v2 is the current style (model_validate, Field). FastAPI depends on it.
      `,
      hi: `
सरल भाषा: फास्टएपीआई जो वैलिडेशन मॉड्यूल इस्तेमाल करता है उसका नाम पिडैंटिक है (पैकेज: pydantic)।

डेटा को क्लास (BaseModel) और पायथन टाइप से बताते हो: str, int, list[str], Optional[email]।

यह क्या करता है:
1. पार्सिंग — JSON/टेक्स्ट पायथन टाइप बनता है। int माँगो तो "21" संख्या 21 बन सकता है।
2. डेटा टाइप वैलिडेशन — age int होना चाहिए और क्लाइंट "hello" भेजे तो पिडैंटिक मना कर देता है।
3. अतिरिक्त नियम — न्यूनतम लंबाई, ईमेल फ़ॉर्मेट, डिफ़ॉल्ट value।
4. फास्टएपीआई इसे query, path, JSON बॉडी पर लगाता है। गलत डेटा → HTTP 422, तुम्हारे कोड में क्रैश नहीं।

क्यों: 20 बार if-not-int मत लिखो। मॉडल ही कॉन्ट्रैक्ट है।

पिडैंटिक v2 आज का स्टाइल (model_validate, Field)। फास्टएपीआई इसी पर टिका है।
      `,
    },
    words: [
      { term: "Pydantic", en: "Python library for parsing and validating data using types.", hi: "टाइप से डेटा पार्स और जाँचने वाली पायथन लाइब्रेरी।" },
      { term: "BaseModel", en: "The class you subclass to define a data shape.", hi: "डेटा आकार बताने के लिए जिस क्लास से inherit करते हो।" },
      { term: "Parsing", en: "Turn incoming text/JSON into the right Python type.", hi: "आते टेक्स्ट/JSON को सही पायथन टाइप बनाना।" },
      { term: "Validation", en: "Reject data that does not match the type or rules.", hi: "जो टाइप या नियम से न मिले, उसे अस्वीकार।" },
      { term: "Field", en: "Extra settings on one attribute: default, min_length, description.", hi: "एक फ़ील्ड की अतिरिक्त सेटिंग: डिफ़ॉल्ट, min_length, विवरण।" },
      { term: "HTTP 422", en: "Unprocessable entity — FastAPI’s usual response for bad input.", hi: "अवैध इनपुट पर फास्टएपीआई का आम जवाब।" },
    ],
    examples: [
      {
        label: "✅ Pydantic + FastAPI body",
        code: `
from pydantic import BaseModel, Field, EmailStr
from fastapi import FastAPI

class UserIn(BaseModel):
    name: str = Field(min_length=1)
    age: int = Field(ge=0)
    email: EmailStr

app = FastAPI()

@app.post("/users")
def create_user(user: UserIn):
    # FastAPI parsed JSON → UserIn
    # If age is "hello", client gets 422
    return {"ok": True, "name": user.name}
        `,
      },
    ],
  },

  streamlit: {
    title: { en: "Streamlit – data web apps", hi: "स्ट्रीमलिट – डेटा वेब ऐप" },
    definition: {
      en: `
In simple words: Streamlit turns a Python script into a small website with sliders and charts. Little HTML needed.

How it works: it re-runs the script from top to bottom when the user clicks. Widgets are function calls.

Why: demos, dashboards for data science, internal tools. Not a full replacement for Django shops or public complex apps.
      `,
      hi: `
सरल भाषा: स्ट्रीमलिट पायथन स्क्रिप्ट को छोटी वेबसाइट बना देता है, स्लाइडर और चार्ट के साथ। HTML कम।

कैसे: यूज़र क्लिक करे तो स्क्रिप्ट ऊपर से नीचे फिर चलती है। विजेट फंक्शन कॉल हैं।

क्यों: डेमो, डेटा साइंस डैशबोर्ड, अंदरूनी टूल। जैंगो शॉप या जटिल पब्लिक ऐप की पूरी जगह नहीं।
      `,
    },
    words: [
      { term: "Widget", en: "A slider, button, or input on the page.", hi: "पेज पर स्लाइडर, बटन या इनपुट।" },
      { term: "Rerun", en: "Execute the whole file again after a click.", hi: "क्लिक के बाद पूरी फाइल फिर चलाना।" },
    ],
    examples: [
      {
        label: "✅ Streamlit sketch",
        code: `
import streamlit as st

st.title("Demo")
n = st.slider("n", 1, 10)
st.write("square", n * n)
        `,
      },
    ],
  },

  djangoVsFlaskVsFast: {
    title: { en: "Django vs Flask vs FastAPI", hi: "जैंगो बनाम फ्लास्क बनाम फास्टएपीआई" },
    definition: {
      en: `
In simple words, pick like this:

Django → full website + admin + database, one team style.
Flask → small app or you want to choose every piece.
FastAPI → JSON API, types, auto docs, async.

All three can talk to databases. All three can ship real products. The “best” one matches the job, not a ranking on the internet.
      `,
      hi: `
सरल भाषा, ऐसे चुनो:

जैंगो → पूरी वेबसाइट + एडमिन + डेटाबेस, एक टीम स्टाइल।
फ्लास्क → छोटा ऐप या हर हिस्सा खुद चुनना हो।
फास्टएपीआई → JSON API, टाइप, ऑटो डॉक्स, async।

तीनों डेटाबेस से बात कर सकते हैं। तीनों असली प्रोडक्ट बना सकते हैं। “सबसे अच्छा” काम से मिलता है, इंटरनेट रैंक से नहीं।
      `,
    },
    words: [
      { term: "JSON API", en: "Server returns data, not a full HTML page. Front-end or mobile consumes it.", hi: "सर्वर डेटा देता है, पूरा HTML पेज नहीं। फ्रंट-एंड या मोबाइल उसे खाता है।" },
    ],
    examples: [
      {
        label: "✅ Same route, three styles (idea)",
        code: `
# Django: path("hello/", views.hello)
# Flask:  @app.get("/hello")
# FastAPI:@app.get("/hello") def hello(): return {"ok": True}
        `,
      },
    ],
  },

  howRequestWorks: {
    title: { en: "How a web request works", hi: "वेब रिक्वेस्ट कैसे चलती है" },
    definition: {
      en: `
In simple words, for Django / Flask / FastAPI:

1. Browser or app sends HTTP (GET /users).
2. A server (gunicorn, uvicorn) receives it.
3. The framework finds the matching route.
4. Your function runs: read DB, check login, build a response.
5. HTTP response goes back (HTML or JSON).

Frameworks differ in extras (admin, types, async), not in this basic circle.
      `,
      hi: `
सरल भाषा, जैंगो / फ्लास्क / फास्टएपीआई के लिए:

1. ब्राउज़र या ऐप HTTP भेजे (GET /users)।
2. सर्वर (gunicorn, uvicorn) उसे ले।
3. फ्रेमवर्क मैचिंग रूट ढूँढे।
4. तुम्हारा फंक्शन चले: DB पढ़ो, लॉगिन जाँचो, जवाब बनाओ।
5. HTTP रेस्पॉन्स वापस (HTML या JSON)।

फ्रेमवर्क अतिरिक्त चीज़ों में अलग हैं (एडमिन, टाइप, async), इस घेरे में नहीं।
      `,
    },
    words: [
      { term: "HTTP", en: "The rules of web messages: GET, POST, status 200, etc.", hi: "वेब संदेशों के नियम: GET, POST, स्टेटस 200 आदि।" },
      { term: "GET / POST", en: "GET reads. POST sends new data.", hi: "GET पढ़ता है। POST नया डेटा भेजता है।" },
      { term: "Response", en: "What the server sends back.", hi: "सर्वर जो वापस भेजे।" },
    ],
    examples: [
      {
        label: "✅ GET sketch",
        code: `
# client: GET /users/1
# server route runs:
def get_user(id):
    return {"id": id, "name": "Ana"}  # JSON 200
        `,
      },
    ],
  },
};
