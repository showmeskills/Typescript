namespace ExtractCondition{
    type Example<T,S,D> = Extract<T|S,D>;
    const example:Example<string[],number[],string[]>=["111111"];

}