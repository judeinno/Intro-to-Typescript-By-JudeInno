import { Person } from './person.model';

function add(val1: number, val2: number) {
  return val1 + val2
}

add(1, 10);

function sayHello(person: Person) {
  return `Say hello to my litle friend , ${person.firstname}`
}

sayHello(new Person({firstname: 'Jude'}))
