import path from 'path';
import { testWithLocation } from 'test-fixture';

testWithLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/jsx/invalid-unexpected-comma.src.js',
  ),
  {
    useJSXTextNode: false,
  },
);