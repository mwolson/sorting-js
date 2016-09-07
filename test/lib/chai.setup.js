const td = require('testdouble');
const chai = require('chai');

chai.use(require('testdouble-chai')(td));

global.expect = chai.expect;
