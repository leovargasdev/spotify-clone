import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export const formattedDate = date => {
  return format(new Date(date), "dd' de 'MMM'. de 'yyyy", { locale: ptBR })
}
