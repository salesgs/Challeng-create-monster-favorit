import {monsters} from "../main.js";
import {Monster} from "../models/Monster.js";
export const create=(name,element,health,skkils)=>{
  const monster = new Monster(name,element,health,skkils);
  monsters.push(monster);
  console.log(monsters);
};