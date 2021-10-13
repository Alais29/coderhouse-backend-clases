import cluster from "cluster";
import minimist from "minimist";
import os from "os";
import Server from "./services/server";

//Obtengo el numero de nucleos disponibles en mi PC
const numCPUs = os.cpus().length;

const args = minimist(process.argv.slice(2));

/* --------------------------------------------------------------------------- */
/* MASTER */
/**
 * isMaster vs isPrimary
 * https://stackoverflow.com/questions/68978929/why-is-nodejs-cluster-module-not-working
 */
if (cluster.isMaster) {
  console.log(`NUMERO DE CPUS ===> ${numCPUs}`);
  console.log(`PID MASTER ${process.pid}, ${new Date()}`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker) => {
    console.log(`Worker ${worker.process.pid} died at ${Date()}`);
    cluster.fork();
  });
} else {
  /* --------------------------------------------------------------------------- */
  /* WORKERS */
  const PORT = args.port || 8080;

  Server.listen(PORT, () =>
    console.log(
      `Servidor express escuchando en el puerto ${PORT} - PID WORKER ${process.pid}`
    )
  );
}
