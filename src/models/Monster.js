export class Monster{
  constructor(name,element,health,skills){
    this.setName(name);
    this.setElement(element);
    this.setHealth(health);
    this.setSkills(skills);
  }
  getName(){return this.name;};
  getElement(){return this.element};
  getHealth(){return this.health};
  getSkills(){return this.skills};

 setName(name){this.name= name};
 setElement(element){this.element= element};
 setHealth(health){this.health = health};
 setSkills(skills){this.skills=skills;}
}