const whitelist = [
    "https://127.0.0.1:5500", 
    "http://localhost:3500"
]; //allowed url's

const corsOption = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, origin);
    } else {
      callback(new Error("not allowed by cors"));
    }
  },
  optionSuccessStatus: 200,
};

module.exports = corsOption;