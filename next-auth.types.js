module.exports = {
  Session: {
    user: DefaultSession['user'] & {
      id: string,
    }
  }
};