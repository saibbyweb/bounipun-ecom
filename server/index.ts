import { server, port, environment, dbConnect } from "@helpers/essentials";
import mainRoutes from "@routes/admin/main"
const { app } = server;
server.enableCorsIfNeeded();
server.applyStaticMiddleware('/frontend');
app.use('/', mainRoutes);

/* connect to mongodb */
const db = dbConnect();


app.get('/api', (req, res) => res.send('Hi from typescript and esrun. why is it so fast'));
app.listen(port, () => console.log(`ExpressJS running on http://localhost:${port} - Environment: ${environment}`));