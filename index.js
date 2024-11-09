const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const { getAllEmployees, getEmployeesById } = require('./controllers');

app.get('/employees', async (req, res) => {
  let employees = getAllEmployees();
  res.json({employees});
});

app.get('/employees/details/:id', async (req, res) => {
  let employee = await getEmployeesById(parseInt(req.params.id));
  res.json({employee,});
});

module.exports = { app };