const getAllData = () => {
    return {
        status: 0,
        message: 'success',
        data: {
            projectTotal: 1,
            dbPotal: 1,
            tableTotal: 5,
            interfaceTotal: 18
        }
    }
}


export default {
    'get|/yhch/getAllData': getAllData
}