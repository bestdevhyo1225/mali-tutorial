import {
  checkCancelled,
  createError
} from "../../../infrastructure/mali/middleware";

export const sayHello = async ctx => {
  const { req, call } = ctx;
  try {
    checkCancelled(call);
    return (ctx.res = { message: "Hello " + req.name });
  } catch (error) {
    createError(ctx, error);
  }
};

export const sayHi = async ctx => {
  const { req, call } = ctx;

  try {
    checkCancelled(call);
    return (ctx.res = { message: "Hi " + req.name });
  } catch (error) {
    createError(ctx, error);
  }
};
