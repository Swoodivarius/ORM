import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Hobby } from 'entities/Hobby';

@Entity('Person')
export class Person {
	
	@PrimaryColumn()
	name: string;

	@Column()
	age: number;

	@OneToMany(() => Hobby, (hobby) => { hobby.doer; })
	hobbies: Hobby;
}
