import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Todo_list } from './TODO/entities/todo.entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'db_TodoList',
    entities:[Todo_list],
    synchronize: true
   }),
   
  ],
   
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
