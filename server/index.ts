import {
  server,
  port,
  environment,
  dbConnect,
  mongoose,
} from "@helpers/essentials";
// mongoose.set("debug", (collectionName, method, query, doc) => {
//   if(collectionName === 'collections' && method !== 'aggregate' && method !== 'findOne' && method !== 'find')
//     console.log(`${collectionName}.${method}`, JSON.stringify(query), doc);
// });
import mainRoutes from "@routes/admin/main";
require("../helpers/validate.js");
import customerRoutes from "@routes/customer";
const history = require("connect-history-api-fallback");
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express'

const { app } = server;
app.set("trust proxy", true);
server.enableCorsIfNeeded();

let httpsApp = null;

function generateBasicSwaggerDocs(app: Express) {
  // Get all registered routes
  const routes = [];
  app._router.stack.forEach((middleware) => {
    if (middleware.route) {
      // Routes registered directly
      const path = middleware.route.path;
      const methods = Object.keys(middleware.route.methods);
      routes.push({ path, methods });
    } else if (middleware.name === "router") {
      // Router middleware
      middleware.handle.stack.forEach((handler) => {
        if (handler.route) {
          const path = handler.route.path;
          const methods = Object.keys(handler.route.methods);
          routes.push({ path, methods });
        }
      });
    }
  });

  // Generate basic Swagger documentation
  const paths = {};
  routes.forEach(({ path, methods }) => {
    paths[path] = {};
    methods.forEach((method) => {
      paths[path][method] = {
        summary: `${method.toUpperCase()} ${path}`,
        responses: {
          "200": {
            description: "Successful operation",
          },
        },
      };
    });
  });

  const swaggerOptions = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Auto-generated API Documentation",
        version: "1.0.0",
        description: "Automatically generated documentation for all routes",
      },
      paths,
    },
    apis: [], // No need to scan files since we're generating docs programmatically
  };

  return swaggerJsdoc(swaggerOptions);
}

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

// Print routes to console
const swaggerSpec = generateBasicSwaggerDocs(app);
console.log("\nRegistered Routes:");
Object.keys(swaggerSpec.paths).forEach((path) => {
  const methods = Object.keys(swaggerSpec.paths[path]);
  console.log(`${path}:`);
  methods.forEach((method) => {
    console.log(`  - ${method.toUpperCase()}`);
  });
});

// Setup Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

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
