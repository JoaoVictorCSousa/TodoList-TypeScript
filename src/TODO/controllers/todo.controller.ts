import { Controller, Get, HttpCode } from "@nestjs/common";
import { HttpStatus } from "@nestjs/common/enums";
import { HttpErrorByCode } from "@nestjs/common/utils/http-error-by-code.util";
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
}