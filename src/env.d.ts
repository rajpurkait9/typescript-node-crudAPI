declare global {
  namespace Nodejs {
    interface ProcessEnv {
      MONGO_URI: string;
    }
  }
}

export {};
