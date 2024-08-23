import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ConfigService } from "@nestjs/config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ["error", "warn", "debug", "verbose"],
    cors: true,
  });

  const options = new DocumentBuilder()
    .setTitle("foodcourt-assessment-server")
    .setDescription("foodcourt-assessment-server")
    .setVersion("2.0")
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("/docs", app, document);
  const port = new ConfigService().get("PORT");

  await app.listen(port);
  console.log(`Application is running on: ${port}`);
}
bootstrap();
