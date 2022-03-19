export interface TitleData {
  id: string
  title: string
  user_id: string
  createdAt: string
  updatedAt: string
  content: Content
}

export interface Content {
  id: string
  content_item: string
  title_id: string
  user_id: string
  createdAt: string
  updatedAt: string
}
