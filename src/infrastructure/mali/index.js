import { sayHello, sayHi } from "../../web/grpc/helloworld/controller";
import { port, ip, env } from "../../common/config";

import path from "path";
import Mali from "mali";

const PROTO_PATH = path.resolve(__dirname, "../idl/helloworld.proto");

export default () => {
  const app = new Mali();

  app.addService(PROTO_PATH, "Greeter");
  app.use({ sayHello, sayHi });
  app.start(`${ip}:${port}`);

  console.log(`grpc server listening on ${port}, in ${env} mode`);

  return app;
};
