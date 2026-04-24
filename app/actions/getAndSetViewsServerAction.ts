'use server';

let viewsCount = 0;

export async function getViewsServerAction() {
  return {
    success: true,
    message: viewsCount,
  };
}

export async function setViewsServerAction() {
  viewsCount += 1;
  return {
    success: true,
    message: 'Views set successfully',
  };
}
