import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TaskModule,
  MongooseModule.forRoot('mongodb://localhost/gamificationTasksDB')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
