function calculateWatchTime(times) {
  if (!Array.isArray(times)) {
    return "Invalid";
  }

  let totalSecond = 0;
  for (let time of times) {
    if (typeof time !== "number") {
      return "Invalid";
    }
    totalSecond += time;
  }
  const hours = Math.floor(totalSecond / 3600);
  const min = Math.floor((totalSecond % 3600) / 60);
  const second = totalSecond % 60;
  const watchTime = {
    hour: hours,
    minute: min,
    second: second,
  };
  return watchTime;
}

// const times = [1000, 2000, 725];
// const times = [100, 99, 119, 300];
const times = [100, 99, 119, "300"];

console.log(calculateWatchTime(times));
