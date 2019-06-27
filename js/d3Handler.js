	var svgObject, circle1, circle2, circle3, circle4, line1, line2, line3, line4, c1a, c1b, c2a, c2b, c3a, c3b, c4a, c4b,
		c12, c23, c34, c41, highlighter, cSquare, SPACE_BUFFER = 10,
		hc1l, hc1r, hc2t, hc2b, hc3l, hc3r, hc4t, hc4b;

	function distanceBetweenCircles(circle1, circle2) {
		var sideLength = Math.sqrt(Math.pow(circle1.attr('cx') - circle2.attr('cx'), 2) +
			Math.pow(circle1.attr('cy') - circle2.attr('cy'), 2))
		return sideLength;
	}

	function getAngleDeg(ax, ay, bx, by) {
		var angleRad = Math.atan((ay - by) / (ax - bx));
		var angleDeg = angleRad * 180 / Math.PI;
		console.log(angleDeg)
		return (angleDeg);
	}

	window.addEventListener("load", function () {

		svgObject = document;
		circle1 = d3.select('#P1');
		circle2 = d3.select('#P2');
		circle3 = d3.select('#P3');
		circle4 = d3.select('#P4');

		line1 = d3.select('#L1');
		line2 = d3.select('#L2');
		line3 = d3.select('#L3');
		line4 = d3.select('#L4');

		c1a = d3.select('#c1a');
		c1b = d3.select('#c1b');
		c2a = d3.select('#c2a');
		c2b = d3.select('#c2b');
		c3a = d3.select('#c3a');
		c3b = d3.select('#c3b');
		c4a = d3.select('#c4a');
		c4b = d3.select('#c4b');

		c12 = d3.select('#c12');
		c23 = d3.select('#c23');
		c34 = d3.select('#c34');

		function updateLabelPositions() {

			c3a.attr('x', circle3.attr('cx') / 2.0)
			c3b.attr('x', circle3.attr('cx') / 2 + (boundingBox1.attr('width') / 2))

			c2b.attr('y', circle2.attr('cy') / 2.0)
			c2a.attr('y', circle2.attr('cy') / 2 + (boundingBox1.attr('height') / 2))

			c1b.attr('x', circle1.attr('cx') / 2.0)
			c1a.attr('x', circle1.attr('cx') / 2 + (boundingBox1.attr('width') / 2))

			c4a.attr('y', circle4.attr('cy') / 2.0)
			c4b.attr('y', circle4.attr('cy') / 2 + (boundingBox1.attr('width') / 2))

			c12.attr('x', (parseFloat(circle1.attr('cx')) + parseFloat(circle2.attr('cx'))) / 2.0)
			c12.attr('y', (parseFloat(circle1.attr('cy')) + parseFloat(circle2.attr('cy'))) / 2.0)

			c12.attr('x', (parseFloat(circle1.attr('cx')) +
				parseFloat(circle2.attr('cx'))) / 2.0 + SPACE_BUFFER)
			c12.attr('y', (parseFloat(circle1.attr('cy')) +
				parseFloat(circle2.attr('cy'))) / 2.0 - SPACE_BUFFER)

			c23.attr('x', (parseFloat(circle2.attr('cx')) +
				parseFloat(circle3.attr('cx'))) / 2.0 + SPACE_BUFFER)
			c23.attr('y', (parseFloat(circle2.attr('cy')) +
				parseFloat(circle3.attr('cy'))) / 2.0 + SPACE_BUFFER)

			c34.attr('x', (parseFloat(circle3.attr('cx')) +
				parseFloat(circle4.attr('cx'))) / 2.0 - SPACE_BUFFER)
			c34.attr('y', (parseFloat(circle3.attr('cy')) +
				parseFloat(circle4.attr('cy'))) / 2.0 + SPACE_BUFFER)

			c41.attr('x', (parseFloat(circle4.attr('cx')) +
				parseFloat(circle1.attr('cx'))) / 2.0 - SPACE_BUFFER)
			c41.attr('y', (parseFloat(circle4.attr('cy')) +
				parseFloat(circle1.attr('cy'))) / 2.0 - SPACE_BUFFER)

		}

		function updateLineHighlights() {

			hc1l.attr('x2', circle1.attr('cx'))
			hc1r.attr('x1', circle1.attr('cx'))

			hc2t.attr('y2', circle2.attr('cy'))
			hc2b.attr('y1', circle2.attr('cy'))

			hc3l.attr('x2', circle3.attr('cx'))
			hc3r.attr('x1', circle3.attr('cx'))

			hc4t.attr('y2', circle4.attr('cy'))
			hc4b.attr('y1', circle4.attr('cy'))
		}

		function updateLinesOnCircleMovement() {

			line1.attr('x1', circle1.attr('cx'))
			line1.attr('y2', circle2.attr('cy'))

			line2.attr('y1', circle2.attr('cy'))
			line2.attr('x2', circle3.attr('cx'))

			line3.attr('x1', circle3.attr('cx'))
			line3.attr('y2', circle4.attr('cy'))

			line4.attr('y1', circle4.attr('cy'))
			line4.attr('x2', circle1.attr('cx'))
		}

		function updateLabelPositions() {
			c3a.attr('x', circle3.attr('cx') / 2.0)
			c3b.attr('x', circle3.attr('cx') / 2 + (boundingBox1.attr('width') / 2))

			c2b.attr('y', circle2.attr('cy') / 2.0)
			c2a.attr('y', circle2.attr('cy') / 2 + (boundingBox1.attr('height') / 2))

			c1b.attr('x', circle1.attr('cx') / 2.0)
			c1a.attr('x', circle1.attr('cx') / 2 + (boundingBox1.attr('width') / 2))

			c4a.attr('y', circle4.attr('cy') / 2.0)
			c4b.attr('y', circle4.attr('cy') / 2 + (boundingBox1.attr('width') / 2))

			c12.attr('x', (parseFloat(circle1.attr('cx')) + parseFloat(circle2.attr('cx'))) / 2.0)
			c12.attr('y', (parseFloat(circle1.attr('cy')) + parseFloat(circle2.attr('cy'))) / 2.0)

			c12.attr('x', (parseFloat(circle1.attr('cx')) +
				parseFloat(circle2.attr('cx'))) / 2.0 + SPACE_BUFFER)
			c12.attr('y', (parseFloat(circle1.attr('cy')) +
				parseFloat(circle2.attr('cy'))) / 2.0 - SPACE_BUFFER)

			c23.attr('x', (parseFloat(circle2.attr('cx')) +
				parseFloat(circle3.attr('cx'))) / 2.0 + SPACE_BUFFER)
			c23.attr('y', (parseFloat(circle2.attr('cy')) +
				parseFloat(circle3.attr('cy'))) / 2.0 + SPACE_BUFFER)

			c34.attr('x', (parseFloat(circle3.attr('cx')) +
				parseFloat(circle4.attr('cx'))) / 2.0 - SPACE_BUFFER)
			c34.attr('y', (parseFloat(circle3.attr('cy')) +
				parseFloat(circle4.attr('cy'))) / 2.0 + SPACE_BUFFER)

			c41.attr('x', (parseFloat(circle4.attr('cx')) +
				parseFloat(circle1.attr('cx'))) / 2.0 - SPACE_BUFFER)
			c41.attr('y', (parseFloat(circle4.attr('cy')) +
				parseFloat(circle1.attr('cy'))) / 2.0 - SPACE_BUFFER)

		}

		function updateLineHighlights() {

			hc1l.attr('x2', circle1.attr('cx'))
			hc1r.attr('x1', circle1.attr('cx'))

			hc2t.attr('y2', circle2.attr('cy'))
			hc2b.attr('y1', circle2.attr('cy'))

			hc3l.attr('x2', circle3.attr('cx'))
			hc3r.attr('x1', circle3.attr('cx'))

			hc4t.attr('y2', circle4.attr('cy'))
			hc4b.attr('y1', circle4.attr('cy'))
		}

		c41 = d3.select('#c41');
		cSquare = d3.select('#cSquare');

		hc1l = d3.select('#HC1L');
		hc1r = d3.select('#HC1R');

		hc2t = d3.select('#HC2T');
		hc2b = d3.select('#HC2B');

		hc3l = d3.select('#HC3L');
		hc3r = d3.select('#HC3R');

		hc4t = d3.select('#HC4T');
		hc4b = d3.select('#HC4B');

		highlighter = d3.select('#highlighter');

		boundingBox1 = d3.select('#B1');

		var prevX = 0,
			prevY = 0

		d3.selectAll(".draggable").on("mousedown", function () {
			var div = d3.select(this).classed("enabled", true).classed("disabled", false);
			prevX = d3.mouse(div.node())[0]
			prevY = d3.mouse(div.node())[1]

			var w = d3.select(window)
				.on("mousemove", mousemove)
				.on("mouseup", mouseup);

			d3.event.preventDefault(); // disable text dragging

			function mousemove() {

				currentX = d3.mouse(div.node())[0]
				currentY = d3.mouse(div.node())[1]

				var delX = currentX - prevX;
				var delY = currentY - prevY;
				var delChange = null;
				var clockwiseRotation = true;

				prevX = currentX
				prevY = currentY

				var idOfSelected = null;

				d3.selectAll('circle.enabled').each(function () {
					idOfSelected = d3.select(this).attr('id');
				});

				if (idOfSelected == 'P1') {
					if (delX > 0) {
						clockwiseRotation = false;
					} else {
						clockwiseRotation = true;
					}

					delChange = Math.abs(delX)
					d3.select('#HC1L').classed('enabled', true);
					d3.select('#HC1R').classed('enabled', true);

					d3.select('#HC1L').classed('disabled', false);
					d3.select('#HC1R').classed('disabled', false);

				} else if (idOfSelected == 'P2') {
					if (delY > 0) {
						clockwiseRotation = false;
					} else {
						clockwiseRotation = true;
					}
					delChange = Math.abs(delY)
					d3.select('#HC2T').classed('enabled', true);
					d3.select('#HC2B').classed('enabled', true);

					d3.select('#HC2T').classed('disabled', false);
					d3.select('#HC2B').classed('disabled', false);
				} else if (idOfSelected == 'P3') {
					if (delX > 0) {
						clockwiseRotation = true;
					} else {
						clockwiseRotation = false;
					}

					delChange = Math.abs(delX)
					d3.select('#HC3L').classed('enabled', true);
					d3.select('#HC3R').classed('enabled', true);

					d3.select('#HC3L').classed('disabled', false);
					d3.select('#HC3R').classed('disabled', false);
				} else if (idOfSelected == 'P4') {
					if (delY > 0) {
						clockwiseRotation = true;
					} else {
						clockwiseRotation = false;
					}

					delChange = Math.abs(delY)
					d3.select('#HC4T').classed('enabled', true);
					d3.select('#HC4B').classed('enabled', true);

					d3.select('#HC4T').classed('disabled', false);
					d3.select('#HC4B').classed('disabled', false);
				}

				if (clockwiseRotation) {
					d3.select('#P1').attr('cx', parseFloat(d3.select('#P1').attr('cx')) - delChange)
					d3.select('#P2').attr('cy', parseFloat(d3.select('#P2').attr('cy')) - delChange)
					d3.select('#P3').attr('cx', parseFloat(d3.select('#P3').attr('cx')) + delChange)
					d3.select('#P4').attr('cy', parseFloat(d3.select('#P4').attr('cy')) + delChange)
				} else {
					d3.select('#P1').attr('cx', parseFloat(d3.select('#P1').attr('cx')) + delChange)
					d3.select('#P2').attr('cy', parseFloat(d3.select('#P2').attr('cy')) + delChange)
					d3.select('#P3').attr('cx', parseFloat(d3.select('#P3').attr('cx')) - delChange)
					d3.select('#P4').attr('cy', parseFloat(d3.select('#P4').attr('cy')) - delChange)
				}

				updateLinesOnCircleMovement()
				updateLabelPositions()
				updateLineHighlights()
			}

			function mouseup() {
				div.classed("enabled", false).classed("disabled", true);
				w.on("mousemove", null).on("mouseup", null);

				d3.selectAll('.lineHighLight').call(function (data, index) {
					data.classed('enabled', false);
					data.classed('disabled', true);
				})
			}
		});
	});

	function runAnimation() {
		highlighter.attr('x', circle3.attr('cx'))
		highlighter.attr('y', circle3.attr('cy'))

		var sideLength = distanceBetweenCircles(circle1, circle2)
		highlighter.attr('width', sideLength)
		highlighter.attr('height', sideLength)

		var angle = getAngleDeg(circle1.attr('cx'), circle1.attr('cy'), circle2.attr('cx'), circle2.attr('cy'))

		rotationAnimationAngle = angle;

		highlighter.attr('transform', 'rotate( ' + (angle).toString() + ' ' + circle3.attr('cx') + ' 0 )')

		d3.select("#highlighter")
			.style("opacity", .5)
			.transition()
			.duration(2000)
			.attrTween("transform", tween)
			.attr('x', 350)
			.attr('y', 30)
			.transition()
			.duration(200)
			.style("opacity", 0)

		d3.select("#cSquare")
			.transition()
			.delay(1300)
			.style("opacity", 1)
			.duration(500)
			.transition()
			.duration(500)
			.style("opacity", 0)

		function tween(d, i, a) {
			return d3.interpolateString("rotate(" + angle + ", " + circle3.attr('cx') + ", 0)", "rotate( 0," + circle3.attr('cx') + ", 0)");
		}
	}