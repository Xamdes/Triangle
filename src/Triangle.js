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
    var side1a2 = this.side1 === this.side2;
    var side1a3 = this.side1 === this.side3;
    var side2a3 = this.side2 === this.side3;

    if(!this.IsTriangle())
    {
      return "Not a Triangle";
    }
    else if(side1a2 && side2a3)
    {
      return "Equalateral";
    }
    else if(side1a2 && (!side1a3) || (side2a3 && !side1a2) || (side1a3 && (!side1a2)))
    {
      return "Isosceles";
    }
    else
    {
      return "Scalene";
    }
  }

  IsTriangle()
  {
    return !((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2)));
  }

  Set(newSide1,newSide2,newSide3)
  {
    this.side1 = newSide1;
    this.side2 = newSide2;
    this.side3 = newSide3;
  }
}
