import { Document } from "mongoose";
interface userInterface extends Document {
  name: string;
  email: string;
  password: string;
}

export { userInterface };
