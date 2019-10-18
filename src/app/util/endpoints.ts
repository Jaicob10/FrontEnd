export class Endpoints {
  public static readonly ENDPOINTPERSONAS = 'http://localhost:8080/personas';
  public static readonly ENDPOINTTIPODOCUMENTO = 'http://localhost:8080/TipoDocumento';
  public static readonly LISTAR= Endpoints.ENDPOINTPERSONAS.concat("/personas");
  public static readonly INSERTAR=Endpoints.ENDPOINTPERSONAS.concat("/persona");
  public static readonly  LISTAR_DOCUMENTOS = Endpoints.ENDPOINTTIPODOCUMENTO.concat("/TiposDocumentos");
  public static readonly ELIMINAR="http://localhost:8080/personas/";
}
