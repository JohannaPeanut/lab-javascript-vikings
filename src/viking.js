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
  showStatus() {}
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
