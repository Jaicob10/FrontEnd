import { TipoDocumento } from './tipodocumento';
export class Persona {
     id: number;
     nro_documento: string;
     nombre: string;
     apellido: string;
     correo: string;
     telefono: string;
     tipoDocumento = new TipoDocumento();
     //Agregue el correo y modifique el numero de documento(estaba numeroDocumento)
}
