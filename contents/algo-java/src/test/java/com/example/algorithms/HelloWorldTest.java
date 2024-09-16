package com.example.algorithms;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class HelloWorldTest {
  @Test
  public void testHelloWorld() {
    assertEquals("Hello, World!", HelloWorld.helloWorld());
  }
}