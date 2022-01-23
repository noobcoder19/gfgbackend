import * as koa from "koa";
import "./Create_Connection";
import { hotels_csv } from "./Hotels_Csv";

const app = new koa();


app.use(async (context) =>{
    const data = await hotels_csv.find();
    context.response.body = data;
});

app.listen(process.env.PORT || 3000
    , () => console.log("simple koa ORM server created"));