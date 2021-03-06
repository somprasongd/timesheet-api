const Serializer = require('../serializer')

const TimelogSerializer = {
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
        // const {id, Timelogname, isAdmin} = resource;
        // return {id, Timelogname, isAdmin};
        return resource
    }
}

// Object.assign(TimelogSerializer, Serializer, {
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
//         const {id, Timelogname, isAdmin} = resource;
//         return {id, Timelogname, isAdmin};
//     }
// });
module.exports = TimelogSerializer