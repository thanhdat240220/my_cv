const checkEnv = () => {
  return process.env.REACT_APP_ENV === "development" ? true : false;
};

window.console.MyConsoleInfo = (text?: string, ...variable: any) => {
  if (!checkEnv()) return;
  if (text) console.log(text, ...variable);
  else console.log(...variable);
};

window.console.MyConsoleWar = (text?: string, ...variable: any) => {
  if (!checkEnv()) return;
  if (text) console.warn(text, ...variable);
  else console.warn(...variable);
};

window.console.MyConsoleErr = (text?: string, ...variable: any) => {
  if (!checkEnv()) return;
  if (text) console.error(text, ...variable);
  else console.error(...variable);
};

export {};