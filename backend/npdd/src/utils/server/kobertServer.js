const axios = require('axios');
const config = require('../../config/config');

const kobertAppServerAddr = config.kobertAppServerAddr;

const kobertServer = {};

kobertServer.post = function (path, data, config) {
    return axios.post(encodeURI(kobertAppServerAddr + path), data, config);
};

kobertServer.get = function (path, config) {
    return axios.get(encodeURI(kobertAppServerAddr + path), config);
};

kobertServer.put = function (path, data, config) {
    return axios.put(encodeURI(kobertAppServerAddr + path), data, config);
};

kobertServer.delete = function (path, config) {
    return axios.delete(encodeURI(kobertAppServerAddr + path), config);
};

module.exports = kobertServer;
