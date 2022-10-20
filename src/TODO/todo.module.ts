import { Controller, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TodoList } from "./entities/todo.entities";
import { TodoListService } from "./services/todo.service";

@Module({
    imports: [TypeOrmModule.forFeature([TodoList])],
    providers: [TodoListService],
    controllers: [],
    exports: [TypeOrmModule],
})

export class TodoListModule{}