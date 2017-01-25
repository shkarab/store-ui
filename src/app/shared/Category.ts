export interface Category {
  _id: string,
  name: string,
  description: string,
  category: string,
  icon: string,
  selected: boolean,
  expanded: boolean,
  children: string[],
  parent: string

}

