import {Document} from 'mongoose'
interface productInterface  extends Document{
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

export { productInterface, addProductInterface };
