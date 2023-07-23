import { type JsonResult, type WarResult } from '../CommonInterfaces';

interface Translator<T> {
    jsonToWar: (json: T) => WarResult;
    warToJson: (buffer: Buffer) => JsonResult<T>;
}

export default Translator;
