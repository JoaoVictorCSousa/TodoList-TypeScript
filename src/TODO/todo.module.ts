import { Controller, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TodoList } from "./entities/todo.entities";

@Module({
    imports: [TypeOrmModule.forFeature([TodoList])],
    providers: [],
    controllers: [],
    exports: [],
})

export class TodoListModule{}