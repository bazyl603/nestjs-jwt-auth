import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  app.use(helmet());

  const configService = app.get(ConfigService);

  const ev = configService.get('NODE_ENV');

  if (ev === 'development') {
    const config = new DocumentBuilder()
      .setTitle('App Endpoints')
      .setDescription('posible endpoints app')
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('swagger', app, document);
  }

  const PORT = configService.get('PORT');
  await app.listen(PORT);
}
bootstrap();
