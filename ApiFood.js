import apisauce from 'apisauce'

const create = (baseURL = 'https://demo3739428.mockable.io/') => {

  const api = apisauce.create({
    baseURL,
    headers: {
      'Authorization': ''
    },
    timeout: 10000
  })

  function treatResult(res) {
    let returnedData = {};
    if(res.ok){
      returnedData = res.data
      returnedData.ok = true
    }else{
      returnedData = res.problem
      returnedData.ok = false
    }
    return returnedData
  }

  const getFoods = () => {
    return api.get('foods').then(res => {
      return treatResult(res)
    })
  }

  return {
    getFoods
  }
}

export default {
  create
}