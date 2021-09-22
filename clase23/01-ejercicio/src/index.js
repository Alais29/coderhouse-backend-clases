import { normalize, schema, denormalize } from 'normalizr';
import util from "util";
import { empresa } from './empresa';
import { holding } from './holding';

function print(objeto) {
  console.log(util.inspect(objeto,false,12,true))
}

const empleadoSchema = new schema.Entity('empleados');
const empresaSchema = new schema.Entity('empresas', {
  encargado: empleadoSchema,
  gerente: empleadoSchema,
  empleados: [empleadoSchema]
})

const holdingSchema = new schema.Entity('holding', {
  empresas: [empresaSchema]
})

const normalizedData = normalize(holding, holdingSchema);

print(normalizedData);

const denormalizedData = denormalize(
  normalizedData.result,
  empresaSchema,
  normalizedData.entities
);

// print(denormalizedData);