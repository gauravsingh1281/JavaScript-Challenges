//Wap to generate 6 digit OTP

const otpGenerator = () => {
  let otp = "";
  let d1 = String(Math.floor(Math.random() * 10));
  let d2 = String(Math.floor(Math.random() * 10));
  let d3 = String(Math.floor(Math.random() * 10));
  let d4 = String(Math.floor(Math.random() * 10));
  let d5 = String(Math.floor(Math.random() * 10));
  let d6 = String(Math.floor(Math.random() * 10));
  otp = d1 + d2 + d3 + d4 + d5 + d6;
  return otp;
};

otpGenerator();
