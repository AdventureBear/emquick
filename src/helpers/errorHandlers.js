// catch 404 and forward to error handler
const catch404 = (...args) => {
  const [, , next] = args
  const err = new Error('Not Found')
  err.status = 404
  next(err)
}

/**
 * development error handler
 * will print stacktrace
 */
const devErrorHandler = (...args) => {
  const [err, , res] = args
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: err,
  })
}

/**
 * production error handler
 * no stacktraces leaked to user
 */
const prodErrorHandler = (...args) => {
  const [err, , res] = args
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {},
  })
}

const errorHandler =
  process.env.NODE_ENV === 'development' ? devErrorHandler : prodErrorHandler

module.exports = [catch404, errorHandler]
