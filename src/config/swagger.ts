import swaggerJSDoc from "swagger-jsdoc";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Biblioteca API",
      version: "1.0.0",
      description: "API REST sobre una biblioteca",
    },
    servers: [
      {
        url: "https://library2-v0mi.onrender.com/",
        description: "Servidor produccion"
      },
      {
        url: "http://localhost:3000",
        description: "Servidor local",
      },
    ],
  },
  apis: ["./src/**/*.ts"],
};

export const swaggerSpec = swaggerJSDoc(options);
