
export class FriendNames {
  constructor(nombre1, nombre2, nombre3) {
    this.nombre1 = nombre1;
    this.nombre2 = nombre2;
    this.nombre3 = nombre3;
  }
}

const amigos = new FriendNames('Juan', 'Carlos', 'Luis');

console.log(amigos);