class IPYNB {
  constructor (options = {}) {
    this.options = options
  }
  async toJSON (file) {
    const body = await JSON.parse(file)
    console.log(`ipynb body`)
    console.log(body)
    return {
      body
    }
  }
}

module.exports = IPYNB
