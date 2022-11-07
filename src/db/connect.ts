import mongoose from "mongoose";

function connect(uri: string) {
  return mongoose.connect(uri);
}

export default connect;
