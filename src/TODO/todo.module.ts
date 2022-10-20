import { Controller, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Todo_list } from "./entities/todo.entities";

@Module({
    imports: [TypeOrmModule.forRoot([Todo_list])],
    providers: [],
    controllers: [],
    exports: [],
})

exports Todo_listModule