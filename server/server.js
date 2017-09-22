/*
 * @file: server.js
 * @description: multiple file upload api
 * @date: 18.09.2017
 * @author: Lancy Goyal
 * */

import { Meteor } from 'meteor/meteor';
import { createApolloServer } from 'meteor/apollo';

import schema from '/imports/api/schema';
// console.log(schema);

const customBuildOptions = (request, res) => {

    // console.log('*** request method', request.method, '*** request headers', request.headers);

    return {
        context: { headers: request.headers }, // This context object is passed to all resolvers.
        schema,
    };
};

const customBuildConfig = () => {
    return { path: '/gql', graphiql: true, graphiqlPath: '/graphiql' };
};

createApolloServer(customBuildOptions, customBuildConfig());