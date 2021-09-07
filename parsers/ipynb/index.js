class IPYNB {
  constructor (options = {}) {
    this.options = options
  }
  async toJSON (file) {
    const body = await JSON.parse(file)
    let tags = []
    for (const cell of body.cells) {
      if ('tags' in cell.metadata && cell.metadata.tags.length) {
        for (const tag of cell.metadata.tags) {
          tags.push(tag)
        }
      }
    }
    return {
      body,
      title: body.metadata.title,
      hidden: body.metadata.hidden,
      tags: tags,
      createdAt: body.metadata.createdAt,
      thumbnail: body.metadata.thumbnail,
      description: body.metadata.description
    }
  }
}

module.exports = IPYNB
