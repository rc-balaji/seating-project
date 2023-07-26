const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '#Balaji@2003',
    database: 'studentsdb',
})

app.post("/create", (req, res) => {
    const hallno=req.body.hallno
    const regno=req.body.regno
    const seatno=req.body.seatno
    const subcode = req.body.subcode;
  
    db.query(
      "INSERT INTO seatdb (hallno, regno, seatno, subcode) VALUES (?,?,?,?)",
      [hallno, regno, seatno,subcode],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
  });


  app.get("/seatdb", (req, res) => {
    db.query("SELECT * FROM seatdb", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.listen(3001, () => {
    console.log("Yey, your server is running on port 3001");
  });