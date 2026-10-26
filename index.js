const express = require ('express');
const authRoutes = require('./routes/authroutes');
const app = express();

app.use(express.json());
    
app.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`SERVIDOR RODANDO http://localhost:${PORT}`);
});