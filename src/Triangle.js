export class Triangle
{
  constructor(newSide1, newSide2, newSide3)
  {
    this.side1 = newSide1;
    this.side2 = newSide2;
    this.side3 = newSide3;

  }

  Type()
  {
    if((this.side1 === this.side2) && (this.side2 === this.side3))
    {
      return "Equalateral";
    }
    else if((this.side1 == this.side2) && (this.side2 != this.side3))
    {
      return "Isosceles";
    }
    else
    {
      return "Scalene";
    }
  }

  checkType() {
    if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
      return "not a triangle";
    }
  }
}
