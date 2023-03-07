// Qual ambiente

if (process.env.NODE_ENV === 'development') {
    // ...
    require('http').use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  }
  
  if (process.env.NODE_ENV === 'production') {
    // ...
    require('http').use(express.errorHandler());
  }
  
  if (['production', 'staging'].includes(process.env.NODE_ENV)) {
    // ...
  }