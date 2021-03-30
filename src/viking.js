// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health,
            this.strength = strength
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name
    }

    receiveDamage(damage) {
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {

    receiveDamage(damage) {
        super.receiveDamage(damage);
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
        this.saxonArmy = []
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }

    vikingAttack() {
        const choosenSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        choosenSaxon.receiveDamage(this.vikingArmy[0].strength);

        const index = this.saxonArmy.indexOf(choosenSaxon);

        if (choosenSaxon.health <= 0) {
            this.saxonArmy.splice(index, 1);
        }

        return 'A Saxon has died in combat'

    }

    saxonAttack() {
        const choosenViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        const result = choosenViking.receiveDamage(this.saxonArmy[0].strength);

        const index = this.vikingArmy.indexOf(choosenViking);

        if (choosenViking.health <= 0) {
            this.vikingArmy.splice(index, 1);
        }

        return result;

    }

    genericAttack(army) {
        
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!'
        } else if (this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survived another day...'
        } else {
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }
}