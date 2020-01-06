/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov) {
  
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
  /* No olvidar agregar la/s propiedad/es unicas de ZombieConductor necesarias */
 
}


ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;
/* Completar creacion del ZombieConductor */


ZombieConductor.prototype.atacar=function(jugador){
  jugador.perderVidas(2);
}
/* Completar metodos para el movimiento y el ataque */

ZombieConductor.prototype.mover = function(){
  if(this.rangoMov.desdeY == this.rangoMov.hastaY){
    this.x += this.velocidad;
    if(this.x > this.rangoMov.hastaX){
      this.x = 0;
    }
  }
  if(this.rangoMov.desdeX == this.rangoMov.hastaX){
    this.y += this.velocidad;
    if(this.y > this.rangoMov.hastaY){
      this.y = 0;
    }
  }
  };
  
