// backend/src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule }    from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração básica do Swagger
  const config = new DocumentBuilder()
    .setTitle('SiteTech API')
    .setDescription('API de projetos do SiteTech')
    .setVersion('1.0')
    .addTag('projects')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(process.env.PORT || 3001);
}
bootstrap();
