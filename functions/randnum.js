module.exports = (max, min) => {
          return Math.floor(Math.random() * (max - min + 1)) + min;
      }