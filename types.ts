export type Item = {
    name: string
    image: any
}

export type Details = {
    name: string
    description: string
    price: string
    image: any
}

export type Basket = {
    details: Details
    items: Item[]
}

export type Producer = {
    name: string
    image: any
    distance: number
    stars: number
    baskets: Basket[]
}

export type Producers = {
    title: string
    list: Producer[]
}