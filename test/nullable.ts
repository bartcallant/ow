import test from 'ava';
import ow from '../source';

test('nullable', t => {
	t.notThrows(() => {
		ow(1, ow.nullable.number);
	});

	t.notThrows(() => {
		ow(null, ow.nullable.number);
	});

	t.notThrows(() => {
		ow(null, ow.nullable.string.minLength(3));
	});

	t.notThrows(() => {
		ow(null, ow.nullable.any(ow.string, ow.number));
	});

	t.throws(() => {
		ow(undefined, ow.nullable.number);
	}, 'Expected argument to be of type `number` but received type `undefined`');

	t.throws(() => {
		ow('1' as any, ow.nullable.number);
	}, 'Expected argument to be of type `number` but received type `string`');
});
