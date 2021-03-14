require("dotenv").config();
import express from "express";
import { one } from "@helpers/essentials"
console.log('hey from esbuilds', one);
const app = express();
const port = 4000;
const staticFileMiddleware = express.static(__dirname +"/frontend");
app.use(staticFileMiddleware)

app.get('/api', (req, res)=> res.send('hi from typescript and esrun. why is it so fast'));


app.listen(port, () => console.log(`ExpressJS server started running on http://localhost:${port}`));