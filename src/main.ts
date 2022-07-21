import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigType } from './config/configuration';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const AppConfig = configService.get<ConfigType['app']>('app');

  await app.listen(AppConfig.port);
}
bootstrap();
