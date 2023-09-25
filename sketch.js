const canvasSketch = require('canvas-sketch');

const settings = {
	dimensions: [2048, 2048],
	// dimensions:
};

const sketch = () => {
	return ({ context, width, height }) => {
		context.fillStyle = 'white';
		context.fillRect(0, 0, width, height);

		context.fillStyle = 'black';
		context.lineWidth = '20';
		context.beginPath();

		for (let i = 0; i < 500; i++) {
			context.rect(
				Math.random() * 2048,
				Math.random() * 2048,
				Math.random() * 50,
				Math.random() * 50
			);
			context.stroke();
		}
	};
};

canvasSketch(sketch, settings);
