import { Document } from "mongoose";
interface userInterface extends Document {
  _id:object
  name: string;
  email: string;
  password: string;
}

export { userInterface };
