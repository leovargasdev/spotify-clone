import { ReactNode } from 'react'

interface NavItem {
  name: string
  url: string
  icon: ReactNode
}

export interface Navigation {
  class: 'links' | 'controll'
  items: NavItem[]
}
