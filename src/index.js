const express = require('express')
const path = require('path')
const app = express();

console.log(path.join(__dirname, "../Public"))
// builtin middleware 
const staticPath = path.join(__dirname, "../Public");
app.use(express.static(staticPath));

app.get("/", (err, res) => {
    if (err) {
                throw err;
            } else {
                res.send(staticPath);
            }
    
});

// server
var PORT = 8000;
app.listen(PORT, () => {
    console.log("Server Start at " + PORT);
})