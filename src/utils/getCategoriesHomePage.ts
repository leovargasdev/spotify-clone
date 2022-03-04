import { spotify } from 'service/spotify'

const CATEGORIES_LIST = [
  { id: 'toplists', name: 'Top Lists' },
  { id: 'sleep', name: 'Para dormir' },
  { id: 'in_the_car', name: 'No carro' },
  { id: 'ambient', name: 'Música ambiente' },
  { id: 'at_home', name: 'Em casa' },
  { id: 'kids_family', name: 'Crianças e família' },
  { id: 'popculture', name: 'Em alta' }
]

const getPlaylists = playlists =>
  playlists.items.map(item => ({
    id: item.id,
    name: item.name,
    href: item.href,
    description: item.description,
    images: item.images
  }))

const getCategory = async category => {
  const url = `browse/categories/${category.id}/playlists?limit=8`
  const response = await spotify.get(url)
  const playlists = getPlaylists(response.data.playlists)
  return { name: category.name, playlists }
}

const execute = async () => Promise.all(CATEGORIES_LIST.map(getCategory))

export default { execute }
