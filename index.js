export default{
    apikey: "https://project-apis.codespace.co.za/api/movies"
}

let myPromise= new Promise ((resolve, reject) => {
    let request= newXMLHttpRequest();
    request.open("POST","https://project-apis.codespace.co.za/api/movies");
    request.onload=function() {
        if(request.status ===200){
            resolve(request.response);
        }
        else{
            reject("Data not found");
        }
    }
})