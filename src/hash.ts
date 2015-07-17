import {HashType} from './enums/hash_type';
import {Rusha} from './../node_modules/rusha/rusha';
import {Hexadecimal} from './../node_modules/encode.ts/encode';

export class Hash {

  public static createHash(data: Uint8Array, hash: HashType): Uint8Array {

    if(hash === HashType.SHA1) {
      return Hexadecimal.getBytes(new Rusha().digest(data));
    } else {
      throw 'Unimplemented';
    }

  }

}