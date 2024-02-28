
import {Document} from 'mongoose'
interface FakeStoreInterface  extends Document{
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface addProductInterface{
  title:string,
  price:number,
  description:string,
  image:string,
  category:string
}

export { FakeStoreInterface, addProductInterface };
