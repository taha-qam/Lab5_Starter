// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber tests
test('Check number with dashes', () => {
  expect(isPhoneNumber("510-825-9602")).toBe(true);
});

test('Check valid phone number with random letters', () => {
  expect(isPhoneNumber("510a82b5960-2")).toBe(false);
});

test('Check valid phone number with extra digits', () => {
  expect(isPhoneNumber("51082596022")).toBe(false);
});

test('Check typical phone number format', () => {
  expect(isPhoneNumber("(510) 825-9602")).toBe(true);
});

// isEmail tests
test('Check typical email format', () => {
  expect(isEmail("tahaqamar10@gmail.com")).toBe(true);
});

test('Check school email', () => {
  expect(isEmail("tqamar@ucsd.edu")).toBe(true);
});

test('Check added symbols', () => {
  expect(isEmail("tahaqamar+10@gmail.com")).toBe(false);
});

test('Check without @domain.com', () => {
  expect(isEmail("tahaqamar10")).toBe(false);
});

// isStrongPassword tests
test('check with uppercase, symbol', () => {
  expect(isStrongPassword("notMyPassw0rd")).toBe(true);
});

test('uppercase, short password (less than 4 char)', () => {
  expect(isStrongPassword("Duh")).toBe(false);
});

test('check with only uppercase, no symbol', () => {
  expect(isStrongPassword("notMyPassword")).toBe(true);
});

test('check with long length, no symbol/etc', () => {
  expect(isStrongPassword("notmypasswordatall")).toBe(false);
});


// isDate tests
test('normal date format', () => {
  expect(isDate("10/12/2004")).toBe(true);
});

test('shortened year', () => {
  expect(isDate("10/12/04")).toBe(false);
});

test('no formatting', () => {
  expect(isDate("10122004")).toBe(false);
});

test('single digit month', () => {
  expect(isDate("1/14/2004")).toBe(true);
});

// isHexColor tests
test('3 char code', () => {
  expect(isHexColor("AF0")).toBe(true);
});

test('6 char code', () => {
  expect(isHexColor("AF0212")).toBe(true);
});

test('7 char code', () => {
  expect(isHexColor("A14F04B")).toBe(false);
});

test('Added symbols', () => {
  expect(isHexColor("A-B20E0")).toBe(false);
});