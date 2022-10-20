import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import {TodoList } from './TODO/entities/todo.entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'db_TodoList',
    entities:[TodoList],
    synchronize: true
   }),

  ],
   
  controllers: [],
  providers: [],
})
export class AppModule {}
