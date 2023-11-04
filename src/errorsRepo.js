export default class ErrorRepository {
    constructor() {
        this.errorsMap = new Map();
    };
    
    translate(code) {
        if ( this.errorsMap.has(code) ) {
            return this.errorsMap.get(code);
        };
        return 'Unknown error';
    };

//  --------------------- второй вариант (работает)  ---------------------
    // translate(code) {
    //     for (const key of this.errorsMap.keys()) {
    //       if (key === code) {
    //         return this.errorsMap.get(code);
    //       };
    //     };
    //     return 'Unknown error';
    // };
}
