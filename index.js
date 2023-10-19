const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
var jsonParser = bodyParser.json();

const app = express();
app.use(cors());
const port = 5000;

const deploy = require("./services/deploy");

const data = {
  prompt: "",
  application_name: "",
  application_id: "",
  api_key: "blt90c7c650e788ea77",
  management_token: "cs5eb5af231497c26b1f0a7625",
  delivery_token: "cs3d55248f6deb403e2b5b7938",
  content_type: {
    content_type: {
      title: "home",
      description: "",
      options: {
        is_page: false,
        singleton: true,
        sub_title: [],
        title: "title",
      },
      schema: [
        {
          data_type: "text",
          display_name: "Title",
          field_metadata: {
            _default: true,
          },
          mandatory: true,
          uid: "title",
          unique: true,
        },
        {
          data_type: "text",
          display_name: "URL",
          uid: "url",
          field_metadata: {
            _default: true,
          },
          multiple: false,
          unique: false,
          mandatory: true,
          non_localizable: false,
        },
      ],
      uid: "home",
    },
    prevcreate: true,
  },
  entry: {
    entry: {
      title: "home",
      url: "/home",
      tags: [],
    },
  },
  number_of_pages: 1,
  page_sequence: {
    home: [],
  },
  page_sequence_content: {},
};

app.post("/deploy", jsonParser, async (req, res) => {
  let data = req.body;
  let response = deploy(data, __dirname);
  console.log("response data", response);
  return res.json(response);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
