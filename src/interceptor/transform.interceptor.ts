import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.getArgByIndex(1).req;
    return next.handle().pipe(
      map((data) => {
        if (data.result) {
          return {
            code: 200,
            message: data.message,
            success: data.success,
            data: data.result,
          };
        } else {
          return {
            code: 200,
            message: data.message,
            success: data.success,
          };
        }
      }),
    );
  }
}
