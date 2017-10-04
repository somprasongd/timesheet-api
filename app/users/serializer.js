const Serializer = require('../serializer')

const UserSerializer = {
    ...Serializer,
    getAll(resources){        
        return resources.map(resource => this.serializer(resource))
    },
    get(resource){
        return this.serializer(resource)
    },
    create(resource){
        return this.serializer(resource)
    },
    update(resource){
        return this.serializer(resource)
    }, 
    serializer(resource){
        const {id, Timelogname, isAdmin} = resource;
        return {id, Timelogname, isAdmin}
    }
}

// Object.assign(UserSerializer, Serializer, {
//     getAll(resources){        
//         return resources.map(resource => this.serializer(resource));
//     },
//     get(resource){
//         return this.serializer(resource);
//     },
//     create(resource){
//         return this.serializer(resource);
//     },
//     update(resource){
//         return this.serializer(resource);
//     }, 
//     serializer(resource){
//         const {id, username, isAdmin} = resource;
//         return {id, username, isAdmin};
//     }
// });
module.exports = UserSerializer
