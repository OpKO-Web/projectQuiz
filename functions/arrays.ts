//ESTA FUNÇÃO IRÁ GERAR OS OBJETOS(PERGUNTAS)  DE MANEIRA ALEATÓRIA

export function embaralhar(elementos: any[]): any[] {
    return elementos.map(valor => ({ valor, aleatorio: Math.random() })) //irá gerar um valor para cada objeto aleatório
        .sort((obj1, obj2) => obj1.aleatorio - obj2.aleatorio) // irá fazer a ordenação dos objetos
        .map(obj => obj.valor) // irá retornar o valor do objeto na ordem aleatória.
}