import { buildSchema } from "type-graphql";
import HotelResolver from "./HotelResolver";
import * as koa from "koa";
import { ApolloServer } from "apollo-server-koa";
import * as Router from "koa-router";
import { graphqlHTTP } from "koa-graphql";
import * as cors from "@koa/cors";
import "./Create_Connection"


async function main() {
    const app = new koa();
    const schema = await buildSchema ({resolvers: [HotelResolver]});
    const appolo = new ApolloServer({schema:schema});
    appolo.applyMiddleware({app});
    const router = new Router();
    router.get("/graphql", graphqlHTTP({schema:schema}));
    app.use(router.routes());
    app.use(cors());

    app.listen(process.env.PORT || 4000, () => console.log("koa server graph ql created"));

}

main();