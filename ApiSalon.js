import apisauce from 'apisauce'

const create = (baseURL = 'http://demo0755001.mockable.io/') => {

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

    const getBrands = () => {
        return api.get('map').then(res => {
            return treatResult(res)
        })
    }
    const getEvents = () => {
        return api.get('events').then(res => {
            return treatResult(res)
        })
    }

    return {
        getBrands,
        getEvents
    }
}

export default {
    create
}