class DiscountProblem {
  price: number
  customer: string
  constructor (customer, price) {
    this.price = price
    this.customer = customer
  }

  giveDiscount () {
    if (this.customer === 'fav') {
      return this.price * 0.2
    } else if (this.customer === 'vip') {
      return this.price * 0.4
    }
    return this.price
  }
}
