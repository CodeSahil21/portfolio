"use server";

let loveCountValue = 0;

export async function getLoveCountServerAction() {
  return {
    success: true,
    count: loveCountValue,
  };
}

export async function setLoveCountServerAction() {
  loveCountValue += 1;
  return {
    success: true,
    count: loveCountValue,
  };
}
