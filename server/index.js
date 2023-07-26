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
app.post("/store", (req, res) => {
  const hallno=req.body.hallno
  const regno=req.body.regno
  const seatno=req.body.seatno
  const subcode = req.body.subcode;
  const datesession=req.body.datesession;

  db.query(
    "INSERT INTO seatdb (hallno, regno, seatno, subcode, datesession) VALUES (?,?,?,?,?)",
    [hallno, regno, seatno,subcode, datesession],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});
    app.post("/create", (req, res) => {
        const dep = req.body.dep;
        const depcode = req.body.depcode;
        const strenth = req.body.strenth;
        const startreg = req.body.startreg;
        const subcode = req.body.subcode;
        
      
        db.query(
          "INSERT INTO teacher (depcode, dep, strenth, startreg, subcode) VALUES (?,?,?,?,?)",
          [depcode, dep, strenth, startreg, subcode],
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              res.send("Values Inserted");
            }
          }
        );
      });
      app.get("/teacher", (req, res) => {
        db.query("SELECT * FROM teacher", (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        });
      });

      app.delete("/delete/:depcode", (req, res) => {
        const depcode = req.params.depcode;
        db.query("DELETE FROM teacher WHERE depcode = ?", depcode, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        });
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
 