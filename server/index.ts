import { server, port, environment, dbConnect, mongoose } from "@helpers/essentials";
mongoose.set("debug", (collectionName, method, query, doc) => {
  if(collectionName === 'collections' && method !== 'aggregate' && method !== 'findOne' && method !== 'find')
    console.log(`${collectionName}.${method}`, JSON.stringify(query), doc);
});
import mainRoutes from "@routes/admin/main";
require("../helpers/validate.js");
import customerRoutes from "@routes/customer";
const history = require("connect-history-api-fallback");

const { app } = server;
app.set("trust proxy", true);
server.enableCorsIfNeeded();

let httpsApp = null;

if (process.env.NODE_ENV === "development") {
//   const key = fs.readFileSync("./key.pem");
//   const cert = fs.readFileSync("./cert.pem");
//   httpsApp = https.createServer({ key: key, cert: cert }, app);

  app.use((req, res, next) => {
    console.log("🔘 " + req.method + ": " + req.url);
    next();
  });
}

app.use("/", mainRoutes);
app.use("/", customerRoutes.endpoints);
app.use("/", customerRoutes.user);
app.use("/", customerRoutes.storeEndpoints);

server.applyStaticMiddleware("/frontend");
app.use(
  history({
    disableDotRule: true,
    verbose: true,
  })
);
server.applyStaticMiddleware("/frontend");

/* connect to mongodb */
dbConnect();

app.get("/api", (req, res) =>
  res.send("Hi from typescript and esrun. why is it so fast")
);

const running = `ExpressJS running on http://localhost:${port} - Environment: ${environment}`;

function start() {
//   if (process.env.NODE_ENV === "development") {
//       console.log('running secure')
//     httpsApp.listen(port, () => console.log(running));
//     return;
//   }

  app.listen(port, () => console.log(running));
}


start();