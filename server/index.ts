import { server, port, environment, dbConnect } from "@helpers/essentials";
import mainRoutes from "@routes/admin/main";
const validate =  require("../helpers/validate.js");
import customerRoutes from "@routes/customer";

console.log("suhaib".isEmpty());

const { app } = server;
server.enableCorsIfNeeded();
server.applyStaticMiddleware('/frontend');
app.use('/', mainRoutes);
app.use('/', customerRoutes.endpoints);
app.use('/', customerRoutes.user);
app.use('/', customerRoutes.storeEndpoints);

/* connect to mongodb */
dbConnect();

app.get('/api', (req, res) => res.send('Hi from typescript and esrun. why is it so fast'));
app.listen(port, () => console.log(`ExpressJS running on http://localhost:${port} - Environment: ${environment}`));