class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome
      this.idade = idade
      this.tipo = tipo
    }
  
    atacar() {
      let ataque
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia'
          break
        case 'guerreiro':
          ataque = 'usou espada'
          break
        case 'monge':
          ataque = 'artes marciais'
          break;
        case 'ninja':
          ataque = 'usou shuriken'
          break;
        default:
          ataque = 'usou um ataque desconhecido'
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
  }
  
  const heroi1 = new Heroi('Eriberto', 45, 'monge')
  const heroi2 = new Heroi('Victor', 25, 'mago')
  
  heroi1.atacar(); 
  heroi2.atacar(); 
  
