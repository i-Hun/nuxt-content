class IPYNB {
  constructor (options = {}) {
    this.options = options
  }
  async toJSON (file) {
    const body = await JSON.parse(file)
    return {
      body
    }
  }
}

module.exports = IPYNB
