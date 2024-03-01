import rateLimit from "express-rate-limit";
const limiter = rateLimit({
  max: 5,
  windowMs: 60 * 60 * 1000,
  message: "too many requests.Please try again later",
});
export default limiter;
