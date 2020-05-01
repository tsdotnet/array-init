import arrayInit from '../src/arrayInit';

function validate (length: number): void
{
	expect(arrayInit<any>(length).length).toBe(length);
}

describe('arrayInit', () => {
	it('produces proper length arrays', () => {
		validate(10);
		validate(10000);
		validate(70000);
		validate(700000);
	});
});
