require('dotenv').config();
const Web3 = require('web3');
const async = require('async');
const mongoose = require('mongoose');

const Users = require('./models/users');
const initMongo = require('./connect');
const mongoURI = process.env.MONGODB_URI_DEV;

initMongo(mongoURI,true);
const addressJSON = require('../../smart_contract/build/contractAddress.json');
const contractJSON = require('../../smart_contract/build/contracts/Stock.json');

const CONTRACT_ADDRESS = addressJSON.address;
const CONTRACT_ABI = contractJSON.abi;

async function initSmartContractData(){
    web3 = new Web3(process.env.BLOCKCHAIN_EMULATOR_URI);
    accounts = await web3.eth.getAccounts();
    contract = new web3.eth.Contract(CONTRACT_ABI,CONTRACT_ADDRESS,{from:accounts[0]});

    admin = accounts[0];
    user1 = accounts[1];
}

function populateUsers(cb){
    async.parallel([
        cb => createUser({
            name : "testuser",
            password: 123456,
            address: user1
        },cb)
    ],cb);
}

function createUser({name,password,address},cb){
    const newUser = new Users({name, password, address});
    newUser.save(function(err){
        if(err){
            cb(err,null);
            return;
        }
        console.log("New User:"+newUser.name);
        cb(null, newUser);
    });
}

async.series([
    initSmartContractData,
    populateUsers
    ],
    function (err) {
        if (err) {
            console.log('FINAL ERR: ' + err);
        }
        else {
            console.log('Success');
        }
        mongoose.connection.close();
    });