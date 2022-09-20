async function doTask1() {
    await console.log('Task1');
}
async function doTask2() {
    await console.log('Task2');
}
async function doTask3() {
    await console.log('Task3');
}
async function* myGen() {
    await doTask1();
    yield;
    await doTask2();
    yield;
    await doTask3();
    yield;
}
let genObj = myGen();
genObj.next();
genObj.next();
genObj.next();