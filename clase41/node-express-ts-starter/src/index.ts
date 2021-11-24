interface IPersonaMemDAO {
  save: (data: IPersona) => IPersona;
  getPersonas: () => IPersona[];
}

interface IPersona {
  id?: string;
  fyh?: string;
  nombre: string;
  apellido: string;
  dni: string;
}

class PersonasMemDAO implements IPersonaMemDAO {
  public personas: IPersona[];
  constructor() {
    this.personas = [];
  }

  getPersonas() {
    return this.personas;
  }

  save(data: IPersona) {
    const newpersona = PersonaDTO(data);
    this.personas.push(newpersona);
    return newpersona;
  }
}

const PersonaDTO = (data: IPersona): IPersona => {
  return {
    ...data,
    fyh: new Date().toString(),
    id: String(Math.random() * 1000),
  };
};

const personas = new PersonasMemDAO();

console.log(
  personas.save({ nombre: 'Alfonsina', apellido: 'Lizardo', dni: '123456789' })
);
console.log(
  personas.save({ nombre: 'Argenis', apellido: 'Matos', dni: '123456789' })
);
console.log(personas.getPersonas());
