export class Fraction {
  private readonly numerator: number;
  private readonly denominator: number;

  private static ZERO = new Fraction(0, 1);
  static {
    Fraction.ZERO.plus = (fraction: Fraction) => {
      return fraction;
    };
  }

  protected constructor(numerator: number, denominator: number) {
    this.numerator = numerator;
    this.denominator = denominator;
  }

  static of(numerator: number, denominator: number = 1): Fraction {
    this.checkCreationRules(denominator, numerator);
    if (numerator === 0) {
      return this.ZERO;
    }
    return new Fraction(numerator, denominator);
  }

  private static checkCreationRules(denominator: number, numerator: number) {
    if (denominator === 0) {
      throw new Error("Denominator cannot be 0");
    }
    if (!this.isInteger(numerator)) {
      throw new Error("Numerator must be an integer");
    }
    if (!this.isInteger(denominator)) {
      throw new Error("Denominator must be an integer");
    }
  }

  plus(fraction: Fraction): Fraction {
    if (this.denominator === fraction.denominator) {
      return Fraction.of(
        this.numerator + fraction.numerator,
        fraction.denominator,
      );
    } else {
      const newNumerator =
        this.numerator * fraction.denominator +
        fraction.numerator * this.denominator;
      return Fraction.of(newNumerator, this.denominator * fraction.denominator);
    }
  }

  minus(fraction: Fraction): Fraction {
    return this.plus(this.opposite(fraction));
  }

  toString(): string {
    if (this.denominator == 1) {
      return this.numerator.toString();
    }
    return `${this.numerator}/${this.denominator}`;
  }

  private opposite(fraction: Fraction) {
    return Fraction.of(-fraction.numerator, fraction.denominator);
  }

  private static isInteger(num: number): boolean {
    return Math.floor(num) === num;
  }
}
