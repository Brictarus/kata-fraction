import { describe, expect, it } from "vitest";
import { Fraction } from "./fraction.ts";

describe("Fraction", () => {
  describe("creation rules", () => {
    it("should fail if denominator is 0", () => {
      expect(() => Fraction.of(1, 0)).toThrowError("Denominator cannot be 0");
    });

    it("should fail if numerator is not an integer", () => {
      expect(() => Fraction.of(1.12)).toThrowError(
        "Numerator must be an integer",
      );
    });

    it("should fail if denominator is not an integer", () => {
      expect(() => Fraction.of(5, 1.12)).toThrowError(
        "Denominator must be an integer",
      );
    });
  });

  describe("plus", () => {
    it("0 + 0 = 0", () => {
      const addition = Fraction.of(0).plus(Fraction.of(0));
      expect(addition.toString()).toEqual("0");
    });

    it("integerA + 0 = integerA", () => {
      const addition = Fraction.of(5).plus(Fraction.of(0));
      expect(addition.toString()).toEqual("5");
    });

    it("0 + integerA = integerA", () => {
      const addition = Fraction.of(0).plus(Fraction.of(5));
      expect(addition.toString()).toEqual("5");
    });

    it("should sum integers", () => {
      const addition = Fraction.of(2).plus(Fraction.of(3));
      expect(addition.toString()).toEqual("5");
    });

    it("0 + fractionA = fractionA", () => {
      const addition = Fraction.of(0).plus(Fraction.of(1, 6));
      expect(addition.toString()).toEqual("1/6");
    });

    it("fractionA + 0 = fractionA", () => {
      const addition = Fraction.of(1, 6).plus(Fraction.of(0));
      expect(addition.toString()).toEqual("1/6");
    });

    it("same denominator should sum numerators", () => {
      const addition = Fraction.of(1, 6).plus(Fraction.of(4, 6));
      expect(addition.toString()).toEqual("5/6");
    });

    it("should sum with different denominators", () => {
      const addition = Fraction.of(1, 2).plus(Fraction.of(1, 3));
      expect(addition.toString()).toEqual("5/6");
    });
  });
});
