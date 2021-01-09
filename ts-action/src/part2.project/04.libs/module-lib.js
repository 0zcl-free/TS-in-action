const version = '2.2.2'

function doSomething() {
  console.log('zcl')
}

function moduleLib(option) {
  console.log(option)
}

moduleLib.version = version
moduleLib.doSomething = doSomething

module.exports = moduleLib