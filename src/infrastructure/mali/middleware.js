import createGRPCError from "grpc-create-error";

export const checkCancelled = call => {
  const { cancelled } = call;
  if (cancelled) throw new Error("cancelled");
};

export const createError = (ctx, error) => {
  if (error.message === "cancelled") {
    const { reqeustId } = ctx.metadata;
    throw createGRPCError(`Cancelled: ${reqeustId}`, 0, {
      status: "CANCELLED"
    });
  }
  throw createGRPCError("Exception", 2, { status: "INTERNAL" });
};
