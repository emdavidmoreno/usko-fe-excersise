export interface Purchase {
  title: string,
  order_date: string,
  product_url: string,
  image_url: string,
  unit_price: string,
  quantity: string,
}

export interface InitialStateType {
  purchases: Purchase[],
  sortBy: string,
  selected: Purchase | null,
  page: number,
}

export interface Action {
  type: string,
  payload: any,
}