function _GetCityFinder () {
    return new Promise((resolve,reject) =>{
        $.ajax({
            type: "get",
            url: "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json",
            success: function (response) {
                resolve(JSON.parse(response))
            },
            error: function  (errorMsg) {
                reject(errorMsg)
            }
        })
    })
}