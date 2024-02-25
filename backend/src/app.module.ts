import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './persistence/database.module';
import { TypeORMUsers } from './persistence/repositories/users';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [AppService, TypeORMUsers],
})
export class AppModule {}
