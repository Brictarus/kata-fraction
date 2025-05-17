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
    if (numerator === 0) {
      return this.ZERO;
    }
    return new Fraction(numerator, denominator);
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

  toString(): string {
    if (this.denominator == 1) {
      return this.numerator.toString();
    }
    return `${this.numerator}/${this.denominator}`;
  }
}
