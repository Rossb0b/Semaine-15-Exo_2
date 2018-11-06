class Warrior 
{
  constructor(name, attack, health) 
  {
    this.name = name;
    this.attack = attack;
    this.health = health;
  }

  skill(target) 
  {
    alert(this.name + " attaque " + target.name + " pour infliger " + this.attack + " point(s) de dégâts");
    target.health = target.health - this.attack;
    if (target.health < 0) 
    {
      target.health = 0;
    }
    alert(target.name + " a " + target.health + "PV restant");
  }
}


class Magician extends Warrior 
{
  constructor(name, attack, power, health, mana) 
  {
    super(name, attack, health);
    this.power = power;
    this.mana = mana;
  };

  heal(target) 
  {
    alert(this.name + " essaie de se soigner pour " + this.power);
    if (this.mana > 20) 
    {
      this.health += this.power;
      this.mana -= 20;
      alert("Soin réussi " + this.name + " regagne " + this.power + " PV" + " et ses PV sont maintenant de " + this.health);
    } 
    else 
    {
      alert("Soin raté");
    }
  };
}


var warrior = new Warrior('Ricky', 20, 200);
var sneaky = new Warrior('Kyle', 30, 150);
var healer = new Magician("Effy", 18, 20, 350, 100);

function fight(fighterOne, fighterTwo, fighterThree) 
{
  roundNumber = 0;
  whosAttackMagician = Math.random();
  whosMagicianAttack = Math.random();

  while (fighterOne.health > 0 && fighterTwo.health > 0 && fighterThree.health > 0) 
  {
    roundNumber++;
    if (roundNumber % 2 != 0) 
    {
      if (whosAttackMagician > 0, 5) 
      {
        if (whosMagicianAttack > 0, 5) 
        {
          fighterOne.skill(fighterTwo);
          if (fighterTwo.health == 0) 
          {
            alert(fighterOne.name + " gagne le combat !");
          } 
          else 
          {
            fighterTwo.skill(fighterOne);
            if (fighterOne.health == 0) 
            {
              alert(fighterTwo.name + " gagne le combat !");
            }
          }
        } 
        else 
        {
          fighterOne.skill(fighterThree);
          if (fighterThree.health == 0) 
          {
            alert(fighterOne.name + " gagne le combat !");
          }
          else 
          {
            fighterTwo.skill(fighterOne);
            if (fighterOne.health == 0) 
            {
              alert(fighterTwo.name + " gagne le combat !");
            }
          }
        }
      } 
      else 
      {
        if (whosMagicianAttack > 0, 5) 
        {
          fighterOne.skill(fighterTwo);
          if (fighterTwo.health == 0) 
          {
            alert(fighterOne.name + " gagne le combat !");
          } 
          else 
          {
            fighterTwo.skill(fighterOne);
            if (fighterOne.health == 0) 
            {
              alert(fighterTwo.name + " gagne le combat !");
            }
          }
        } 
        else 
        {
          fighterOne.skill(fighterThree);
          if (fighterThree.health == 0) 
          {
            alert(fighterOne.name + " gagne le combat !");
          } 
          else 
          {
            fighterTwo.skill(fighterOne);
            if (fighterOne.health == 0) 
            {
              alert(fighterTwo.name + " gagne le combat !");
            }
          }
        }
      }
    } 
    else if (roundNumber % 4 == 0) 
    {
      fighterOne.heal(fighterOne);
      if (whosAttackMagician > 0, 5) 
      {
        fighterTwo.skill(fighterOne);
        if (fighterOne.health == 0) 
        {
          alert(fighterTwo.name + " gagne le combat !");
        }
      } 
      else 
      {
        fighterThree.skill(fighterOne);
        if (fighterOne.health == 0) 
        {
          alert(fighterThree.name + " gagne le combat !");
        }
      }
    }
  }
}

fight(healer, warrior, sneaky);