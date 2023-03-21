import { promisify } from './solution';

const fs = require('fs');

const promisifyReaddir = promisify(fs.readdir)

promisifyReaddir(__dirname)
  .then((dirs) => {
    console.log('fs.readdir :>> ', dirs);
  })
  .catch(err => {
    console.log('err :>> ', err)
  })

promisifyReaddir(__dirname, { encoding: 'utf8' })
  .then((dirs) => {
    console.log('fs.readdir with options :>> ', dirs);
  })
  .catch(err => {
    console.log('err :>> ', err)
  })


const promisifyUnlink = promisify(fs.unlink)

promisifyUnlink(__dirname + '/nonexistent.txt')
  .then((dirs) => {
    console.log('fs.unlink :>> ', dirs);
  })
  .catch(err => {
    console.log('err :>> ', err)
  })


function returnOne() {
  return 1;
}

const promisifyReturnOne = promisify(returnOne, false)

promisifyReturnOne()
  .then((res) => {
    console.log('return one :>> ', res);
  })
  .catch((err) => {
    console.log('err :>> ', err);
  })
