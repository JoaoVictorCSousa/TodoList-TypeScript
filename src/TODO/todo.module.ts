import { Controller, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TodoListController } from "./controllers/todo.controller";
import { TodoList } from "./entities/todo.entities";
import { TodoListService } from "./services/todo.service";

@Module({
    imports: [TypeOrmModule.forFeature([TodoList])],
    providers: [TodoListService],
    controllers: [TodoListController],
    exports: [TypeOrmModule],
})

export class TodoListModule{}