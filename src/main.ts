import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { LoggingInterceptor } from './common/interceptors/logging,interceptor';
import { SeedService } from './DB/seeder/seeder.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');

  const config = new DocumentBuilder()
    .setTitle('super-fitness-api')
    .setDescription('API documentation for Super Fitness system')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      // السطر ده مهم جداً
      transformOptions: {
        enableImplicitConversion: true, // بيخلي التحويل للأنواع (number, boolean) يتم تلقائياً
      },
    }),
  );
  app.useGlobalInterceptors(new LoggingInterceptor());

<<<<<<< HEAD
  const seedService = app.get(SeedService);
  await seedService.seed();
=======
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
>>>>>>> 58d58dff1ba0a348db242511d6a3cdfe89b15186

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
