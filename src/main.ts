import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // TODO: Set the brazilian time 
  //Setting the brazilian time
  process.env.TZ ='03:00'
 
  app.useGlobalPipes( new ValidationPipe)
  app.enableCors

  //TODO: Set a different gateway
  await app.listen(4000);


}
bootstrap();
