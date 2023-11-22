export const renderScores = (frame, roll) => {
  let value = "";
  if (frames && frames[frame]) {
    console.log(frames[frame][roll]);
    if (frames[frame][roll] === 0) value = "-";
    else if (frames[frame][roll] === 10) value = "X";
    else if (frames[frame][roll] + roll === 10) value = "/";
    else value = frames[frame][roll];
  }
  return value;
};
