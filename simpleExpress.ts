import * as express from "express"

const app = express();

const router = express.Router();

router.get("/a",(request, response) => response.send("api a is invoked"));

app.use(router);

app.listen(400, () => console.log("simple express server created"));