import { app, applyStaticMiddleware, port, environment } from "@helpers/essentials";
import cors from "cors";
applyStaticMiddleware('/frontend');

/* allow cors if development env */
if(environment === 'development') {
    app.use(cors({
        origin: true,
        credentials: true
    }))
}



app.get('/api', (req, res)=> res.send('hi from typescript and esrun. why is it so fast'));


app.listen(port, () => console.log(`ExpressJS server started running on http://localhost:${port}`));