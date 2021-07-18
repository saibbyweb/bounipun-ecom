import { server, port, environment, dbConnect } from "@helpers/essentials";
import mainRoutes from "@routes/admin/main";
require('../helpers/validate.js');
import customerRoutes from "@routes/customer";
const history = require('connect-history-api-fallback');

const { app } = server;
app.set('trust proxy', true);
server.enableCorsIfNeeded();

app.use('/', mainRoutes);
app.use('/', customerRoutes.endpoints);
app.use('/', customerRoutes.user);
app.use('/', customerRoutes.storeEndpoints);

// server.applyStaticMiddleware('/frontend');
app.use(history({
    disableDotRule: true,
    verbose: true
}));
server.applyStaticMiddleware('/frontend');


/* connect to mongodb */
dbConnect();

app.get('/api', (req, res) => res.send('Hi from typescript and esrun. why is it so fast'));
app.listen(port, () => console.log(`ExpressJS running on http://localhost:${port} - Environment: ${environment}`));