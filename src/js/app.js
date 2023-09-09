export const errors = [
  [10, 'Character not found'],
  [11, 'Character is bad'],
  [12, 'The name must be of the string type!'],
  [13, 'The name must not be shorter than 2 characters!'],
  [14, 'The name must not be longer than 10 characters!'],
  [15, 'The type must be from Bowman, Swordsman, Wizard, Daemon, Undead, Zombie'],
  [16, 'It is impossible to raise the level of a dead character!'],
  [17, 'This character is already in the team!'],
];

export default class ErrorRepository {
  constructor() {
    this.errors = new Map(errors);
  }

  translate(code) {
    return this.errors.get(code) || 'Unknown error';
  }
}
