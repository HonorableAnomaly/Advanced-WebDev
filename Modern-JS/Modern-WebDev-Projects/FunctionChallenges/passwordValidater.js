// My example
function isValidPassword(password, username) {
  const pw = password.trim();
  if (pw.length < 8) {
    return false;
  } else {
    return true;
  }
}

// Example case
function isValidPassword1(password, username) {
  const pw = password;
  if (pw.length < 8) {
    return false;
  }
  if (pw.indexOf(" ") !== -1) {
    return false;
  }
  if (pw.indexOf(username) !== -1) {
    return false;
  }
  return true;
}

// Example case #2
function isValidPassword2(password, username) {
  const pw = password;
  if (pw.length < 8 || pw.indexOf(" ") !== -1 || pw.indexOf(username) !== -1) {
    return false;
  }
  return true;
}

// Example case #3
function isValidPassword3(password, username) {
  const pw = password;
  const tooShort = pw.length < 8;
  const spaces = pw.indexOf(" ") !== -1;
  const hasUsername = pw.indexOf(username) !== -1;
  if (tooShort || spaces || hasUsername) return false;
  return true;
}

// Example case #4
function isValidPassword4(password, username) {
  const pw = password;
  const tooShort = pw.length < 8;
  const spaces = pw.indexOf(" ") !== -1;
  const hasUsername = pw.indexOf(username) !== -1;
  if (!tooShort && !spaces && !hasUsername) return true;
  return false;
}

// Example case #5
function isValidPassword5(password, username) {
  const pw = password;
  const tooShort = pw.length < 8;
  const spaces = pw.indexOf(" ") !== -1;
  const hasUsername = pw.indexOf(username) !== -1;
  return !tooShort && !spaces && !hasUsername;
}
