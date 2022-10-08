// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

contract Login {

    bytes32 private username;
    bytes32 private password; // taking 1 storage slot as bytes32 = 256bits i.e 1 slot

    constructor(bytes32 _username, bytes32 _password){
        username = _username;
        password = _password;
    }
}