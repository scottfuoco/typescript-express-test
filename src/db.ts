const mongoose = require('mongoose');

class DB {
  async start() {
    try {
      await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
      console.info('DB connected...');
    }
    catch(error) {
      console.error(`Error initializing DB: ${error}`);
      throw error;
    }
  }

  async close() {
    try {
      await mongoose.connection.close();
      console.info('DB disconnected...');
    }
    catch(error) {
      console.error()
    }
  }
}

const db = new DB();

export {
    db
}