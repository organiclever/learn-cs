package com.example.algorithms;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

public class HelloWorldTest {

  @Test
  public void testHelloWorld() {
    assertEquals("Hello, World!", HelloWorld.helloWorld());
  }
}
