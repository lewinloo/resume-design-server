import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schemas/user.schema';

const MONGOOSE_SCHEMAS = MongooseModule.forFeature([
  { name: User.name, schema: UserSchema }
])

@Global()
@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost/resume-design-server"),
    MONGOOSE_SCHEMAS
  ],
  exports: [MONGOOSE_SCHEMAS]
})
export class DbModule {}
