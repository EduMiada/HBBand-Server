/**
 * Band.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string',
    },
    public: {
      type: 'boolean',
      defaultsTo: true
    },
    image: {
      type: 'string',
      defaultsTo: 'data:image/jpeg;base64,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',
      url: true
    },
    members: {
      collection: 'user',
      via: 'bands',
    },

    owner: {
      model: 'user'  
      //required:true,
      //unique:true
    }
  },

  afterCreate: async function (values, next) {
    //adiciona a members se ainda nao estiver
    if (values.id){
       await Band.addToCollection(values.id,'members')
        .members(values.owner);
    }
    next();
   
}

};
