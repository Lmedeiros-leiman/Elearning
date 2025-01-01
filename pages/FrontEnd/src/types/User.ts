// Login and other information about the logged in user will be passed as a token via headers.
// this type is only for information used inside a post, for example.
export type User = {
    id: string,
    name: string,
    avatar : string
}