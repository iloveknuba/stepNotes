export class Card {
  id?:any;
  type?:'card' | "todo";
  title?:string;
  text?:string;
  tasks?:[{text: string, completed: boolean}];
}
