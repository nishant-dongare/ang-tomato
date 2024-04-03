package dn.spring.tomato.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.UNAUTHORIZED)
public class AuthenticationException extends RuntimeException {
  final String message;

  public AuthenticationException() {
    this.message = "Incorrect email or password";
  }
}
