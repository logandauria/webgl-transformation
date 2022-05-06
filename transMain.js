'use strict';

// Global variables that are set and used
// across the application
let gl, program;

// Global declarations of objects that you will be drawing
var myTeapot = null;
var myCube = null;

var myPedestalTop1 = null;
var myPedestalBot1 = null;
var myPedestalMid1 = null;

var myPedestalTop2 = null;
var myPedestalBot2 = null;
var myPedestalMid2 = null;


//
// A function that creates shapes to be drawn and creates a VAO for each
//
// We start you out with an example for the teapot.
//
function createShapes() {

    myTeapot = new Teapot();
    myTeapot.VAO = bindVAO (myTeapot);
    myCube = new Cube(5);
    myCube.VAO = bindVAO(myCube);

    myPedestalTop1 = new Cube(3);
    myPedestalTop1.VAO = bindVAO(myPedestalTop1);
    myPedestalBot1 = new Cube(3);
    myPedestalBot1.VAO = bindVAO(myPedestalBot1);
    myPedestalMid1 = new Cube(3);
    myPedestalMid1.VAO = bindVAO(myPedestalMid1);

    myPedestalTop2 = new Cube(3);
    myPedestalTop2.VAO = bindVAO(myPedestalTop2);
    myPedestalBot2 = new Cube(3);
    myPedestalBot2.VAO = bindVAO(myPedestalBot2);
    myPedestalMid2 = new Cube(3);
    myPedestalMid2.VAO = bindVAO(myPedestalMid2);

}


//
// Set up your camera and your projection matrices
//
function setUpCamera() {
    
    // set up your projection
    // default is orthographic projection
    let projMatrix = glMatrix.mat4.create();
    glMatrix.mat4.perspective(projMatrix, radians(75), 1, 0.5, null);
    gl.uniformMatrix4fv (program.uProjT, false, projMatrix);

    
    // set up your view
    // default is at (0,0,-5) looking at the origin
    let viewMatrix = glMatrix.mat4.create();
    glMatrix.mat4.lookAt(viewMatrix, [0, 3, -5], [0, 0, 0], [0, 1, 0]);
    gl.uniformMatrix4fv (program.uViewT, false, viewMatrix);
}


//
// Use this function to draw all of your shapes.
// Recall that VAOs should have been set up the call to createShapes()
// You'll have to provide a Model Matrix for each shape to be drawn that
// places the object in the world.
//
// An example is shown for placing the teapot
//
function drawShapes() {
    

    let cubeTranslation = [3, 2, 0];
    let teapotTransform = [0, 1.5, 0];
    let pedestalTop1Translation = [3, 1, 0];
    let pedestalBot1Translation = [3, -1, 0];
    let pedestalMid1Trans = [3, 0, 0];
    let pedestalTop2Translation = [0, 1, 0];
    let pedestalBot2Translation = [0, -1, 0];
    let pedestalMid2Trans = [0, 0, 0];
    let pedestalTopScale = [1.5, 0.3, 1.5];
    let pedestalMidScale = [1, 2, 1];

    // cube
    let cubeMatrix = glMatrix.mat4.create();
    glMatrix.mat4.translate(cubeMatrix, cubeMatrix, cubeTranslation);
    glMatrix.mat4.rotateY(cubeMatrix, cubeMatrix, radians(100));
    glMatrix.mat4.rotateZ(cubeMatrix, cubeMatrix, radians(100));
    gl.uniformMatrix4fv(program.uModelT, false, cubeMatrix);
    gl.bindVertexArray(myCube.VAO);
    gl.drawElements(gl.TRIANGLES, myCube.indices.length, gl.UNSIGNED_SHORT, 0);

    // teapot
    let modelMatrix = glMatrix.mat4.create();
    glMatrix.mat4.translate (modelMatrix,  modelMatrix, teapotTransform);
    glMatrix.mat4.rotateY (modelMatrix,  modelMatrix, radians(180.0));
    gl.uniformMatrix4fv (program.uModelT, false, modelMatrix);
    gl.bindVertexArray(myTeapot.VAO);
    gl.drawElements(gl.TRIANGLES, myTeapot.indices.length, gl.UNSIGNED_SHORT, 0);


    // pillars
    let pedestalTop1Material = glMatrix.mat4.create();
    glMatrix.mat4.translate(pedestalTop1Material, pedestalTop1Material, pedestalTop1Translation);
    glMatrix.mat4.scale(pedestalTop1Material, pedestalTop1Material, pedestalTopScale);
    gl.uniformMatrix4fv(program.uModelT, false, pedestalTop1Material);
    gl.bindVertexArray(myPedestalTop1.VAO);
    gl.drawElements(gl.TRIANGLES, myPedestalTop1.indices.length, gl.UNSIGNED_SHORT, 0);

    let pedestalBot1Material = glMatrix.mat4.create();
    glMatrix.mat4.translate(pedestalBot1Material, pedestalBot1Material, pedestalBot1Translation);
    glMatrix.mat4.scale(pedestalBot1Material, pedestalBot1Material, pedestalTopScale);
    gl.uniformMatrix4fv(program.uModelT, false, pedestalBot1Material);
    gl.bindVertexArray(myPedestalBot1.VAO);
    gl.drawElements(gl.TRIANGLES, myPedestalBot1.indices.length, gl.UNSIGNED_SHORT, 0);

    let pedestalMid1Material = glMatrix.mat4.create();
    glMatrix.mat4.translate(pedestalMid1Material, pedestalMid1Material, pedestalMid1Trans);
    glMatrix.mat4.scale(pedestalMid1Material, pedestalMid1Material, pedestalMidScale);
    gl.uniformMatrix4fv(program.uModelT, false, pedestalMid1Material);
    gl.bindVertexArray(myPedestalMid1.VAO);
    gl.drawElements(gl.TRIANGLES, myPedestalMid1.indices.length, gl.UNSIGNED_SHORT, 0);

    let pedestalTop2Material = glMatrix.mat4.create();
    glMatrix.mat4.translate(pedestalTop2Material, pedestalTop2Material, pedestalTop2Translation);
    glMatrix.mat4.scale(pedestalTop2Material, pedestalTop2Material, pedestalTopScale);
    gl.uniformMatrix4fv (program.uModelT, false, pedestalTop2Material);
    gl.bindVertexArray(myPedestalTop1.VAO);
    gl.drawElements(gl.TRIANGLES, myPedestalTop1.indices.length, gl.UNSIGNED_SHORT, 0);

    let pedestalBot2Material = glMatrix.mat4.create();
    glMatrix.mat4.translate(pedestalBot2Material, pedestalBot2Material, pedestalBot2Translation);
    glMatrix.mat4.scale(pedestalBot2Material, pedestalBot2Material, pedestalTopScale);
    gl.uniformMatrix4fv (program.uModelT, false, pedestalBot2Material);
    gl.bindVertexArray(myPedestalBot1.VAO);
    gl.drawElements(gl.TRIANGLES, myPedestalBot1.indices.length, gl.UNSIGNED_SHORT, 0);

    let pedestalMid2Material = glMatrix.mat4.create();
    glMatrix.mat4.translate(pedestalMid2Material, pedestalMid2Material, pedestalMid2Trans);
    glMatrix.mat4.scale(pedestalMid2Material, pedestalMid2Material, pedestalMidScale);
    gl.uniformMatrix4fv (program.uModelT, false, pedestalMid2Material);
    gl.bindVertexArray(myPedestalMid1.VAO);
    gl.drawElements(gl.TRIANGLES, myPedestalMid1.indices.length, gl.UNSIGNED_SHORT, 0);
}

///////////////////////////////////////////////////////////////////
//
//   You shouldn't have to edit below this line
//
///////////////////////////////////////////////////////////////////

  // Given an id, extract the content's of a shader script
  // from the DOM and return the compiled shader
  function getShader(id) {
    const script = document.getElementById(id);
    const shaderString = script.text.trim();

    // Assign shader depending on the type of shader
    let shader;
    if (script.type === 'x-shader/x-vertex') {
      shader = gl.createShader(gl.VERTEX_SHADER);
    }
    else if (script.type === 'x-shader/x-fragment') {
      shader = gl.createShader(gl.FRAGMENT_SHADER);
    }
    else {
      return null;
    }

    // Compile the shader using the supplied shader code
    gl.shaderSource(shader, shaderString);
    gl.compileShader(shader);

    // Ensure the shader is valid
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(shader));
      return null;
    }

    return shader;
  }

  // Create a program with the appropriate vertex and fragment shaders
  function initProgram() {
    const vertexShader = getShader('vertex-shader');
    const fragmentShader = getShader('fragment-shader');

    // Create a program
    program = gl.createProgram();
    // Attach the shaders to this program
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Could not initialize shaders');
    }

    // Use this program instance
    gl.useProgram(program);
    // We attach the location of these shader values to the program instance
    // for easy access later in the code
    program.aVertexPosition = gl.getAttribLocation(program, 'aVertexPosition');
    program.aBary = gl.getAttribLocation(program, 'bary');
    program.uModelT = gl.getUniformLocation (program, 'modelT');
    program.uViewT = gl.getUniformLocation (program, 'viewT');
    program.uProjT = gl.getUniformLocation (program, 'projT');
  }

  // creates a VAO and returns its ID
  function bindVAO (shape) {
      //create and bind VAO
      let theVAO = gl.createVertexArray();
      gl.bindVertexArray(theVAO);
      
      // create and bind vertex buffer
      let myVertexBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, myVertexBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(shape.points), gl.STATIC_DRAW);
      gl.enableVertexAttribArray(program.aVertexPosition);
      gl.vertexAttribPointer(program.aVertexPosition, 4, gl.FLOAT, false, 0, 0);
      
      // create and bind bary buffer
      let myBaryBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, myBaryBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(shape.bary), gl.STATIC_DRAW);
      gl.enableVertexAttribArray(program.aBary);
      gl.vertexAttribPointer(program.aBary, 3, gl.FLOAT, false, 0, 0);
      
      // Setting up the IBO
      let myIndexBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, myIndexBuffer);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(shape.indices), gl.STATIC_DRAW);

      // Clean
      gl.bindVertexArray(null);
      gl.bindBuffer(gl.ARRAY_BUFFER, null);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
      
      return theVAO;
    
  }

  
  // We call draw to render to our canvas
  function draw() {
    // Clear the scene
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
      
    // draw your shapes
    drawShapes();

    // Clean
    gl.bindVertexArray(null);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
  }

  // Entry point to our application
  function init() {
      
    // Retrieve the canvas
    const canvas = document.getElementById('webgl-canvas');
    if (!canvas) {
      console.error(`There is no canvas with id ${'webgl-canvas'} on this page.`);
      return null;
    }


    // Retrieve a WebGL context
    gl = canvas.getContext('webgl2');
    if (!gl) {
        console.error(`There is no WebGL 2.0 context`);
        return null;
      }
      
    // Set the clear color to be black
    gl.clearColor(0, 0, 0, 1);
      
    // some GL initialization
    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.CULL_FACE);
    
    gl.cullFace(gl.BACK);
    gl.frontFace(gl.CCW);
    gl.clearColor(0.0,0.0,0.0,1.0)
    gl.depthFunc(gl.LEQUAL)
    gl.clearDepth(1.0)

    // Read, compile, and link your shaders
    initProgram();
    
    // create and bind your current object
    createShapes();
    
    // set up your camera
    setUpCamera();
    
    // do a draw
    draw();
  }
