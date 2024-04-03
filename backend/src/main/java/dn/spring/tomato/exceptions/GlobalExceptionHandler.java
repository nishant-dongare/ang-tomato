package dn.spring.tomato.exceptions;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@ControllerAdvice
public class GlobalExceptionHandler {

  @ExceptionHandler(ResourceNotFoundException.class)
  public ResponseEntity<String> handleResourceNotFoundException(ResourceNotFoundException resourceNotFoundException) {
    return new ResponseEntity<String>(resourceNotFoundException.getMessage(), HttpStatus.BAD_REQUEST);
  }

  @ExceptionHandler(IllegalArgumentsException.class)
  public ResponseEntity<String> handleIllegalArguments(IllegalArgumentsException exc) {
    return new ResponseEntity<String>(exc.getMessage(), HttpStatus.BAD_REQUEST);
  }

  @ExceptionHandler(AuthenticationException.class)
  protected ResponseEntity<Object> handleAuthenticationException(
      AuthenticationException ex, WebRequest request) {
    return new ResponseEntity<>(ex.message, HttpStatus.UNAUTHORIZED);
  }

}
