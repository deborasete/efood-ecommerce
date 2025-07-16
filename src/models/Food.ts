class Food {
  category: string
  description: string
  image: string
  infos?: string[]
  title: string
  id: number
  score?: number
  price?: number
  portion?: string

  constructor(
    id: number,
    category: string,
    description: string,
    image: string,
    infos: string[],
    title: string,
    score: number,
    price?: number,
    portion?: string
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.image = image
    this.infos = infos
    this.title = title
    this.score = score
    this.price = price
    this.portion = portion
  }
}

export default Food
