// import { MongoClient, ObjectId } from 'mongodb';

// // Define your MongoDB connection string and database name
// const mongoURI = "mongodb+srv://manoj:testpass@test-db.vrfjkxw.mongodb.net";
// const dbName = "test-01";
// const collectionName = "design"

// const client = new MongoClient(mongoURI);

// export const readAPI = async (event) => {
//     const id = event.pathParameters.id;

//     const filter = {
//         '_id': new ObjectId(id)
//     };

//     const db = await client.db(dbName);
//     const collection = await db.collection(collectionName);
//     const result = await collection.find(filter).toArray();
//     if (!result) {
//         return {
//             statusCode: 404,
//             body: JSON.stringify({ message: 'Document not found' }),
//         };
//     }

//     return {
//         statusCode: 200,
//         body: JSON.stringify(result),
//     };
// };

// export const readAllAPI = async (event) => {

//     const db = await client.db(dbName);
//     const collection = await db.collection(collectionName);
//     const result = await collection.find().limit(10).toArray();
//     return {
//         statusCode: 200,
//         body: JSON.stringify(result),
//     };

// };

// export const createAPI = async (event) => {
//     const requestBody = JSON.parse(event.body);

//     const db = client.db(dbName);
//     const collection = db.collection(collectionName);
//     const result = await collection.insertOne(requestBody);
//     return {
//         statusCode: 200,
//         body: JSON.stringify(result),
//     };
    
// };

// export const updateAPI = async (event) => {
//     const requestBody = JSON.parse(event.body);

//     const db = await client.db(dbName);
//     const collection = await db.collection(collectionName);
//     const result = await collection.updateOne(
//         { _id: new ObjectId(requestBody.id) },
//         { $set: requestBody.data },
//         { returnOriginal: false }
//     );

//     if (!result) {
//         return {
//             statusCode: 404,
//             body: JSON.stringify({ message: 'Document not found' }),
//         };
//     }

//     return {
//         statusCode: 200,
//         body: JSON.stringify(result),
//     };

// };

// export const deleteAPI = async (event) => {
//     const id = event.pathParameters.id;

//     const db = await client.db(dbName);
//     const collection = await db.collection(collectionName);
//     const result = await collection.findOneAndDelete({ _id: new ObjectId(id) });

//     if (!result) {
//         return {
//             statusCode: 404,
//             body: JSON.stringify({ message: 'Document not found' }),
//         };
//     }

//     return {
//         statusCode: 200,
//         body: JSON.stringify({ message: 'Document deleted' }),
//     };

// };

// console.log(await readAPI({
//     pathParameters:{
//         id: "65300cb6def1c88db056c336"
//     }
// }))
const { MongoClient, ObjectId } = require('mongodb') ;

// Define your MongoDB connection string and database name
const mongoURI = "mongodb+srv://manoj:testpass@test-db.vrfjkxw.mongodb.net";
const dbName = "test-01";
const collectionName = "design"

const client = new MongoClient(mongoURI);

const readAPI = async (event) => {
    const id = event.pathParameters.id;

    const filter = {
        '_id': new ObjectId(id)
    };

    const db = await client.db(dbName);
    const collection = await db.collection(collectionName);
    const result = await collection.find(filter).toArray();
    if (!result) {
        return {
            statusCode: 404,
            body: JSON.stringify({ message: 'Document not found' }),
        };
    }

    return {
        statusCode: 200,
        body: JSON.stringify(result),
    };
};

const readAllAPI = async (event) => {

    const db = await client.db(dbName);
    const collection = await db.collection(collectionName);
    const result = await collection.find().limit(10).toArray();
    return {
        statusCode: 200,
        body: JSON.stringify(result),
    };

};

 const createAPI = async (event) => {
    const requestBody = JSON.parse(event.body);

    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const result = await collection.insertOne(requestBody);
    return {
        statusCode: 200,
        body: JSON.stringify(result),
    };
    
};

const updateAPI = async (event) => {
    const requestBody = JSON.parse(event.body);

    const db = await client.db(dbName);
    const collection = await db.collection(collectionName);
    const result = await collection.updateOne(
        { _id: new ObjectId(requestBody.id) },
        { $set: requestBody.data },
        { returnOriginal: false }
    );

    if (!result) {
        return {
            statusCode: 404,
            body: JSON.stringify({ message: 'Document not found' }),
        };
    }

    return {
        statusCode: 200,
        body: JSON.stringify(result),
    };

};

const deleteAPI = async (event) => {
    const id = event.pathParameters.id;

    const db = await client.db(dbName);
    const collection = await db.collection(collectionName);
    const result = await collection.findOneAndDelete({ _id: new ObjectId(id) });

    if (!result) {
        return {
            statusCode: 404,
            body: JSON.stringify({ message: 'Document not found' }),
        };
    }

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Document deleted' }),
    };

};

module.exports = {
readAPI,
readAllAPI,
createAPI,
updateAPI,
deleteAPI

}
console.log(await readAPI({
    pathParameters:{
        id: "65300cb6def1c88db056c336"
    }
}))
