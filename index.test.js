function pipeline() {
  return 'This is the end of the pipeline!';
}

test('string outputs: This is the end of the pipeline!', () => {
  expect(pipeline()).toMatch('This is the end of the pipeline!');
});