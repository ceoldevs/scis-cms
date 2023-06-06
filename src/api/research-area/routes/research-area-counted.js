module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/research-areas-count',
      handler: 'research-area.researchAreaByCount',
      config: {
        auth: false
      }
    }
  ]
}
