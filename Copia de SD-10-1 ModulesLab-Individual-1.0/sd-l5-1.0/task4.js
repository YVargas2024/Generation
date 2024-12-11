
export class FriendAge {
    constructor(nombre, nacimientoAño, nacimientoMes, nacimientoDia) {
      this.nombre = nombre;
      this.nacimientoAño = nacimientoAño;
      this.nacimientoMes = nacimientoMes;
      this.nacimientoDia = nacimientoDia;
    }
  
    returnAge() {
      const hoy = new Date();
      let edad = hoy.getFullYear() - this.nacimientoAño;
  
      const mes = hoy.getMonth() + 1;
      const dia = hoy.getDate();
  
      if (mes < this.nacimientoMes || (mes === this.nacimientoMes && dia < this.nacimientoDia)) {
        edad--;
      }
  
      return `${this.nombre} es ${edad} hoy!`;
    }
  }
  
  const amigo = new FriendAge('Javiera', 1995, 7, 15);


console.log(amigo.returnAge());