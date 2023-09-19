declare global {
    namespace NodeJS {
      interface ProcessEnv {
        MOVIES_API_BASE_URL: string;
      }
    }
  }