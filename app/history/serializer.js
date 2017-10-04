const Serializer = require('../serializer')

const HistorySerializer = {
    ...Serializer,
    getAll(resources){        
        return resources.map(resource => this.serializer(resource))
    },
    get(resource){
        return this.serializer(resource)
    }, 
    serializer(resource){
        const {id, userId, timestamp, type} = resource;
        return {id, userId, timestamp, type};
    }
}

// Object.assign(HistorySerializer, Serializer, {
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
module.exports = HistorySerializer