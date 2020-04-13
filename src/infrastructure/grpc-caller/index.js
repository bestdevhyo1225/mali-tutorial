import { port, ip } from "../../common/config";
import caller from "grpc-caller";
import path from "path";

const PROTO_PATH = path.resolve(__dirname, "../idl/helloworld.proto");
const client = caller(`${ip}:${port}`, PROTO_PATH, "Greeter");

async function grpcClient() {
  const name = "Jang Hyo Seok";
  const sayHelloRes = await client.sayHello({ name }, { requestId: "api-1" });
  const sayHiRes = await client.sayHi({ name }, { requestId: "api-2" });
  console.log(sayHelloRes);
  console.log(sayHiRes);
}

grpcClient().then(() => console.log(`\ngrpc-caller complete`));
