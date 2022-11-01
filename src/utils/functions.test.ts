import { truncateString } from "./functions"

test('should contain (...)', () =>{
  const result = truncateString('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio voluptas obcaecati atque nulla suscipit, molestiae, qui vero adipisci, quod et ea pariatur. Et quos distinctio sapiente voluptatibus. Voluptate, pariatur officia?');
  expect(result).toContain('...')
});

test('should not contain (...)', () =>{
  const result = truncateString('Lorem ipsum dolor sit amet');
  expect(result).not.toContain('...')
})