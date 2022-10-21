package com.example.demo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import org.apache.log4j.Logger;

@ControllerAdvice
public class GlobalExceptions {

    private static Logger logger = Logger.getLogger(GlobalExceptions.class);

    public ResponseEntity<String> tratarErrorNotFound(ResourceNotFoundException e){
        logger.error(e.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage()+ " - GLOBAL");
    }
    @ExceptionHandler({BadRequestException.class})
    public ResponseEntity<String> badRequestHandler(BadRequestException ex){
        logger.error(ex.getMessage());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
    }
    @ExceptionHandler({ReferentialIntegrityException.class})
    public ResponseEntity<String> referentialIntegrityHandler(ReferentialIntegrityException ex){
        logger.error(ex.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(ex.getMessage());
    }


}
