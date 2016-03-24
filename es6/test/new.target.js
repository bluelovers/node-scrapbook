	// JavaScript source code

	var should = require('should');
	var chai = require('chai');
	var expect = require('chai').expect;
	var assert = require('chai').assert;

	describe('new.target', function () {

		describe('new.target in function calls', function () {

			function Foo() {
				if (!new.target) throw 'Foo() must be called with new';
			}

			it('Foo instantiated with new', function () {
				(new Foo()).should.be.an.instanceof(Foo);
			});

			it('Foo() must be called with new', function () {
				//Foo().should.throw('Foo() must be called with new');
				assert.throws(Foo, 'Foo() must be called with new');
			});

		});

	});
