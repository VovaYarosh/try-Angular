// const arr: Array<number> = [1,2,3,4];

interface UserInterfaces {
    id: number
    name: string
    age: number

}

const users: Array<UserInterfaces> = [
    {id: 1, name: 'V', age: 2},
    {id: 2, name: 'E', age: 23}
];

const users2: UserInterfaces[] = [
    {id: 1, name: 'V', age: 2},
    {id: 2, name: 'E', age: 23}
];