import { RouterContext } from "https://deno.land/x/oak@v7.4.0";

export const home = (ctx: RouterContext)
    ctx.response.body = "welcome";
}