
import {Document} from 'mongoose'
interface FakeStoreInterface  extends Document{
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface createProductInterface{
  title:string,
  price:number,
  description:string,
  image:string,
  category:string
}

export { FakeStoreInterface, createProductInterface };
