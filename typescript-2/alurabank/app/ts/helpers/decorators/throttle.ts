// app/ts/helpers/decorators/throttle.ts

export function throttle(milissegundos  = 500) {

    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        let timer = 0;
        const metodoOriginal = descriptor.value;

        descriptor.value = function(...args: any[]) {
           
           if (event) event.preventDefault();
           clearInterval(timer);
           timer = setTimeout(() => metodoOriginal.apply(this, args), milissegundos);
        }

        return descriptor;
    }
}