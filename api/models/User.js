/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    email: {
      type: 'string',
      required: true,
      unique: true
    },
    username: {
      type: 'string',
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      required: true,
    },
    fullName: {
      type: 'string',
      defaultsTo: ''
    },
    displayName: {
      type: 'string'
    },
    isPublic:{
      type:'boolean'
    },
    avatar: {
      type: 'string',
      defaultsTo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAACFCAMAAABCBMsOAAAAMFBMVEX4+PjS0tLj4+P29vbT09Pb29vw8PDk5OTX19fq6ur09PTx8fHn5+ft7e3e3t7c3NwW8K98AAAB+UlEQVR4nO2ZCZaDMAxDWcKakN7/thPKtNAFYsBK+2b0T6DnyMI2WUYIIYQQQgghhJC/h3WFrypfuOFTCsrat/kd47vyAxq6hYSJ1vWJRXSXZw0jlUupoSzMOxEBn64ctlrRMD5LKp/aF0d8QEa/UYkRUycQUfptEaEaCbzRxEQEi8KTo17rjiXwho2YIs2b1BIR8GKIShGAiqg3o2IBNDScUETukSqiWXGjBYrY+oA8YoBPIrZFbjqcikESWRMNTkUnFpEXVPFlKoC+2OFO4JfkOzo1NuzNtBanIiukKiqgiKyTGgNozjD6So2BnTwFsy/8QUIxZCrQm5GoGNAZZ6QUNGuL386GuEFT3A+isyfwQ7YgEl3g/phlbGUX3Jl33Ko3TJPwxvZ6WvsFmtyPWL/6JKZKdFGyMXemuOWse2L2BvqYU769cyYuhyA4J4ADn3zICc0C69hGLgKX4zu2EZyMHc8xgUgwsTHvAHYSyXTzjP60I95EllyURQxHRGhPXUfe44pqari9/XFDs13lW/IzmlvzzrzCFOOwK1SLYY+LUPy6Clfk96jN5Luze4lRGryEe/oaSuPwiQ4ZUeqSQ5+QGaWN8USfXlERcSYtrqh8S/pTLRJQyS35wXcFlSYR/U3eQiU9+6Y4B/IYTQghhBBCCCGEEPKv+AGCCRI4v5V10gAAAABJRU5ErkJggg=='
    },
    bands: {
      collection: 'Band',
      via: 'members'
    },
    profile: {
      type: 'json',
      defaultsTo: {
        about: '',
        instrument: '',
        experience: '',
        styles: [],
        influencies: []
      }
    },
    contact: {
      type: 'json',
      defaultsTo: {
        city: '',
        area: '',
        zip: ''
      }
    },
    channels: {
      type: 'json',
      defaultsTo: [{
        channel: '',
        name: '',
        url: ''
      }]
    },

  },

  //retira password do JSON - toJSON
  customToJSON: function () {
    return _.omit(this, ['password'])
  },

  //hash para senha
  beforeUpdate: function (values, next) {
    CipherService.hashPassword(values);
    next();
  },
  beforeCreate: function (values, next) {
    CipherService.hashPassword(values);
    next();
  }

};