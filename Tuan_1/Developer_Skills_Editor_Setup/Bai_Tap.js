function printForecast(arr) {
    let forecastStr = ''; // Chuỗi kết quả
    for (let i = 0; i < arr.length; i++) {
        forecastStr += `... ${arr[i]}ºC in ${i + 1} days `;
    }
    console.log(forecastStr + '...');
}

// Dữ liệu kiểm tra
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

// Gọi hàm với dữ liệu kiểm tra
printForecast(data1);
printForecast(data2);
