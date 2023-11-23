class Discount {
  customer: string
  price: number
  constructor (customer, price) {
    this.price = price
    this.customer = customer
  }

  getDiscount () {
    return this.price * 0.2
  }
}

class DiscountFav extends Discount {
  giveDiscount () {
    return this.getDiscount() * 2
  }
}

class SuperVipDiscount extends Discount {
  giveDiscount () {
    return this.getDiscount() * 3
  }
}
