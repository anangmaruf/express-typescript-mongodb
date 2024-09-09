import { createLightship, Lightship } from "lightship";
import { getAppServer, PORT } from "./server";

const appServer = getAppServer();

const lightshipConfig = {};

appServer.listen(PORT, async () => {
  // const ls = await createLightship(lightshipConfig);
  // ls.signalReady();
});
