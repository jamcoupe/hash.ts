
import {HashType} from './enums/hash_type';
import {Rusha} from './../node_modules/rusha/rusha';
import {SHA256} from './../node_modules/fast-sha256/sha256';
import {Hexadecimal} from './../node_modules/encode.ts/encode';



export class Hash {

  public static createHash(data: Uint8Array, hash: HashType): Uint8Array {

    switch(hash) {
      case HashType.SHA1 :
        return Hexadecimal.getBytes(new Rusha().digest(data));
        break;

      case HashType.SHA256 :
        return SHA256.HASH(data);
        break;

      default :
        throw 'Unimplemented';
        break;
    }
  }
}
