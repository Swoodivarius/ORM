import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Person } from 'entities/Person';

@Entity('Hobby')
export class Hobby {

	@ManyToOne(() => Person, (doer) => { doer.hobbies; })
	doer: Person;

	@PrimaryColumn()
	activity: string;
}
