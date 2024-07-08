import app from "./app.js";

// TypeError: Cannot read properties of undefined (reading 'listen')

app.listen(3001, () => console.log("server is runing at port 3001 ..."));
