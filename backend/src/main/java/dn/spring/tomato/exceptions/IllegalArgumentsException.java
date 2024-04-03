package dn.spring.tomato.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class IllegalArgumentsException extends RuntimeException {
  String msg;

  public IllegalArgumentsException(String msg) {
    this.msg = "Invalid Arguments of " + msg;
  }

  public String getMessage() {
    return msg;
  }
}
