import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity ({name: 'tb_list'})
export class TodoList{

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    To_do: string;

    @IsNotEmpty()
    @Column()
    done: boolean;

}
