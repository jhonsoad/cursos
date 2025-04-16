export function ValidaDebito(target: any, propertyKey: string, descriptor: PropertyDescriptor) { // estrutura padrão de um decorator
    const orinalMethod = descriptor.value;

    descriptor.value = function(valorDoDebito: number) {
        if(valorDoDebito <= 0) {
            throw new Error("O valor a ser debitado deve ser maior que zero!");
        }

        if(valorDoDebito > this.saldo) {
            throw new Error("Saldo insuficiente!");
        }
    
        return orinalMethod.apply(this, [valorDoDebito]);
    }

    return descriptor;
}

export function ValidaDeposito(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const orinalMethod = descriptor.value;
    descriptor.value = function(valorDoDeposito: number) {
        if(valorDoDeposito <= 0) {
        throw new Error("O valor a ser depositado deve ser maior que zero!");
        }

        return orinalMethod.apply(this, [valorDoDeposito]);
    }

    return descriptor;
    
}
