// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}
// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(newViking) {
    this.vikingArmy.push(newViking);
  }
  addSaxon(newSaxon) {
    this.saxonArmy.push(newSaxon);
  }

  vikingAttack() {
    let randomIndexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    const saxon = this.saxonArmy[randomIndexSaxon];
    const viking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const saxonStatus = saxon.receiveDamage(viking.strength);
    if (saxon.health <= 0) {
      this.saxonArmy.splice(randomIndexSaxon, 1);
    }
    return saxonStatus;
  }
  saxonAttack() {
    let randomIndexViking = Math.floor(Math.random() * this.vikingArmy.length);
    const viking = this.vikingArmy[randomIndexViking];
    const saxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const vikingStatus = viking.receiveDamage(saxon.strength);
    if (viking.health <= 0) {
      this.vikingArmy.splice(randomIndexViking, 1);
    }
    return vikingStatus;
  }

  /*

  // generic .attack method that reveives one argument either vikingAttack or saxonAttack

  attacK(whoAttacks) {
    if (whoAttacks === vikingAttack) {
      const aggressorArmy = this.vikingArmy;
      const attackedArmy = this.saxonArmy;
    } else if (whoAttacks === saxonAttack) {
      const aggressorArmy = this.saxonArmy;
      const attackedArmy = this.vikingArmy;
    }

    const randomIndexAttacked = Math.floor(Math.random() * attackedArmy.length);
    const attacked = attackedArmy[randomIndexAttacked];

    const aggressor =
      aggressorArmy[Math.floor(Math.random() * aggressorArmy.length)]; // does this mutate the array, that it should?? I guess yes, because the variable is still referencing the same array...?

    const attackedStatus = attacked.receiveDamage(aggressor.strength); // same here: does this really mutate the actual object??

    if (attacked.health <= 0) {
      attackedArmy.splice(randomIndexAttacked, 1);
    }
    return attackedStatus;
  }
  
*/

  showStatus() {
    if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0)
      return 'Vikings and Saxons are still in the thick of battle.';
    if (this.vikingArmy.length === 0)
      return `Saxons have fought for their lives and survived another day...`;
    if (this.saxonArmy.length === 0)
      return 'Vikings have won the war of the century!';
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
