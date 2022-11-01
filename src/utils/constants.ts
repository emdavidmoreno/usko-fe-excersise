export const ASC = 'ASC';
export const DESC ='DESC';
export const PAGE_SIZE = 10;

export const ACTIONS = {
  SORT_PURCHASE : 'SORT_PURCHASE',
  CHANGE_SORT_BY : 'CHANGE_SORT_BY',
  SELECT_PURCHASE : 'SELECT_PURCHASE',
  SORT_BY_DATE : 'SORT_BY_DATE',
  RESET_SELECTED: 'RESET_SELECTED',
  CHANGE_PAGE: 'CHANGE_PAGE',
}

export const OPTIONS = [
  { value: 'date_asc', label: 'Purchase date asc' },
  { value: 'date_desc', label: 'Purchase date desc' },
  { value: 'title_asc', label: 'Product name asc' },
  { value: 'title_desc', label: 'Product name desc' },
  { value: 'unit_price_asc', label: 'Purchase price asc' },
  { value: 'unit_price_desc', label: 'Purchase price desc' },
]
