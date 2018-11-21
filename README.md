## prereqs

You need to be able to publish the new artifact to a node repo

## Steps

1. npm run bootstrap && npm run build
1. go into packages/express and run node dist/index.js

## Expected

It should work

## Actual

I get...

    const x = new _mine_test_lib__WEBPACK_IMPORTED_MODULE_0__["Test"]();
    TypeError: _mine_test_lib__WEBPACK_IMPORTED_MODULE_0__.Test is not a constructor