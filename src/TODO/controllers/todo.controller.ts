import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from "@nestjs/common";
import { HttpStatus } from "@nestjs/common/enums";
import { ParseIntPipe } from "@nestjs/common/pipes";
import { TodoList } from "../entities/todo.entities";
import { TodoListService } from "../services/todo.service";

@Controller ("/todolist")
export class TodoListController {
    constructor(private readonly todolistService: TodoListService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<TodoList[]> {
        return this.todolistService.findAll();
    }

    @Get(':/id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise < TodoList > {
        return this.todolistService.findById(id);
    }

    @Post()
    @HttpCode(HttpStatus.OK)
    create(@Body () TodoList: TodoList) : Promise <TodoList> {
        return this.todolistService.create(TodoList)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.OK)
    delete (@Param('id', ParseIntPipe)id: number){
        return this.todolistService.delete(id)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body()TodoList: TodoList): Promise< TodoList>{
        return this.todolistService.update(TodoList)
    }

}