import { Triangle } from './../src/triangle';
describe('Triangle', function()
{
  var tempTriangle;

  beforeEach(function() {
    tempTriangle = new Triangle(5, 5, 5);
  });

  it('should show how beforeEach() works', function() {
    console.log(tempTriangle);
  });

  it('should test whether a Triangle has three sides', function() {
    tempTriangle.Set(3,4,5);
    expect(tempTriangle.side1).toEqual(3);
    expect(tempTriangle.side2).toEqual(4);
    expect(tempTriangle.side3).not.toEqual(6);
  });

  it('should correctly determine whether three lengths can be made into a triangle', function() {
    tempTriangle.Set(3,9,22);
    expect(tempTriangle.Type()).toEqual("Not a Triangle");
  });

  it('should determine type of triangle', function() {
    tempTriangle.Set(3,3,3);
    expect(tempTriangle.Type()).toEqual("Equalateral");
  });

  it('should determine type of triangle', function() {
    tempTriangle.Set(3,4,3);
    expect(tempTriangle.Type()).toEqual("Isosceles");
  });

  it('should determine type of triangle', function() {
    tempTriangle.Set(3,4,6);
    expect(tempTriangle.Type()).toEqual("Scalene");
  });

});
