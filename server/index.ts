import { server, port, environment, dbConnect } from "@helpers/essentials";
import { imageUpload } from "@models"
import main from "@routes/admin/main"
const { app } = server;
// app.use(main);
server.enableCorsIfNeeded();
server.applyStaticMiddleware('/frontend');

/* connect to mongodb */
dbConnect();


app.get('/api', (req, res) => res.send('Hi from typescript and esrun. why is it so fast'));
app.listen(port, () => console.log(`ExpressJS running on http://localhost:${port} - Environment: ${environment}`));