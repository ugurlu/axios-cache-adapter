import omit from 'lodash/omit'

function serialize (config, req, res) {
  if (res.data) {
    try {
      res.data = JSON.parse(res.data)
    } catch (err) {
      config.debug('Could not parse data as JSON', err)
    }
  }

  return omit(res, ['request', 'config'])
}

export default serialize
