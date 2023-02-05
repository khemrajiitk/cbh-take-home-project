const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  //return if there is invalid input
  if (!event) {
    return TRIVIAL_PARTITION_KEY;
  }

  let candidate;
  if (event && event.partitionKey) {
    candidate = `${event.partitionKey}`;
  } else {
    const data = JSON.stringify(event);
    candidate = crypto.createHash("sha3-512").update(data).digest("hex");
  }

  if (candidate.length <= MAX_PARTITION_KEY_LENGTH) {
    return candidate;
  }

  return crypto.createHash("sha3-512").update(candidate).digest("hex");
};

//In previously given code there are nested if else conditions and we are checking for invalid input
// in the middle of function. I checked validation initially and if it is invalid simply return default output
// In my implementation sequence on execution is very close to a business requirement so it is more readable