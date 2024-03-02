describe('Crawler class', function() {
    let rambo = new Crawler(200, 200, 'yellow', 50, 50);

    it('should be a number for x', function() {
        expect(typeof rambo.x).toBe('number');
    });

    it('should be a number for y', function() {
        expect(typeof rambo.y).toBe('number');
    });

    it('should be a string for color', function() {
        expect(typeof rambo.color).toBe('string');
    });

    it('should be a number for width', function() {
        expect(typeof rambo.width).toBe('number');
    });

    it('should be a number for height', function() {
        expect(typeof rambo.height).toBe('number');
    });

    it('should be a boolean for alive', function() {
        expect(typeof rambo.alive).toBe('boolean');
    });
});
