
import {HashType} from './enums/hash_type';
import {Rusha} from 'rusha/rusha';
import {SHA256} from 'fast-sha256-js/sha256';
import {Hexadecimal} from 'encode.ts/encode';



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
