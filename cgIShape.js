class cgIShape {
    constructor () {
        this.points = [];
        this.bary = [];
        this.indices = [];
    }
    
    addTriangle (x0,y0,z0,x1,y1,z1,x2,y2,z2) {
        var nverts = this.points.length / 4;
        
        // push first vertex
        this.points.push(x0);  this.bary.push (1.0);
        this.points.push(y0);  this.bary.push (0.0);
        this.points.push(z0);  this.bary.push (0.0);
        this.points.push(1.0);
        this.indices.push(nverts);
        nverts++;
        
        // push second vertex
        this.points.push(x1); this.bary.push (0.0);
        this.points.push(y1); this.bary.push (1.0);
        this.points.push(z1); this.bary.push (0.0);
        this.points.push(1.0);
        this.indices.push(nverts);
        nverts++
        
        // push third vertex
        this.points.push(x2); this.bary.push (0.0);
        this.points.push(y2); this.bary.push (0.0);
        this.points.push(z2); this.bary.push (1.0);
        this.points.push(1.0);
        this.indices.push(nverts);
        nverts++;
    }
}

class Cube extends cgIShape {
    
    constructor (subdivisions) {
        super();
        this.makeCube (subdivisions);
    }
    
    makeCube(subdivisions) {

        // fill in your code here.
        // delete the code below first.
        let step = 1 / subdivisions;


        for (let x = 0; x < subdivisions; x++) {
            for (let y = 0; y < subdivisions; y++) {
                // face 1 top
                this.addTriangle(-0.5 + step * x, 0.5 - step * y, 0.5,
                    -0.5 + step * (x + 1), 0.5 - step * (y + 1), 0.5,
                    -0.5 + step * (x + 1), 0.5 - step * y, 0.5);
                this.addTriangle(-0.5 + step * x, 0.5 - step * y, 0.5,
                    -0.5 + step * x, 0.5 - step * (y + 1), 0.5,
                    -0.5 + step * (x + 1), 0.5 - step * (y + 1), 0.5);

                // face 2 bottom
                this.addTriangle(-0.5 + step * (x + 1), 0.5 - step * y, -0.5,
                    -0.5 + step * (x + 1), 0.5 - step * (y + 1), -0.5,
                    -0.5 + step * x, 0.5 - step * y, -0.5);
                this.addTriangle(-0.5 + step * (x + 1), 0.5 - step * (y + 1), -0.5,
                    -0.5 + step * x, 0.5 - step * (y + 1), -0.5,
                    -0.5 + step * x, 0.5 - step * y, -0.5);

                // face 3

                this.addTriangle(-0.5 + step * x, 0.5, 0.5 - step * y,
                    -0.5 + step * (x + 1), 0.5, 0.5 - step * (y + 1),
                    -0.5 + step * (x + 1), 0.5, 0.5 - step * y);
                this.addTriangle(-0.5 + step * x, 0.5, 0.5 - step * y,
                    -0.5 + step * x, 0.5, 0.5 - step * (y + 1),
                    -0.5 + step * (x + 1), 0.5, 0.5 - step * (y + 1));

                // face 4
                this.addTriangle(-0.5 + step * x, -0.5, 0.5 - step * y,
                    -0.5 + step * (x + 1), -0.5, 0.5 - step * (y + 1),
                    -0.5 + step * (x + 1), -0.5, 0.5 - step * y);
                this.addTriangle(-0.5 + step * x, -0.5, 0.5 - step * y,
                    -0.5 + step * x, -0.5, 0.5 - step * (y + 1),
                    -0.5 + step * (x + 1), -0.5, 0.5 - step * (y + 1));

                // face 5
                this.addTriangle(0.5, 0.5 - step * y, -0.5 + step * x,
                    0.5, 0.5 - step * (y + 1), -0.5 + step * (x + 1),
                    0.5, 0.5 - step * y, -0.5 + step * (x + 1));
                this.addTriangle(0.5, 0.5 - step * y, -0.5 + step * x,
                    0.5, 0.5 - step * (y + 1), -0.5 + step * x,
                    0.5, 0.5 - step * (y + 1), -0.5 + step * (x + 1));

                // face 6
                this.addTriangle(-0.5, 0.5 - step * y, -0.5 + step * x,
                    -0.5, 0.5 - step * (y + 1), -0.5 + step * (x + 1),
                    -0.5, 0.5 - step * y, -0.5 + step * (x + 1));
                this.addTriangle(-0.5, 0.5 - step * y, -0.5 + step * x,
                    -0.5, 0.5 - step * (y + 1), -0.5 + step * x,
                    -0.5, 0.5 - step * (y + 1), -0.5 + step * (x + 1));

            }
        }
    }
}


class Cylinder extends cgIShape {

    constructor(radialdivision, heightdivision) {
        super();
        this.makeCylinder(radialdivision, heightdivision);
    }

    makeCylinder(radialdivision, heightdivision) {
        // fill in your cylinder code here
    }
}

class Cone extends cgIShape {

    constructor(radialdivision, heightdivision) {
        super();
        this.makeCone(radialdivision, heightdivision);
    }


    makeCone(radialdivision, heightdivision) {

        // Fill in your cone code here.
    }
}

class Sphere extends cgIShape {

    constructor(slices, stacks) {
        super();
        this.makeSphere(slices, stacks);
    }

    makeSphere(slices, stacks) {
        // fill in your sphere code here
    }

}


function radians(degrees) {
    var pi = Math.PI;
    return degrees * (pi / 180);
}

