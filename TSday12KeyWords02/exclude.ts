namespace InnerCondition{

    type Example<T,N,S> = Exclude<T | N,S>;
    const example:Example<number[],string[],number[]>= ["Terry"];
}

