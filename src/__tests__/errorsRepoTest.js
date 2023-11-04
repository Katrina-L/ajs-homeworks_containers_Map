import ErrorRepository from "../errorsRepo";

const errorsList = new ErrorRepository();

errorsList.errorsMap.set(797, 'Сломался');
errorsList.errorsMap.set(500, 'Разбился');
errorsList.errorsMap.set(666, 'Завис');
errorsList.errorsMap.set(999, 'Перегрузился');

test.each([
    [666, 'Завис'],
    [799, 'Unknown error'],
])("Testing translate(code) function", (code, expected) => {
    const recieved = errorsList.translate(code);
    expect(recieved).toBe(expected);
})
