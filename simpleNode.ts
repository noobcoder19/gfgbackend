
import * as http from "http";

const app = http.createServer((request, response) => {
    if(request.url === "/a") response.write("api a is invoked");
    else if(request.url === "/b") response.write("api b is invoked");
    else response.write("api is not found");
    response.end();
})

app.listen(4000, () => console.log("simple node server created"));