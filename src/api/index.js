import axios from 'axios';

let base = '/api';

//获取车辆详细信息
export function getData(carNumber) {
    return axios.get(base + '/web/getDetailedData', {
    params: {
        carNumber: carNumber
    }
    });
}

//注册车辆信息汇总
export function getCarDataList() {
    return axios.get(base + '/web/carDataList', {
    });
}

//注册车辆
export async function registerCar(carNumber) {
try {
    const response = await axios.post(base + '/web/registerCar', {
        carNumber: carNumber
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.data;
} catch (error) {
    throw error;
}
}

//删除车辆
export async function deleteCar(carNumber) {
try {
    const response = await axios.get(base + '/web/delete', {
        params: {
            carNumber: carNumber
        }
    });
    return response.data;
} catch (error) {
    throw error;
}
}

//获取温度日志
export function getTemperatureLog(carNumber) {
return axios.get(base + '/web/getTemperatureLog', {
    params: {
        carNumber: carNumber
    }
});
}

