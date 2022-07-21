import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigType } from './config/configuration';
import * as compression from 'compression'
import { AllExceptionsFilter } from './filters/any-exception.filter';
import { HttpExecptionFilter } from './filters/http-execption.filter';
import { TransformInterceptor } from './interceptor/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const AppConfig = configService.get<ConfigType['app']>('app');

  app.use(compression());

  app.setGlobalPrefix(AppConfig.globalPrefix);
  app.enableCors()

  // 全局拦截器
  app.useGlobalInterceptors(new TransformInterceptor())
  // 全局异常过滤器
  app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalFilters(new HttpExecptionFilter());

  app.listen(AppConfig.port).then(() => {
    // console.log(
    //   `Swagger docs listening to: http://localhost:${AppConfig.port}${swagger.path}`,
    // );
    console.log(
      `Server listening to: http://localhost:${AppConfig.port}${AppConfig.globalPrefix}`,
    );
  });
}
bootstrap();
