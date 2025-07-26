import helmet from "helmet";

export const securityMiddleware = (app) => {
  app.use(helmet());
  app.use(helmet.contentSecurityPolicy());
  app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
};
