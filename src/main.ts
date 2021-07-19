import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './cliente/app/app.module';
import { AdminModule} from './admin/app/admin.module'


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const admin = await NestFactory.create(AdminModule);

//  app.useGlobalPipes(
//    new ValidationPipe({
//      transform:true
//    })
//  )

app.setGlobalPrefix('api/v1');
admin.setGlobalPrefix('api/v1/full');

  // const config = new DocumentBuilder()
  //   .setTitle('app example')
  //   .setDescription('The app API description')
  //   .setVersion('1.0')
  //   .addTag('app')
  //   .build();
  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('api', app, document);
//SwaggerModule.setup('api', app, createDocument(app));


  await app.listen(5000);
}
bootstrap();
