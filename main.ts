import { App } from "cdktf";
import { CatSearchStack } from "./stacks/catsearch/index.js";
import { SysadminStack } from "./stacks/sysadmin/index.js";

const app = new App();

const sysadminStack = new SysadminStack(app);

new CatSearchStack(app, {
  environment: "dev",
  project: sysadminStack.bootstrap.devProject.project.name,
  domain: "alpha.catsearch.curioswitch.org",
  appRepo: sysadminStack.bootstrap.apprepo.repository.fullName,
});

new CatSearchStack(app, {
  environment: "prod",
  project: sysadminStack.bootstrap.prodProject.project.name,
  domain: "catsearch.curioswitch.org",
  appRepo: sysadminStack.bootstrap.apprepo.repository.fullName,
});

app.synth();
