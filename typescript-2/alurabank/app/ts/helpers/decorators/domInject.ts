// app/ts/helpers/decorators/domInject.ts

export function domInject(selector: string) {

    return function(target: any, key: string) {

        let elemento: JQuery;

        const getter = function() {

            if(!elemento) {
                console.log(`Buscando ${selector} para  injetar em ${key}`);
                elemento = $(selector);
            }

            return elemento;
        }

        Object.defineProperty(target, key, {
            get: getter 
        });
    }  
}