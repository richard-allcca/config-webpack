
export class HelloWorld {

  name: string;

  constructor( name: string) {
    this.name = name;
  }

  greet(): string {
    return `!hello world con! ${this.name}`;
  }
}