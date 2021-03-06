export class Tamagotchi {

  constructor (name) {
    this.name = name;
    this.hunger = 10;
    this.fun = 10;
    this.energy = 10;
  }

  setHunger() {
    setInterval(() => {
      this.hunger--;
    }, 60000);
  }

  setFun() {
    setInterval(() => {
      this.fun--;
    }, 60000);
  }

  setEnergy() {
    setInterval(() => {
      this.energy--;
    }, 60000);
  }

  feed(number) {
    this.hunger += number;
  }

  play(number) {
    this.fun += number;
  }

  sleep(number) {
    this.energy += number;
  }

  isAlive() {
    if (this.hunger <= 0 || this.fun <= 0 || this.energy <= 0) {
      return "I'm Dead";
    } else {
      return "Still kickin'";
    }
  }
}
