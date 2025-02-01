//Wap to generate N no. of 8 digit backup codes as per user requirements.

const backupCode = () => {
  let code = "";
  let d1 = String(Math.floor(Math.random() * 10));
  let d2 = String(Math.floor(Math.random() * 10));
  let d3 = String(Math.floor(Math.random() * 10));
  let d4 = String(Math.floor(Math.random() * 10));
  let d5 = String(Math.floor(Math.random() * 10));
  let d6 = String(Math.floor(Math.random() * 10));
  let d7 = String(Math.floor(Math.random() * 10));
  let d8 = String(Math.floor(Math.random() * 10));
  code = d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8;
  return code;
};

const backupCodeGenerator = (N) => {
  let backupCodeContainer = [];
  for (i = 0; i < N; i++) {
    backupCodeContainer.push(backupCode());
  }
  return backupCodeContainer;
};
