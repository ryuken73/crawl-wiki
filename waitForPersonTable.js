const { expect } = require('@playwright/test');

const waitForPersonTable = async (page, name) => {
  const exactNameHeading = page.getByRole('heading', { name });
  const someChars = new RegExp(name.substr(1, 3));
  const regexpNameHeading = page.getByRole('heading', { name: someChars }).first();
  try {
    await expect(exactNameHeading.or(regexpNameHeading).getByRole('link')).toBeAttached();
    retrun; true;
  } catch (err) {
    return false;
  }
};
exports.waitForPersonTable = waitForPersonTable;
