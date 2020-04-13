import errorMessage from "../../common/message/error";
import createGRPCError from "grpc-create-error";

export const checkCancelled = call => {
  const { cancelled } = call;
  if (cancelled) throw new Error("cancelled");
};

export const createError = (ctx, error) => {
  if (error.message === "cancelled") {
    const { reqeustId } = ctx.metadata;
    const { code, status } = errorMessage.E000;
    throw createGRPCError(`Cancelled: ${reqeustId}`, code, { status });
  }
  const { code, status } = errorMessage.E002;
  throw createGRPCError("Exception", code, { status });
};
