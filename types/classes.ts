export interface ClassPreview {
  type: 'box' | 'color' | 'text'
  value: string
}

export interface ClassUtility {
  name: string
  property: string
  value?: string
  responsive?: string[]
  preview?: ClassPreview
}

export interface CategoryData {
  category: string
  utilities: ClassUtility[]
}
